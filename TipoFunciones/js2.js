window.addEventListener('load',inicio);


function inicio(){

    let nombre = prompt('Teclea tu nombre');
    let nombre5car = nombre.slice(0,5);

    alert(nombre5car);

    let ultimo5caracteres=nombre.slice(-5);
    alert(ultimo5caracteres);

}