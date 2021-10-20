/*
JavaScript
web o pagina: Evil Dead Project
Asignaturas: Lenguaje de Marcas, Sistemas Informáticos y Entornos de Desarrollo
Curso: 1º Desarrollo de Aplicaciones Multiplataforma
Centro: Cenec Málaga
Autor: Miguel Ángel Arcos Reyes
Fecha: Mayo 2021
*/
//Función que se encarga de introducir el modo día o noche, según sea conveniente y para ello altera el .css de la página a través de JQuery
function cambiarModo() {
    $('body').css('background', 'rgb(223, 219, 219)');
    $('p').css('color', 'black');
    $('.botomododia').css('display', 'none');
    $('.botomodonoche').css('display', 'inline');
    $('.home').css('box-shadow', 'none');
    $('#noche1').css('background', '#45b2d3');
    $('#peli2').css('background', 'rgb(231, 95, 95)');
    $('#peli3').css('background', 'rgb(231, 177, 95)');
    $('#serie').css('background', 'rgb(95, 231, 124)');
    $('#fichaJuego').css('background-size', '25%');
}

//Función que se encarga de introducir el modo día o noche, según sea conveniente y para ello altera el .css de la página a través de JQuery
function cambiarModo2() {
    $('body').css('background', 'black');
    $('p').css('color', 'white');
    $('.botomododia').css('display', 'inline');
    $('.botomodonoche').css('display', 'none');
    $('#noche1').css('background-image', 'url(./media/evildead1bg.jpg)');
    $('#peli2').css('background-image', 'url("./media/evildead2bg.jpg")');
    $('#peli3').css('background-image', 'url("./media/evildead3bg.jpg")');
    $('#serie').css('background-image', 'url("./media/evildead4bg.jpg")');

}

//Función que para volver la página a su estado original tras aplicarle el modo noche realiza una recarga de la página
function cambiarModoFan() {
    location.reload()
}