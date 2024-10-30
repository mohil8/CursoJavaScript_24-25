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

        tabla.textContent=arrayFilas[0];

       for(let i=1;i<arrayFilas.length;i++){

        votos=arrayFilas[i].split(';');

        const tr = document.createElement('tr');
        body.appendChild(tr);
        
        votos.forEach(el => {
            
            const td = document.createElement('td');
            tr.appendChild(td);
            td.textContent=el;
            
        });

       }




    }


}
