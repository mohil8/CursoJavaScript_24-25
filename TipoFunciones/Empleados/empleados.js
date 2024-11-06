window.addEventListener('load',inicio);

function inicio(){

    const url = 'empleados.csv';


    fetch(url)
    .then(response=>response.text())
    .then(data=>mostrar(data))
    .catch(error=>alert(error))
    .finally(alert('fin'))

    //tabla
    const tabla = document.querySelector('thead tr');
    const body = document.querySelector('tbody');
    
    

    let arrayFilas=[];
    let empleados=[];

    function mostrar(data){

       arrayFilas=data.split('\n');

    

       for(let i=0;i<arrayFilas.length;i++){

        empleados=arrayFilas[i].split(',');

        if(i==0){
            empleados.forEach(ini => {
                
            const th = document.createElement('th');
            const titulo = document.createElement('p');
            titulo.textContent=ini;
            titulo.style.backgroundColor="green";
            th.appendChild(titulo);
            tabla.appendChild(th);
            });
            i++;
            
        }else{

            const tr = document.createElement('tr');
            body.appendChild(tr);
        
            for(let i=0;i<empleados.length;i++){

                const td = document.createElement('td');
                const texto = document.createElement('p');
                td.appendChild(texto);
                tr.appendChild(td);
                texto.textContent=empleados[i];

                if(empleados[1]<30){
                    td.style.backgroundColor="green";
                }else{
                    td.style.backgroundColor='yellow'
                }

                if(empleados[3]>100000 && i==3){
                   texto.style.color='red';
                   texto.style.fontSize="20px"
                }

               
            }

            
            
            

        }
        
        
       }




    }


}
