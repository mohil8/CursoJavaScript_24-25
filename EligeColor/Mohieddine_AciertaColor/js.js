window.addEventListener("load", empezar);

function empezar() {
    const botonJugar = document.getElementById('jugar');
    botonJugar.addEventListener('click', jugar);
    const botonCuadro = document.getElementById('cuadro');
    const tiempo = document.getElementById('tiempo');
    const puntuacion = document.getElementById('puntos');
    const errores = document.getElementById('err');

    let segundos;
    let puntos;
    let error;

    const colores = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    let terminar;

    function jugar() {
        segundos = 30;
        puntos = 0;
        error = 0;
        tiempo.textContent = 'Segundos: ' + segundos;
        puntuacion.textContent = 'Puntos: ' + puntos;
        errores.textContent = 'Errores : ' +error;


       
        clearInterval(terminar);
        
        //Si el tiempo 
        terminar = setInterval(() => {
            if (segundos > 0) {
                segundos--;
                tiempo.textContent = 'Segundos: ' + segundos; 
            } else {
                finJuego(); 
            }

            //vamos cambiando colores y nombres del cuadro
            const nomRandom = Math.floor(Math.random() * colores.length);
            botonCuadro.textContent = colores[nomRandom];
            const coloresRandom = Math.floor(Math.random() * colores.length);
            botonCuadro.style.backgroundColor = colores[coloresRandom];

        }, 1000);

        //al pulsar el botón y acertar ira sumando puntos o errores
        botonCuadro.addEventListener('click', () => {
            if (botonCuadro.style.backgroundColor === botonCuadro.textContent) {
                puntos++;
                puntuacion.textContent = 'Puntos: ' + puntos;
            }else{
                error++;
                errores.textContent = 'Errores: ' + error;
            }
        });
    }

    //finaliza el juego y se para el temporizador
    function finJuego() {
        clearInterval(terminar);
        alert("Puntuación final: " + puntos);
    }
}
