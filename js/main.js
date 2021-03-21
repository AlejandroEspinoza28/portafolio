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
});
//Particulas
particlesJS(
    {
        "particles": {
          "number": {
            "value": 50,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ff5b00"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 2,
              "color": "#0084ff"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);
