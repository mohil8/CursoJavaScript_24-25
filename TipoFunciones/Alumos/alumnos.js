window.addEventListener('load',inicio);

function inicio(){

    const url = 'alumnos.csv';

    fetch(url)
    .then(response=>response.text())
    .then(alumno=>mostrar(alumno))
    .catch(error=>alert(error.message))
    .finally();

    //Selecciono la cabecera y el body
    const head = document.querySelector('thead tr');
    const body = document.querySelector('tbody');

    //Aqui almacenamos las lineas y los elementos de las lineas
    let conjunto=[];
    let linea =[]

    function mostrar(alumno){

        conjunto = alumno.split('\n');

        for(let i=0;i<conjunto.length;i++){

            linea=conjunto[i].split(',');

            if(i==0){

                linea.forEach(lin => {
                const titulo = document.createElement('th');
                titulo.textContent=lin;
                head.appendChild(titulo);

                });

                    i++;
                }else{
                    const tr= document.createElement('tr');
                    body.appendChild(tr);
                for(let i=0;i<linea.length;i++){

                    const datos = document.createElement('td');
                    datos.textContent=linea[i];
                    tr.appendChild(datos);
                    console.log(nota(linea));
                    if(nota(linea)==0){
                        datos.style.backgroundColor='red';
                    }else if(nota(linea)==1){
                        datos.style.backgroundColor='orange';
                    }else if(nota(linea)==2){
                        datos.style.backgroundColor='pink';
                    }else if(nota(linea)==3){
                        datos.style.backgroundColor='yellow';
                    }else if(nota(linea)==4){
                        datos.style.backgroundColor='lightblue';
                    }else if(nota(linea)==5){
                        datos.style.backgroundColor='green';
                    }

                }
                   
            }

        }
    }

    //Nos data cuantos modulos aprobados tiene el alumno
    function nota(linea){

        let aprobado = 0;

        for(let i=2;i<linea.length;i++){

            if(linea[i]>=5){
                aprobado++;
            }
        }
        return aprobado;
    }
}