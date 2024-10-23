window.addEventListener('load',empezar);

function empezar(){

    const url = 'datos.json'


    fetch(url)
    .then(response=>response.json())
    .then(datos=>mostrar(datos))
    .catch(error=>alert(error))
    .finally();

    //Identifico enlaces

    const enlaces = document.querySelectorAll('.active');     
    alert(enlaces)

    //Identifico las imagenes

    let imagenes = document.querySelectorAll('.img-fluid');

    function mostrar(datos){

        enlaces.forEach(element => {

            if(element.textContent=='Nature'){

                element.onload=function(){

                    datos.forEach(dat => {
                        
                        imagenes.forEach(img => {
                            
                            img.src=dat.imagen;

                        });
                    });

                }

            }
        });
        

    }



}