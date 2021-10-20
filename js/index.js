/*
JavaScript
web o pagina: Evil Dead Project
Asignaturas: Lenguaje de Marcas, Sistemas Informáticos y Entornos de Desarrollo
Curso: 1º Desarrollo de Aplicaciones Multiplataforma
Centro: Cenec Málaga
Autor: Miguel Ángel Arcos Reyes
Fecha: Mayo 2021
*/

/*Funciones del menú entre las que se incluye la aparición del logo cuando hacemos scroll,
la disminución del tamaño de la barra del nav o que se muestre el menú en modo móvil */
$('.navTrigger').click(function() {
    $(this).toggleClass('active');
    console.log("Clicked menu ");
    $("#mainListDiv ").toggleClass("show_list ");
    $("#mainListDiv ").fadeIn();

});
$(function() {
    $(document).scroll(function() {
        var $nav = $(".nav ");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(function() {
    $(document).scroll(function() {
        var $nav = $("#logoGrande ");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(function() {
    $(document).scroll(function() {
        var $nav = $(".logoblanco ");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//Función que establece el tiempo que hay de transición para que aparezcan las imágenes a las que se les aplique la librería AOS
AOS.init({
    duration: 1200,
});