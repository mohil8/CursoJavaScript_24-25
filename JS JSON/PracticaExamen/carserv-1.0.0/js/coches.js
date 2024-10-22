window.addEventListener('load',empezar);

function empezar(){

    const url = 'trabajadores.json';

    fetch(url)
    .then(response=>response.json())
    .then(trabajador=>mostrar(trabajador))
    .catch(error=>alert(error))
    .finally()


    //Cambiar menu

    const cajaMenu = document.querySelector('.navbar-nav.ms-auto');
    const eliminoElemento= document.querySelector('.nav-item.dropdown')
    cajaMenu.removeChild(eliminoElemento); 
    const menu = document.querySelectorAll('.nav-item.nav-link');
    cambioMenu(menu);


    function mostrar(trabajador){

        //Seleccionamos el contador
        const contador = document.querySelectorAll('.text-white.mb-2');
        const rellenoCont=[20,200,2000,2000];

        //Accedemos a las imagenes
        const imagen = document.querySelectorAll('.team-item .img-fluid');
        const nombre = document.querySelectorAll('.team-item .fw-bold')
        const funcion = document.querySelectorAll('.team-item small');
        //Ahora accedemos a las imagenes del testimonial
        const imgTestimonial = document.querySelectorAll('.bg-light.rounded-circle')

        contador.forEach((element,indice) => {
            
            element.textContent = numrandom(rellenoCont[indice]);

        });

        trabajador.forEach((element,indice) => {
            
            imagen[indice].src = element.imagen;
            nombre[indice].textContent= element.nombre;
            funcion[indice].textContent=element.funcion;
            imgTestimonial[indice].src = element.imagen;
   
            });

      
        

    }

    function numrandom(num){

        return Math.floor(Math.random()*num);

    }

    function cambioMenu(menu){
        
        const links=["Jesus","Almagro","Julia","Andalusi"];
        menu.forEach((element,indice) => {
            
            element.textContent=links[indice];
        });
    }
}

