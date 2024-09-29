window.addEventListener('load',empezar);

function empezar(){

    const body = document.body;

    //Indentificamos boton para cargar tabla
    const boton = document.querySelector('#btnTablas');
    boton.addEventListener('click',crear);
    
    //Array colores 
    const colores = ['red','orange','blue','yellow','green'];
    
      //Crear tabla 
      const tabla = document.createElement('table');
      body.appendChild(tabla);
      tabla.style.border= '1px solid black';
      tabla.style.borderCollapse = 'collapse'
      tabla.style.width ='50%';

    function crear(){

        //Contador de boton
        let contador = 1;

        tabla.replaceChildren();
        //Numero de filas
        const pedirFila = prompt('Introduce el número de fila');
        //Número de columas
        const pedirColumna = prompt('Introduce número de columnas');

      

        for(let i=0;i<pedirFila;i++){

            const filas = document.createElement('tr');
            tabla.appendChild(filas);
            for(let j=0;j<pedirColumna;j++){

                //Random para seleccionar color
                const random = Math.floor(Math.random()*5);

                //Creamos los botones 
                const botonCaja = document.createElement('button');
                botonCaja.textContent = 'Botón '+contador;
                contador++;
                botonCaja.style.backgroundColor = colores[random];
                
                //Añadimos función al botón creado
                botonCaja.addEventListener('click',function(){

                    alert("El color es: "+botonCaja.style.backgroundColor)
                })
               
                //Creamo las columnas y añadimos los botones en ellas
                const columas = document.createElement('td');
                columas.appendChild(botonCaja);
                columas.style.border = '1px solid black'
                filas.appendChild(columas);
            }
            
            
        }
    }

}