window.addEventListener('load',inicio);


function inicio(){
    let nombre  = prompt('teclea tu nombre completo en minuscula');
    let nombreFinal=nombre.charAt(0).toUpperCase();
    

    for(let i=0;i<nombre.length;i++){

        if(nombre.charAt(i)!=' '){
            nombreFinal+=nombre.charAt(i);
        }else{
            
            nombreFinal+=nombre.charAt(i+1).toUpperCase();
            i++;

        }
    }

    alert(nombreFinal);

}