window.addEventListener('load',inicio);

const cuerpo = document.body;
    const contenedor = cuerpo.getElementsByClassName('col-lg-4')
    const espacio = document.createElement('span');
    espacio.style.border="3px solid red";
    contenedor.espacio(espacio);
function inicio(){
    
    

    const titulo = ' Desarrollo de aplicaciones web ';
    const titulo2 = ' Desarrollo de aplicaciones multiplataforma';
    const resultado = titulo.trim().concat(titulo2.trim());
    espacio.textContent=resultado;

}