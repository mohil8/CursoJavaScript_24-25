window.addEventListener("load",empezar);

function empezar(){

 
    
  

   const cabezera = document.querySelector('.cabecera');
   const cajaGaleria = document.querySelector('.gallery');
   const puntuacion = document.querySelector('.puntos');
   let puntos=0;
   //Se reinicia la puntuación.
   puntuacion.textContent = "Puntuacion: "+puntos;
   

   //creamos la foto para poder jugar
   crearCabecera();
   //generamso imagenes aleatorias cada 2 segundos
   setInterval(crearImagenes,2000);

   //cabecera
   function crearCabecera(){

      let img = document.createElement('img')
      img.setAttribute("id","fotoCabecera")
      let random2 = Math.floor(Math.random()*20);
      img.setAttribute("src","/img/"+random2+".JPG")
      cabezera.appendChild(img);
   }
   
   //GENERAMOS IMAGENES ALEATORIAS
   function crearImagenes(){

    

    //con este comando borramos todos los hijos del cajaGaleria
    cajaGaleria.replaceChildren();
    //creamos las img y las añadimos a la caja
    for(let i=0;i<20;i++){
   //creamos lo botones
     let botones = document.createElement('button');
   //creamos las imagenes
     let imagenes = document.createElement('img');
     let random = Math.floor(Math.random()*20);
     imagenes.setAttribute("src","/img/"+random+".JPG");
   //Añadimos las imagenes a los botones
     botones.appendChild(imagenes);
   //Añadimos los botones a la caja gallery
     cajaGaleria.appendChild(botones);

     //Al dar click a los botones entramos en la función, en la que si la src de la cabecera coincide con la de la imagen
     //del botón pulsada sumaria puntos.
     botones.addEventListener("click", function () {
     const imgCabecera = document.getElementById("fotoCabecera").src;

      if (imagenes.src === imgCabecera) {
          puntos++;
          puntuacion.textContent = "Puntuacion: " + puntos;
      }
      });
   
    }
      
   }
   

}

