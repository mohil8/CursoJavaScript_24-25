window.addEventListener('load',inicio);

function inicio(){

    let accion = document.querySelector('#validar')
    accion.onsubmit = empezar;

    function empezar(){

         //Identificamos elementos
    let usuario = document.querySelector('#usuario').value;
    let contraseña = document.querySelector('#contraseña').value;
    //Identificamos sm
    let smUsuario = document.querySelector('#smUsuario');
    let smContraseña = document.querySelector('#smContraseña');
    
    //Boleano para pasar
    let avanzar = true;

    //Valido usuario
    let hayNumero = false;
    let hayLetra = false;

    for(let i=0;i<usuario.length;i++){
        
        if(!isNaN(usuario[i])){
            hayNumero = true;
        }
        if(isNaN(usuario[i])){
            hayLetra=true;
        }

    }
    
    if(hayNumero==false || hayLetra==false){
        avanzar=false;
        smUsuario.textContent="El usuario debe contener letras y números"
    }else if(usuario.length<=3){
        avanzar = false;
        smUsuario.textContent="El usuario debe contener más de 3 caracteres";
    }else{
        smUsuario.textContent="";
    }

    //Validamos Contraseña
    // Validamos Contraseña
    hayMayus = false;
    hayMinus = false;
    hayNumeroContraseña = false;
    hayLetraContraseña = false;

    for (let i = 0; i < contraseña.length; i++) {
    // Comprobar si es mayúscula
    if (contraseña[i] === contraseña[i].toUpperCase() && isNaN(contraseña[i])) {
        hayMayus = true;
    }
    // Comprobar si es minúscula
    if (contraseña[i] === contraseña[i].toLowerCase() && isNaN(contraseña[i])) {
        hayMinus = true;
    }
    // Comprobar si es número
    if (!isNaN(contraseña[i])) {
        hayNumeroContraseña = true;
    }
    // Comprobar si es letra
    if (isNaN(contraseña[i])) {
        hayLetraContraseña = true;
    }
}

    if (contraseña.length <= 8) {
        avanzar = false;
        smContraseña.textContent = "La contraseña debe contener más de 8 caracteres";
    } else if (!hayMayus || !hayMinus) {
        avanzar = false;
        smContraseña.textContent = "La contraseña debe contener mayúsculas y minusculas";
        
    } else if (!hayNumeroContraseña || !hayLetraContraseña) {
        avanzar = false;
        smContraseña.textContent = "La contraseña debe contener letras y números";
    } else {
        smContraseña.textContent = "";
    }


    return avanzar;

    }
   

   
}
