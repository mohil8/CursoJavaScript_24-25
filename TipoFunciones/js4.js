window.addEventListener('load',inicio);


function inicio(){
    
    
    const contenedor = document.querySelector('.col-lg-4')
    const espacio = document.createElement('span');
    espacio.style.border="3px solid red";
    contenedor.appendChild(espacio);

    const titulo = " Desarrollo de aplicaciones web ";
    const titulo2 =" Desarrollo de aplicaciones multiplataforma ";

    espacio.textContent= titulo.trim()+titulo2.trim();




}