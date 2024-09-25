window.addEventListener("load",inicio);

function inicio() {
    //contenedor existente
    const cuerpo=document.body;
    console.log("cuerpo:"+cuerpo)
    //crear contenedor principal
    const divPrincipal=document.createElement('div');
    divPrincipal.className='contenedorPrincipal';
    divPrincipal.textContent="Estoy en el contenedor principal"
    cuerpo.appendChild(divPrincipal)

    //crear contenedor secundario
    const divSecundario=document.createElement('div');
    //agregar estilo a la nueva caja. el estilo procedente del fichero
    divSecundario.className='contenedorSecundario';
    //agregar texto al contenedor
    divSecundario.textContent="estoy en el segundo"
    //agregar el nuevo contenedor al padre(elemento superior)
    divPrincipal.appendChild(divSecundario)
    const listaBotones=['Botón1','Botón2','Botón3','Botón4','Botón5','Botón6','Botón7','Botón8']
    //bucle para recorrer cada elemento del array
    //item es cada elemento del array
    listaBotones.forEach((item,indice)=>{
        //crear un nuevo botón (total botones: listaBotones.leght)
        const nuevoBoton=document.createElement('button');
        nuevoBoton.textContent=item;
        //agregar la clase botonX
        nuevoBoton.className='botonX';
        divSecundario.appendChild(nuevoBoton);
        nuevoBoton.addEventListener("click",()=>{
            console.log("evento de"+item);
            //crear imagen por cada evento click
            let numeroRandom=Math.round(Math.random()*20);
            const imagenX=document.createElement("img");
            if(indice%2==0) {
            
            imagenX.setAttribute("src","https://randomuser.me/api/portraits/women/"+numeroRandom+".jpg")
            }else {
                imagenX.setAttribute("src","https://randomuser.me/api/portraits/men/"+numeroRandom+".jpg")
            }
            divSecundario.appendChild(imagenX)
        })
    })

}