window.addEventListener('load',empezar);

function empezar(){


    const body = document.body;

    //Indentificamos boton para cargar tabla
    const boton = document.querySelector('#btnTablas');
    boton.addEventListener('click',crear);

    function crear(){

        //Numero de filas
        const pedirFila = prompt('Introduce el número de fila');
        //Número de columas
        const pedirColumna = prompt('Introduce número de columnas');

        //Crear tabla 
        const tabla = document.createElement('table');
        body.appendChild(tabla);
        tabla.style.border= '1px solid black';
        tabla.style.borderCollapse = 'collapse'
        tabla.style.width ='50%';

        for(let i=0;i<pedirFila;i++){

            const filas = document.createElement('tr');
            tabla.appendChild(filas);
            for(let j=0;j<pedirColumna;j++){

                const random = Math.floor(Math.random()*100);
                const columas = document.createElement('td');
                columas.style.border = '1px solid black'
                columas.textContent = random;
                filas.appendChild(columas);
            }
            
            
        }
    }

}