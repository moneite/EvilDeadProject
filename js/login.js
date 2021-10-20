/*
JavaScript
web o pagina: Evil Dead Project
Asignaturas: Lenguaje de Marcas, Sistemas Informáticos y Entornos de Desarrollo
Curso: 1º Desarrollo de Aplicaciones Multiplataforma
Centro: Cenec Málaga
Autor: Miguel Ángel Arcos Reyes
Fecha: Mayo 2021
*/

//Función que comprueba si el usuario está logueado. Si lo está muestra y oculta diferentes partes de la web.
window.onload = function comprobarLogin() {
        if (sessionStorage.getItem("user").length > 0) {
            $('#loginOculto').css('display', 'none');
            $('#logout').css('display', 'inline-block');
            $('#ZonaFan').css('display', 'inline-block');
            $('#conectado').css('display', 'inline-block');
        }
    }
    //Linea que muestra el nombre de usuario
document.getElementById("conectado").innerHTML = "| Bienvenid@ " + sessionStorage.getItem("user") + " |";

//Función encargada de dar o no acceso a la página de zona fan desde el boton de extras de la sección de cine.
function extras() {
    if (sessionStorage.length > 0) {
        window.location.href = "./zonafan.html";
    } else {
        window.alert("Debes estar logueado para acceder a esta página.");
    }
}

//Función que elimina el sessionstorage y por lo tanto cierra sesion. Para ello muestra un alert de confirmación
function cerrarSesion() {
    if (typeof(Storage) !== "undefined") {
        if (confirm("¿Desea Cerrar Sesión?")) {
            sessionStorage.removeItem("user");
            window.location.href = "./index.html";
        }

    } else {
        alert("Este navegador no soporta web storage...");
    }

    return false;
}

//Función encargada de leer un XML y llamar a otras funciones a partrir de esta
function leerXML() {


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            miFuncion(this);
        }
    };
    xhr.open("GET", "registrados.xml", true);
    xhr.send();

}

//Función que comprueba si un xml contiene el nombre de usuario y de pass introducidos anteriormente por el usuario en la página de login
function miFuncion(xml) {

    var i;
    var nombre;
    var xmlDoc = xml.responseXML;

    var x = xmlDoc.getElementsByTagName("usuario");
    loginAceptado = false;

    for (i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == document.getElementById("user").value) {
            if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == document.getElementById("pass").value) {
                loginAceptado = true;
                nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
                pass = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
                if (typeof(Storage) !== 'undefined') {
                    // Código cuando Storage es compatible
                    sessionStorage.setItem('user', nombre);
                    sessionStorage.setItem('clave', pass);
                } else {
                    alert("El navegador no es compatible con SessionStorage.")
                        // Código cuando Storage NO es compatible
                }
                break;

            }
        }
    }

    if (loginAceptado == true) {
        window.alert("Bienvenid@ " + nombre);
        window.history.go(-1);

    } else {
        window.alert("Usuario o contraseña incorrectos");
    }


}