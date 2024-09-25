window.addEventListener("load",inicio);

function inicio(){

    //Identificamos el body donde insertaremos el contenedor 
    const bodyP = document.body;

    //creamos la caja principal
    const cajaPrincipal = document.createElement('div');
    cajaPrincipal.className = 'container';
    bodyP.appendChild(cajaPrincipal);

    //creamos caja interior y la introducimos en la caja principal
    const cajaInterior = document.createElement('fieldset');
    cajaInterior.className = "gallery";
    const leg = document.createElement('legend');
    leg.textContent = "Practica imágenes";
    cajaInterior.appendChild(leg);
    cajaPrincipal.appendChild(cajaInterior);
    
    //Activamos funcion
    añadirImagenes();

    //Funciona donde insertamos las imagenes a la caja
    function añadirImagenes(){
    
        /*Creamos la imagen le asignamos un direccion random y la insertamos dentro de la caja*/
        for(let i=0;i<20;i++){
            const random = Math.floor(Math.random()*20);
            const img = document.createElement('img');
            img.setAttribute("src","https://randomuser.me/api/portraits/men/"+random+".jpg");
            cajaInterior.appendChild(img);
            //Le asignamos a la foto una funcion, al dar clik en la foto el borde cambia
            img.addEventListener("click",function(){

                img.style.border = "5px solid blue";
            })

        }   

       
    }

}