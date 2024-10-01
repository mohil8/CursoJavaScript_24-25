window.addEventListener('load', empezar);

function empezar() {
    
    let accion = document.getElementById('validar');

    accion.onsubmit = inicio;

    function inicio() {

        let avanzar = true;
        
        //Primer cuadro de texto: entre 3 y 5

        let expediente = document.querySelector('#idExpediente');
        let contExp= expediente.value;
        let smExp = document.querySelector('#smExpediente');
        

        if(contExp.length < 3 || contExp.length > 5){
            avanzar = false;
            smExp.textContent="tiene que tener entre 3 y 5 caracteres";
        }else if(isNaN(contExp)){
            avanzar = false;
            smExp.textContent = "el expediente tiene que ser un valor numerico"
        }else{
            smExp.textContent='';
        }
        //Segunda validación NOmbre: al menos 3 letras y solo letra

        let nombre = document.querySelector('#idNombre').value;
        let smNom = document.querySelector('#smNombre');

        if(nombre.length<3){
            avanzar=false;
            smNom.textContent="Número de caracteres inferior al permitido"
            //IndexOf averigua si hay al menos un número dentro del nombre
        }else if((nombre.indexOf("0123456789")=!-1)){
            avanzar=false;
            smNom.textContent="Solo caracteres [A-Z]"
        }else{
            smExp.textContent="";
        }
        return avanzar;
        



    }
}

