window.addEventListener('load', empezar);

function empezar() {
    
    let accion = document.getElementById('validar');

    accion.onsubmit = inicio;

    function inicio() {

        let avanzar = true;
        
        //Primer cuadro de texto: entre 3 y 5

        let expediente = document.querySelector('#idExpediente').value;
        let smExp = document.querySelector('#smExpediente');
        

        if(expediente.length < 3 || expediente.length > 5){
            avanzar = false;
            smExp.textContent="tiene que tener entre 3 y 5 caracteres";
        }else if(isNaN(expediente)){
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
        }else if(/[0-9]/.test(nombre)){  // Verifica si hay algún número en el nombre
            avanzar=false;
            smNom.textContent="Solo caracteres [A-Z]";

        }else{
            smExp.textContent="";
        }

        let apellido = document.querySelector('#idApellido').value;
        let smApellido = document.querySelector('#smApellido');

        if(apellido.length<3){
            avanzar=false;
            smApellido.textContent="Número de caracteres inferior al permitido"
            //IndexOf averigua si hay al menos un número dentro del nombre
        }else if(/[0-9]/.test(apellido)){  // Verifica si hay algún número en el nombre
            avanzar=false;
            smApellido.textContent="Solo caracteres [A-Z]";

        }else{
            smExp.textContent="";
        }

        //Tercera validación: 

        let SGE = document.querySelector('#idSGE').value;
        let smSge = document.querySelector('#smSGE');

        if(SGE<=0  || SGE>10){

            avanzar = false;
            smSge.textContent = 'La nota debe estar entre 1 y 10';
        }else if(isNaN(SGE)){

            avanzar=false;
            smSge.textContent = 'Este campo no puede contener letras';
        }else{
            smSge.textContent='';
        }

        //Cuarta validación: 

        let DI = document.querySelector('#idDI').value;
        let smDi = document.querySelector('#smDI');

        if(DI<=0  || DI>10){

            avanzar = false;
            smDi.textContent = 'La nota debe estar entre 1 y 10';
        }else if(isNaN(DI)){

            avanzar=false;
            smDi.textContent = 'Este campo no puede contener letras';
        }else{
            smDi.textContent='';
        }

        //Quinta validación

        let AD = document.querySelector('#idAD').value;
        let smAd = document.querySelector('#smAD');

        if(AD<=0  || AD>10){

            avanzar = false;
            smAd.textContent = 'La nota debe estar entre 1 y 10';
        }else if(isNaN(AD)){

            avanzar=false;
            smAd.textContent = 'Este campo no puede contener letras';
        }else{
            smAd.textContent='';
        }

         //Quinta validación

         let PSP = document.querySelector('#idPSP').value;
         let smPsp = document.querySelector('#smPSP');
 
         if(PSP<=0  || PSP>10){
 
             avanzar = false;
             smPsp.textContent = 'La nota debe estar entre 1 y 10';
         }else if(isNaN(PSP)){
 
             avanzar=false;
             smPsp.textContent = 'Este campo no puede contener letras';
         }else{
             smPsp.textContent='';
         }

         let PMM = document.querySelector('#idPMM').value;
         let smPmm = document.querySelector('#smPMM');
 
         if(PMM<=0  || PMM>10){
 
             avanzar = false;
             smPmm.textContent = 'La nota debe estar entre 1 y 10';
         }else if(isNaN(PMM)){
 
             avanzar=false;
             smPmm.textContent = 'Este campo no puede contener letras';
         }else{
             smPmm.textContent='';
         }

        return avanzar;

        
    }
}

