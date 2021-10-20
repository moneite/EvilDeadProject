/*
JavaScript
web o pagina: Evil Dead Project
Asignaturas: Lenguaje de Marcas, Sistemas Informáticos y Entornos de Desarrollo
Curso: 1º Desarrollo de Aplicaciones Multiplataforma
Centro: Cenec Málaga
Autor: Miguel Ángel Arcos Reyes
Fecha: Mayo 2021
*/

//click menú
$('.navTrigger').click(function() {
    $(this).toggleClass('active');
    console.log("Clicked menu ");
    $("#mainListDiv ").toggleClass("show_list ");
    $("#mainListDiv ").fadeIn();

});
//scroll de menú que se encarga de mantener el menu pegado a la parte superior y reducir su altura
$(function() {
    $(document).scroll(function() {
        var $nav = $(".nav ");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//animaciones de aparicion de imágenes
AOS.init({
    duration: 1200,
});


//Lightbox1 que incluye un slider con fotos

let slideIndex = 1;
showSlide(slideIndex);

//Función encargada de que el lightbox se muestre
function openLightbox() {
    document.getElementById('Lightbox').style.display = 'block';
};
//Función encargada de que el lightbox se oculte

function closeLightbox() {
    document.getElementById('Lightbox').style.display = 'none';
};

//Función que permite el avance en el slider
function changeSlide(n) {
    showSlide(slideIndex += n);
};

function toSlide(n) {
    showSlide(slideIndex = n);
};



//Función encargada de comprobar cuantas slides hay y si se ha superado o no el límite y por lo tanto, empezar a contar de 0
function showSlide(n) {
    const slides = document.getElementsByClassName('slide-gallery1');

    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    slides[slideIndex - 1].style.display = 'block';
};

//Lightbox2 que incluye un slider con fotos

let slideIndex2 = 1;
showSlide2(slideIndex2);

//Función encargada de que el lightbox se muestre

function openLightbox2() {
    document.getElementById('Lightbox2').style.display = 'block';
};
//Función encargada de que el lightbox se oculte
function closeLightbox2() {
    document.getElementById('Lightbox2').style.display = 'none';
};



//Función que permite el avance en el slider
function changeSlide2(n2) {
    showSlide2(slideIndex2 += n2);
};

function toSlide2(n2) {
    showSlide2(slideIndex2 = n2);
};



//Función encargada de comprobar cuantas slides hay y si se ha superado o no el límite y por lo tanto, empezar a contar de 0
function showSlide2(n2) {
    const slides2 = document.getElementsByClassName('slide-gallery2');


    if (n2 > slides2.length) {
        slideIndex2 = 1;
    };

    if (n2 < 1) {
        slideIndex2 = slides2.length;
    };

    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    };

    slides2[slideIndex2 - 1].style.display = 'block';
};


//Lightbox3 que incluye un slider con fotos

let slideIndex3 = 1;
showSlide3(slideIndex3);

//Función encargada de que el lightbox se muestre

function openLightbox3() {
    document.getElementById('Lightbox3').style.display = 'block';
};
//Función encargada de que el lightbox se oculte

function closeLightbox3() {
    document.getElementById('Lightbox3').style.display = 'none';
};

//Función que permite el avance en el slider

function changeSlide3(n3) {
    showSlide3(slideIndex3 += n3);
};

function toSlide3(n3) {
    showSlide3(slideIndex3 = n3);
};



//Función encargada de comprobar cuantas slides hay y si se ha superado o no el límite y por lo tanto, empezar a contar de 0

function showSlide3(n3) {
    const slides3 = document.getElementsByClassName('slide-gallery3');


    if (n3 > slides3.length) {
        slideIndex3 = 1;
    };

    if (n3 < 1) {
        slideIndex3 = slides3.length;
    };

    for (let i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    };

    slides3[slideIndex3 - 1].style.display = 'block';
};
//Lightbox4 que incluye un slider con fotos

let slideIndex5 = 1;
showSlide5(slideIndex5);

//Función encargada de que el lightbox se muestre

function openLightbox5() {
    document.getElementById('Lightbox5').style.display = 'block';
};
//Función encargada de que el lightbox se oculte

function closeLightbox5() {
    document.getElementById('Lightbox5').style.display = 'none';
};

//Función que permite el avance en el slider

function changeSlide5(n5) {
    showSlide5(slideIndex5 += n5);
};

function toSlide5(n5) {
    showSlide5(slideIndex5 = n5);
};


//Función encargada de comprobar cuantas slides hay y si se ha superado o no el límite y por lo tanto, empezar a contar de 0


function showSlide5(n5) {
    const slides5 = document.getElementsByClassName('slide-gallery5');


    if (n5 > slides5.length) {
        slideIndex5 = 1;
    };

    if (n5 < 1) {
        slideIndex5 = slides5.length;
    };

    for (let i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";
    };

    slides5[slideIndex5 - 1].style.display = 'block';
};


//Función que permite que se muestre el overlay que contiene el iframe de Youtube con el trailer
function overlayOn() {
    document.getElementById("overlayVideo").style.display = "block";
}
//Función que permite que se oculte el overlay que contiene el iframe de Youtube con el trailer

function overlayOff() {
    document.getElementById("overlayVideo").style.display = "none";
}
//Función que permite que se muestre el overlay que contiene el iframe de Youtube con el trailer

function overlayOn2() {
    document.getElementById("overlayVideo2").style.display = "block";
}
//Función que permite que se oculte el overlay que contiene el iframe de Youtube con el trailer

function overlayOff2() {
    document.getElementById("overlayVideo2").style.display = "none";
}
//Función que permite que se muestre el overlay que contiene el iframe de Youtube con el trailer

function overlayOn3() {
    document.getElementById("overlayVideo3").style.display = "block";
}
//Función que permite que se oculte el overlay que contiene el iframe de Youtube con el trailer

function overlayOff3() {
    document.getElementById("overlayVideo3").style.display = "none";
}
//Función que permite que se muestre el overlay que contiene el iframe de Youtube con el trailer

function overlayOn5() {
    document.getElementById("overlaySerie").style.display = "block";
}
//Función que permite que se oculte el overlay que contiene el iframe de Youtube con el trailer

function overlayOff5() {
    document.getElementById("overlaySerie").style.display = "none";
}