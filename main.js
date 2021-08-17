'use strict'

// En esta función reuniré todo el scroll hacia abajo
// Si tienes duda sobre esto busca smooth scroll Javascript en Youtube
// Link https://www.youtube.com/watch?v=oUSvlrDTLi4


function smoothScroll(target, duration){
    var target = document.getElementById(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;


    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if(timeElapsed < duration) requestAnimationFrame(animation)
    };


    // Función que saqué de la página para el estilo de scroll 
    // Link http://www.gizma.com/easing/
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    };



    requestAnimationFrame(animation);
    
};

    
const arrowDown = document.getElementById('down');
arrowDown.addEventListener('click', function(){
    smoothScroll('footer', 3000);
});

const servicesButton = document.getElementById('serviceButton');
servicesButton.addEventListener('click', function(){
    smoothScroll('secondSection', 2000);
});

const aboutUsButton = document.getElementById('aboutUsButton');
aboutUsButton.addEventListener('click', function(){
    smoothScroll('aboutUs', 2000);
});

const projectsButton = document.getElementById('projectsButton');
projectsButton.addEventListener('click', function(){
    smoothScroll('projects', 2500);
});

const contactButton = document.getElementById('contactButton');
contactButton.addEventListener('click', function(){
    smoothScroll('footer', 3000);
});