window.addEventListener('load',inicio);

function inicio(){

    const url = 'eleccionesUSA.csv';


    fetch(url)
    .then(response=>response.text())
    .then(data=>mostrar(data))
    .catch(error=>alert(error))
    .finally(alert('fin'))

    //tabla
    const tabla = document.querySelector('thead tr');
    const body = document.querySelector('tbody');
    
    

    let arrayFilas=[];
    let votos=[];

    function mostrar(data){

       arrayFilas=data.split('\n');

    

       for(let i=0;i<arrayFilas.length;i++){

        votos=arrayFilas[i].split(';');

        if(i==0){
            votos.forEach(ini => {
                
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
        
            for(let i=0;i<votos.length;i++){

                const td = document.createElement('td');
                tr.appendChild(td);
                td.textContent=votos[i];

                if(i==2 || i==3){

                    if(votos[2]>votos[3]){

                        if(i==2){
                            td.style.backgroundColor="blue";
                        }

                    }else if(votos[2]<votos[3]){

                        if(i==3){
                            td.style.backgroundColor="red";
                        }
                    }
                }
            }

            
            if(votos[2]>votos[3]){
                let resultado = document.createElement('td');
                resultado.textContent='Biden';
                let representantes = document.createElement('td');
                representantes.textContent=votos[1];
                tr.append(resultado,representantes);
            }else if(votos[2]<votos[3]){
                let resultado = document.createElement('td');
                resultado.textContent='Trump';
                let representantes = document.createElement('td');
                representantes.textContent=votos[1];
                tr.append(resultado,representantes);
            }
            

        }
        
        
       }




    }


}
