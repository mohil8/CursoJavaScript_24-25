window.addEventListener('load',inicio);


function inicio(){

    const url = 'peliculas.csv';

    fetch(url)
    .then(response=>response.text())
    .then(data=>mostarPeliculas(data))
    .catch(error=>alert(error.message))
    .finally(alert('fin'));

    function mostarPeliculas(data){

    //tabla
    const tabla = document.querySelector('thead tr');
    const body = document.querySelector('tbody');

    let arrayFilas=[];
    let peliculas=[];

    
    arrayFilas=data.split('\n');

    for(let i=0;i<arrayFilas.length;i++){

        peliculas=arrayFilas[i].split(',');

        if(i==0){

            peliculas.forEach(titulo => {
                
                const th=document.createElement('th');
                const texto = document.createElement('p');
                texto.textContent=titulo;
                texto.style.color="red";
                th.appendChild(texto);
                tabla.appendChild(th);
                

            });

            i++
        }else{

            const tr = document.createElement('tr');
            body.appendChild(tr);

            for(let i=0;i<peliculas.length;i++){

                const td = document.createElement('td');
                tr.appendChild(td);
                td.textContent=peliculas[i];

            
                if(Number(peliculas[4])>1999){
                
                    td.style.backgroundColor="lightpink";
                }else{
                    td.style.backgroundColor="green";
                }

            }



        }   

    }


    }


}