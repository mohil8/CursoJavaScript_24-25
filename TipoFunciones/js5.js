window.addEventListener('load',inicio);

function inicio(){

    const contenedor = document.querySelector('.col-lg-4');
    const br = document.createElement('br');
    const texto1 = document.createElement('span');
    texto1.textContent = 'red green blue yellow blue pink';
    texto1.style.border="3px solid yellow";

    const texto2 = document.createElement('span');
    texto2.style.border="2px solid blue";
    texto2.textContent = texto1.textContent.replace('red','rojo')
    .replace('green','verde').replaceAll(' ',';');
    
    



    contenedor.append(br,texto1,texto2);


}