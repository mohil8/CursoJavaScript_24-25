window.addEventListener('load',empezar);

function empezar(){

    //Identificamos el json para obtener la información
    const url = 'getPanaderos.json';

    //Identificamos el la caja de los enlaces para eliminar uno de ellos
    const cajaMenu = document.querySelector('.navbar-nav')
    let eliminaDiv = document.querySelector('.nav-item.dropdown');
    cajaMenu.removeChild(eliminaDiv);
    //Identificamos elementos del menu
    const menu = document.querySelectorAll('.nav-link');

    cambioMenu(menu);

    //Ahora seleccionamos todos los h1 para añadirles un número random
    const contador = document.querySelectorAll('.display-5.mb-0');
   
    cambioContador(contador);

    //Identificamos la caja de datos de panaderos
    const panaderos = document.querySelectorAll('.team-item');
    //Limpiamos el contenedor
   for(let i =0;i<panaderos.length;i++){
    panaderos[i].replaceChildren();
   }
    //Recorremso el json para cambiar las fotos, nombre, ...
    fetch(url)
  .then(response => response.json())
  .then(datos =>mostrar(datos))
  .catch(error => alert(error.message))
  .finally(alert('Fin de solicitud'));

        function mostrar(datos){

            datos.forEach((dat,indice) => {
                
                //Creamos las imagenes y añadimos las img del json
                const imagen = document.createElement('img');
                imagen.src = dat.imagen;

                //Nombre
                const nombre = document.createElement('h1');
                nombre.textContent = dat.nombre;

                //origen
                const origen = document.createElement('p');
                origen.textContent = dat.funcion;

                panaderos[indice].append(imagen,nombre,origen);

            });
        }


    function cambioContador(contador){
         //Array de las cantidades estableciadas
        const cantidades = [20,200,2000,2000];
        contador.forEach((h1,indice) => {
        
        h1.textContent = numRandom(cantidades[indice]);

    });  
        
    }

    function cambioMenu(menu){

        //Datos para sustituir el menu
        const listaPanaderias=["Jesus","Almagro","Julia","Andalusi","JoseAntonio","el trigal"];
        const listaEnlaces=["panaderiajesus.com","panalmagro.es","panaderiasjulia.es","panaderialaandalusi.com","panaderiajoseantonio.com","eltrigal.com"];

        menu.forEach((element,indice) => {
            
            element.textContent=listaPanaderias[indice];
            element.href='https://www.'+listaEnlaces[indice];

        });

    }

    function numRandom(num){
        return Math.floor(Math.random()*num);
    }

}
