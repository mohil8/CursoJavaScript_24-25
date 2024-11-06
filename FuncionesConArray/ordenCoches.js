window.addEventListener('load',empezar);

function empezar(){


    const url ='Coches.json';
    const btnKms=document.querySelector('#ord_kms');
    const btnMarca= document.querySelector('#ord_marca');
    const btnConsumo =document.querySelector('#ord_consumo');


    fetch(url)
    .then(resporse=>resporse.json())
    .then(data=>mostrar(data));
    

    function mostrar(data){

        const tbody= document.querySelector('tbody');
        let arrayCoches=[];
        let cambioKMS =false;
        let cambioMarca=false;
        let cambioConsumo=false;


        //cargar desde el json hasta un array
        data.forEach(coche => {
          
            arrayCoches.push(coche);
    
        });
        
        btnKms.addEventListener('click',()=>{

            tbody.replaceChildren();
            if(cambioKMS){
                const ordenKms=ordenarkms(arrayCoches,cambioKMS);
                ponerDatos(ordenKms,tbody);
                cambioKMS=false
            }else if(cambioKMS==false){
                const ordenKms=ordenarkms(arrayCoches,cambioKMS);
                ponerDatos(ordenKms,tbody);
                cambioKMS=true;
            }

        })

        btnMarca.addEventListener('click',()=>{

            tbody.replaceChildren();
            if(cambioMarca){
                const ordenMarca=ordenarMarca(arrayCoches,cambioMarca);
                ponerDatos(ordenMarca,tbody);
                cambioMarca=false;
            }else if(cambioMarca==false){
                const ordenMarca=ordenarMarca(arrayCoches,cambioMarca);
                ponerDatos(ordenMarca,tbody);
                cambioMarca=true;
            }
        })

        btnConsumo.addEventListener('click',()=>{
            
            tbody.replaceChildren();
            if(cambioConsumo){
                const ordenConsumo=ordenarConsumo(arrayCoches,cambioConsumo);
                ponerDatos(ordenConsumo,tbody);
                cambioConsumo=false;
            }else if(cambioConsumo==false){
                const ordenConsumo=ordenarConsumo(arrayCoches,cambioConsumo);
                ponerDatos(ordenConsumo,tbody);
                cambioConsumo=true;
            }
            

        })
    }

    function ordenarkms(arrayCoches,cambio){

        if(cambio==false){
            let ordenado= arrayCoches.slice().sort((a,b)=>(a.kms-b.kms));;  
            return ordenado; 
        }else if(cambio){
            let ordenado= arrayCoches.slice().sort((a,b)=>(b.kms-a.kms));
            return ordenado;
        }
       
    }

    function ordenarConsumo(arrayCoches,cambio){

        if(cambio==false){
            let ordenado=arrayCoches.slice().sort((a,b)=>(a.consumo-b.consumo));
            return ordenado;
        }else if(cambio){
            let ordenado=arrayCoches.slice().sort((a,b)=>(b.consumo-a.consumo));
            return ordenado;
        }
       
    }

    function ordenarMarca(arrayCoches,cambio){

        if(cambio==false){
            let ordenado=arrayCoches.slice().sort((a,b)=>(a.marca.localeCompare(b.marca)));
            return ordenado;
        }else if(cambio){
            let ordenado=arrayCoches.slice().sort((a,b)=>(b.marca.localeCompare(a.marca)));
            return ordenado;
        }
        

    }

    function ponerDatos(orden,tbody){

        

        orden.forEach(element => {
              
            const tr=document.createElement('tr');
            tbody.appendChild(tr);
            const marca = document.createElement('td');
            marca.textContent=element.marca
            const modelo = document.createElement('td');
            modelo.textContent=element.modelo;
            const kms = document.createElement('td');
            kms.textContent=element.kms;
            const consumo=document.createElement('td');
            consumo.textContent=element.consumo;
            const color=document.createElement('td');
            color.textContent=element.color;
            const precio=document.createElement('td');
            precio.textContent=element.precio;
            const motor=document.createElement('td');
            motor.textContent=element.tipoMotor;
            
             tr.append(marca,modelo,color,kms,consumo,motor,precio);    
             
             
         });
    }

}