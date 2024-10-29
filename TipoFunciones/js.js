window.addEventListener('load',inicio);

function inicio(){

    let nombre = prompt('teclea tu nombre');
    let nomMay = nombre.toUpperCase();
    alert('Tu nombre en mayuscula es'+nomMay);

    let nombre2=prompt('Teclea tu nombre en mayuscula');;

    
    while(nombre2 != nombre2.toUpperCase()){

        nombre2 = prompt('No está en mayuscula, introduce tu nombre de nuevo: ');
    }

    alert(nombre2);

}