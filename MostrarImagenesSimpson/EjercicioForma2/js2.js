window.addEventListener("load",empezar);


function empezar(){

    //Creamos el botón para ir cambiando imagenes y le asignamos una función
    const boton = document.createElement("button");
    document.body.appendChild(boton);
    boton.setAttribute('id','boton')
    boton.textContent="Cambio Imagen";
    boton.addEventListener("click",pulsar1);

        //Seleccionamos el nodo donde añadiremos los nodos img que vamos a crear
        const galeria = document.querySelector('.gallery');

        //creamos los nodos img y los añadimos al nodo gallery
        for(let i=0;i<10;i++){

        let img = document.createElement('img');
        galeria.appendChild(img);        
     }


     //Al pulsar el boton creado anterior mente entramos en esta función
    function pulsar1(){

    //le asignamos a imagenes un array con todos los nodos img
     let imagenes = document.querySelectorAll('img');
     for(let i=0;i<imagenes.length;i++){

        //creamos un numero random para asignarselo a la ruta y elegir fotos aleatorias
        var numRandom = Math.round(Math.random()*19);
        imagenes[i].setAttribute("src","img/"+numRandom+".JPG");
     }
    }
    


}