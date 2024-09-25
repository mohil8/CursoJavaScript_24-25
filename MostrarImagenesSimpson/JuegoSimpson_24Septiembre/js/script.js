window.addEventListener("load",inicio);
function inicio(){


console.log("entro en js")
const personajes=["toni","chang","ned","homero","mars","malospelos","ken","lisa","krusty","moe","martin"];
//cada 2 segundos se cambian las imágenes
setInterval(cargarImagenes,2000);
//contenedor que contiene todas las imágenes
const cajaGallery=document.querySelector(".gallery");
const contenedorMuestra=document.querySelector(".claseMuestra");
       //crear contenido de imagen de  referencia
        const imagenMuestra=document.createElement("img");
        //obtengo un random para seleccionar la imagen
        let numRandom=Math.floor(Math.random()*personajes.length)
        //cargar con setAttribue una imagen img/.jpg en el atributo src
        imagenMuestra.setAttribute("src",'img/'+numRandom+".JPG")
           
        //ubicar la imagen a la caja
        contenedorMuestra.appendChild(imagenMuestra);
       
function cargarImagenes(){
    //function que resetea el contenido de la caja
    //cada 2 segundos
    limpiarCaja();
    for (let i=0;i<25;i++){
        //crear una etiqueta imagen (img)
        let item=document.createElement("img");
        //texto que contiene el nombre de la imagen
        let rotulo=document.createElement("span");
        let x=Math.floor(Math.random()*10);
        //dotar de atributo una etiqueta img
        item.setAttribute("src",'img/'+x+'.JPG');
        //añadir nombre al item
        item.className="gallery img"
        //añadir el texto cerca de la imagen
        rotulo.innerText=personajes[x];
        
        //añadirlo a la caja padre
        cajaGallery.appendChild(item);
        cajaGallery.appendChild(rotulo);
        item.addEventListener("click",()=>{
            if (numRandom==x){ alert("acierto")}
        })
    }
}
function limpiarCaja(){
    while (cajaGallery.firstChild){
        cajaGallery.removeChild(cajaGallery.firstChild);
    }
}
}