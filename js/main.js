const typed = new Typed('.typed', {
    strings: ['Desarrollador Web Jr','Estudiante de TSU', '21 años'],
    typeSpeed:75,
    startDeLay:10000,
    backSpeed: 65,
    loop: true
});


let i = 0;
let button = document.querySelector('#button').addEventListener('click', function(){
    if(!i){
        document.getElementById('readMore').style.display = 'inline';
        document.getElementById('button').innerHTML = 'Ver Menos';
        i = 1;
    }else{
        document.getElementById('readMore').style.display = 'none';
        document.getElementById('button').innerHTML = 'Ver Más';
        i = 0;
    }
});

window.addEventListener('scroll', function(){
    let animacionProy = document.getElementById('proyectos');
    let animacionCon = document.getElementById('conocimientos');
    let posicionObj2 = animacionCon.getBoundingClientRect().top;
    let positionObj1 = animacionProy.getBoundingClientRect().top;
    let tamañoDePantalla = window.innerHeight/1;
    if(positionObj1 < tamañoDePantalla){
        animacionProy.style.animation = 'mover 1s ease-out';
    }
    if(posicionObj2 < tamañoDePantalla){
        animacionCon.style.animation = 'mover 1s ease-out';
    }
    //1219 - 872
});
