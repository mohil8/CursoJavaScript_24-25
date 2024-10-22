window.addEventListener('load',empezar);


function empezar(){

    //identificamos los dos json
    const url1 = 'getPlatos.php.json';
    const url2 = 'getCocinero.php.json';

    //Identificamos contador
    const contador = document.querySelectorAll('.purecounter');
    //Array maximos contador
    const maximos = [20,200,2000,2000];
    contador.forEach((cont,indice) => {
        
        cont.setAttribute('data-purecounter-end',random(maximos[indice]));


    });

    //Leemos primer JSON
    fetch(url1)
    .then(response=>response.json())
    .then(data1=>mostrarPlatos(data1))
    .catch(error=>(error.message))
    .finally();

    //Segundo JSON
    fetch(url2)
    .then(response=>response.json())
    .then(data2=>mostrarCocineros(data2))
    .catch(error=>alert(error.message))
    .finally();

    //Identicamso la sección de los platos
    const platos = document.querySelectorAll('.menu-item');
    //Limpiamos los datos que hay para introducir los del json
    platos.forEach(element => {
        element.replaceChildren();
    }); 

    //Mostramos los platos 
    function mostrarPlatos(data1){

        data1.forEach((element,indice) => {
            
            //Creamos imagenes
            const imagen = document.createElement('img');
            imagen.className="glightbox menu-img img-fluid"
            imagen.src = element.imagen;

            //Creamos nombre
            const nombre = document.createElement('h4');
            nombre.textContent = element.nombre;

            //Cramos precio
            const precio = document.createElement('p');
            precio.textContent = element.precio+"€";

            platos[indice].append(imagen,nombre,precio);

        });
    }

    //Identificamos caja de los concineros
    const cocineros = document.querySelector('#chefs .row.gy-4');
    //Limpiamos los datos 
    cocineros.replaceChildren();

    function mostrarCocineros(data2){
        
        data2.forEach(element => {

            //Primer div
            const caja1 = document.createElement('div');
            caja1.className = "col-lg-4 col-md-6 d-flex align-items-stretch";
            caja1.setAttribute('data-aos','fade-up');
            caja1.setAttribute('data-aos-delay','100');
            cocineros.appendChild(caja1);

            //Segundo div
            const caja2 = document.createElement('div');
            caja2.className = "chef-member";
            caja1.appendChild(caja2);

            //Div Foto
            
            const divFoto = document.createElement('div');
            divFoto.className = "member-img";
            //Imagen
            const imagen = document.createElement('img');
            imagen.src = element.imagen;
            imagen.className="img-fluid";
            divFoto.appendChild(imagen);

            //Div datos foto

            const divDatos = document.createElement('div');
            divDatos.className = "member-info";
            //Textos
            const nombre = document.createElement('h4');
            nombre.textContent = element.nombre;
            const funcion = document.createElement('h5');
            funcion.textContent = element.funcion;

            divDatos.append(nombre,funcion);

            caja2.append(divFoto,divDatos);

            
        //     <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
        //     <div class="chef-member">
        //       <div class="member-img">
        //         <img src="assets/img/chefs/chefs-1.jpg" class="img-fluid" alt="">
        //         <div class="social">
        //           <a href=""><i class="bi bi-twitter"></i></a>
        //           <a href=""><i class="bi bi-facebook"></i></a>
        //           <a href=""><i class="bi bi-instagram"></i></a>
        //           <a href=""><i class="bi bi-linkedin"></i></a>
        //         </div>
        //       </div>
        //       <div class="member-info">
        //         <h4>Walter White</h4>
        //         <span>Master Chef</span>
        //         <p>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
        //       </div>
        //     </div>
        //   </div>
            

        });
    }

    function random(num){
        return Math.floor(Math.random()*num)
    }

    

    


}