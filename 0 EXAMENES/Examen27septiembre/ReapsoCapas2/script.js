window.addEventListener("load",empezar);

function empezar(){

    //Identificamos el body 
    const bodyP = document.body;
    //Identificamos el container
    const contenedorPricipal = document.querySelector('.container');
    //Identificamos la gallery
    const cajaBotones = document.querySelector('.gallery');
    //Identificamos le boton de añadirBoton
    const botonAñadir = document.querySelector('#boton-agregar');
    //Creamos un div donde estaran las fotos y lo introducimos en el contenedorPrincipal
    const cajaFotos = document.createElement('div');
    cajaFotos.className = "gallery";
    contenedorPricipal.appendChild(cajaFotos);

    //Para ir aumentando el numero de los botones
    let contador = 1;

    
    //Añademos funcion al boton AñadirBoton
    botonAñadir.addEventListener("click",function(){

    //Creamos el botón cada vez que se da click
    const botones = document.createElement('button');
    botones.textContent = "Botón "+contador;
    contador++;
    cajaBotones.appendChild(botones);
    
    //Añadimos evento a los botones para insertar imagenes
    botones.addEventListener("click",function(){

        cajaFotos.replaceChildren();
        //Este random es para los botones al pulsarlos
        const randomBoton = Math.floor(Math.random()*4)+1;
        

        botones.textContent = randomBoton;

        for(let i=0;i<randomBoton;i++){

            //Y este para seleccionar imagenes random
            let randomimg=Math.floor(Math.random()*20);

            const img = document.createElement('img');
            img.setAttribute("src","/img/"+randomimg+".JPG")
            cajaFotos.appendChild(img);
        }
    })

    })
}