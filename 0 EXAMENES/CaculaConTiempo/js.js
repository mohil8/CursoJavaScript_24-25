window.addEventListener("load", empezar);

function empezar() {

    const body = document.body;

    //Seleccionamos el botón comenzar
    const comenzar = document.querySelector('#inicio');
   
    //Seleccionamos el botón de fin
    const fin = document.querySelector('#fin');

    //Creamos primer valor
    const Num1 = document.createElement('span');
    const random1 = Math.floor(Math.random() * 100);
    Num1.textContent = random1;
    body.appendChild(Num1);

    //Metemos espacio
    const espacio = document.createElement('br');
    body.appendChild(espacio);

    //Creamos el operador
    const cajaOperador = document.createElement('span');
    body.appendChild(cajaOperador);
    const operadores = ['+', '-', '*', '/'];
    const randomOp = Math.floor(Math.random() * 4); // Cambiado a 4 para incluir todos los operadores
    cajaOperador.textContent = operadores[randomOp];

    //Añadimos otro espacio
    const espacio2 = document.createElement('br');
    body.appendChild(espacio2);

    //Creamos el segundo valor
    const Num2 = document.createElement('span');
    const random2 = Math.floor(Math.random() * 10);
    Num2.textContent = random2;
    body.appendChild(Num2);

    const espacio3 = document.createElement('br');
    body.appendChild(espacio3);

    //Creamos el input y el botón para comprobar resultados
    const input = document.createElement('input'); // Corregido "imput" por "input"
    input.type = 'number'; // Para que sea de tipo numérico
    body.appendChild(input);
    
    const comprobar = document.createElement('button');
    comprobar.textContent = 'Comprobar resultado';
    comprobar.addEventListener("click", añade);
    body.appendChild(comprobar);

    //Creamos la puntuación
    let puntuacion = 0;
    const puntos = document.createElement('p');
    puntos.textContent = 'Puntos: ' + puntuacion;
    body.appendChild(puntos); 

    //Creamos errores
    let errores = 0;
    const error = document.createElement('p');
    error.textContent = 'Errores: ' + errores;
    body.appendChild(error);

    let resultado = 0;

    // Determinamos el resultado según el operador seleccionado
    if (cajaOperador.textContent === '+') {
        resultado = random1 + random2;
    } else if (cajaOperador.textContent === '-') {
        resultado = random1 - random2;
    } else if (cajaOperador.textContent === '*') {
        resultado = random1 * random2;
    } else if (cajaOperador.textContent === '/') {
        resultado = random1 / random2;
    }

    function añade() {
        const respuesta = parseFloat(input.value); // Obtenemos el valor del input

        if (respuesta === resultado) {
            puntuacion++;
            puntos.textContent = 'Puntos: ' + puntuacion;
        } else {
            errores++;
            error.textContent = 'Errores: ' + errores;
        }
    }
}
