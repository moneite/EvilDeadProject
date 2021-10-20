/*
JavaScript
web o pagina: Evil Dead Project
Asignaturas: Lenguaje de Marcas, Sistemas Informáticos y Entornos de Desarrollo
Curso: 1º Desarrollo de Aplicaciones Multiplataforma
Centro: Cenec Málaga
Autor: Miguel Ángel Arcos Reyes
Fecha: Mayo 2021
*/

//Función que se encarga de que aparezca la imagen que dice "ver en Youtube" cada vez que pasamos el ratón por encima de otras imágenes. De esta
//forma aunque hagamos hover en un elemento diferente se le aplica un translate en el eje x al elemento deseado. En este caso la foto que muestra el cartel informativo
//"ver en Youtube"
$(function() {

    $('#logomaking1').hover(function() {

        $('#yt1').css('transform', 'translateX(0%)');
        $('#yt1').css('transition', '500ms');
    }, function() {
        // on mouseout, reset the background colour
        $('#yt1').css('transform', 'translateX(-300%)');
    });
    $('#logomaking2').hover(function() {

        $('#yt2').css('transform', 'translateX(0%)');
        $('#yt2').css('transition', '500ms');
    }, function() {
        // on mouseout, reset the background colour
        $('#yt2').css('transform', 'translateX(-500%)');
    });

    $('#logomaking3').hover(function() {

        $('#yt3').css('transform', 'translateX(0%)');
        $('#yt3').css('transition', '500ms');
    }, function() {
        // on mouseout, reset the background colour
        $('#yt3').css('transform', 'translateX(500%)');
    });

    $('#logomaking4').hover(function() {

        $('#yt4').css('transform', 'translateX(0%)');
        $('#yt4').css('transition', '500ms');
    }, function() {
        // on mouseout, reset the background colour
        $('#yt4').css('transform', 'translateX(300%)');
    });


});