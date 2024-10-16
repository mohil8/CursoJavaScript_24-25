const url = "album.json";

const introducirImg = document.querySelector('#cajaX');

fetch(url)
.then(response => {
    if(!response.ok){
        throw new Error('Error en la respuesta de la red'); 
    }
    return response.json();
})
.then(datos => mostrar(datos))
.catch(error=>alert(error.message))
.finally(() => alert('fin de la solicitud'));

function mostrar(datos){

    datos.forEach(img => {

        let cajaImg = document.createElement('div');
        cajaImg.className="card";
        introducirImg.appendChild(cajaImg);

        let imagen = document.createElement('img');
        imagen.setAttribute('src',img.imagen);
        
        let nombreFoto = document.createElement('p');
        nombreFoto.textContent=img.texto;

        let subFoto = document.createElement('p');
        subFoto.textContent = img.subtexto;

        cajaImg.append(imagen,nombreFoto,subFoto);

        
        
    });

}
