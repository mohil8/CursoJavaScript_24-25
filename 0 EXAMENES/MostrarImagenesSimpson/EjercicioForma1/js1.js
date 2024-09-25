window.addEventListener("load",empezar);

    function empezar(){

        //Creamos el boton y lo configuramos
        const boton = document.createElement("button");
        document.body.appendChild(boton);
        boton.setAttribute('id','boton')
        boton.textContent="Cambio Imagen";
        boton.addEventListener("click",pulsar1);

        function pulsar1(){

            //creamos el array de nodos imagen
            var imagenes = document.querySelectorAll("img");
        
            //creamos el bucle para recorrer la var imagenes
            for(let i =0;i<imagenes.length;i++){

            /*Creamos un número random y se lo asignamos a la ruta de la foto*/
            let numRandom= Math.round(Math.random()*19);
            imagenes[i].setAttribute("src","img/"+numRandom+".JPG");

            }

        }
        

        



        

    }


