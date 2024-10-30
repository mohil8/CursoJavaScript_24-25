window.addEventListener("load" , inicio);

const cuerpo = document.body;

const contenedor = document.querySelector(".col-lg-12");


function inicio(){

    const url ="texto2.txt"

    fetch(url)
    .then(respuesta=>respuesta.text())
    .then(datos=>mostrar(datos));

}

function mostrar(datos){


    let cadenaLinea=[];
    let cadenaPuntos=[];


    
        cadenaLinea=datos.split("\n");
        
        cadenaLinea.forEach(element => {
            const espacio =document.createElement("p");
            espacio.style.border="3px solid red";
            contenedor.appendChild(espacio);

            cadenaPuntos=element.split(":");
            
            let media = (Number(cadenaPuntos[2])+Number(cadenaPuntos[3])+Number(cadenaPuntos[4]))/3;
            espacio.textContent="Media de "+cadenaPuntos[1]+"-Nota final "+media.toFixed(2);

            
        });


}