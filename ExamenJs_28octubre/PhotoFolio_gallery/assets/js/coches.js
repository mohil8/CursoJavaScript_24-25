window.addEventListener('load',empezar);

function empezar(){

    
    const url = 'coches.json';

    fetch(url)
    .then(response=>response.json())
    .then(coches=>mostrar(coches))
    .catch(error=>alert(error))
    .finally();


    // ejercicio A

    const cochesA=[];
    const cochesB=[];
    let cocheConMasKm='';
    let cocheMasBarato='';

    function mostrar(coches){

        coches.forEach(element => {
            
            //COCHE A
            if(cocheA(element)){
                cochesA.push(element.marca+' '+element.modelo);
            }

            //coches B
            if(element.precio>mediaPrec(coches) && element.kms>mediaKms(coches)){
                cochesB.push(element.marca+' '+element.modelo);
            }
            
        });

        cocheConMasKm=masKms(coches);
        cocheMasBarato=masBarato(coches);
        
        alert(cochesA);
        alert(cochesB);
        alert(cocheConMasKm);
        alert(cocheMasBarato);
        
    }



    function cocheA(coches){

        let valida = false;

        if(coches.color==='Green' && coches.marca==='Volkswagen' && coches.consumo<7 && coches.precio>25000){
         valida=true;   
        }

        return valida;
    }

    
    function masKms(coches){

        let mayor= 0;
        let modelo='';
        let nombre='';

        coches.forEach(element => {
            if(element.kms>mayor){
                modelo=element.modelo;
                nombre=element.marca;
                mayor=element.kms;
            }
        });

    

        return nombre+' '+modelo;

    }

    function masBarato(coches){

        //Le asignamos el precio del primero
        let precioBarato=33710;
        let nombre='';

        coches.forEach(element => {
            
            if(element.precio<precioBarato){

                nombre=element.modelo;
                precioBarato=element.precio;
            }

        });

        return nombre;
    }

    function mediaKms(coches){

        let sumaKM=0;
        let media;

        coches.forEach(element => {
            
            sumaKM+=element.kms;
        });

        media = sumaKM/coches.length;

        return media;
    }

    function mediaPrec(coches){

        let sumaPrec=0;
        let media;
        
        coches.forEach(element => {
           
            sumaPrec+=element.precio
        });

        media=sumaPrec/coches.length;


        return media
    }

    function contColore(coches){

       let conteoMax=0
        let conteoRed=0
        let conteoBlue=0
        let conteoGreen=0
    


        coches.forEach(element => {
            
        });

    }



}