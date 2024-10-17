const url = "jugadores.json";

const contenedor = document.querySelector('.row.gx-4.gx-lg-5');



fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta de la red');
    }
    return response.json();
  })
  .then(datos => {
    mostrar(datos);
  })
  .catch(error => error.message)
  .finally();

  function mostrar(datos){

    contenedor.replaceChildren();
    
    datos.forEach(empleados=>{



        let caja1 = document.createElement('div');
        caja1.className="col-md-4 mb-5";
        contenedor.appendChild(caja1);

        let caja2 = document.createElement('div');
        caja2.className="card h-100";
        caja1.appendChild(caja2);

        let caja3 = document.createElement('div');
        caja3.className = "card-body";
        caja2.appendChild(caja3);

        //Nombres 
        let nombre = document.createElement('h3');
        nombre.textContent = empleados.nombre;

        //Cargo
        let cargo = document.createElement('p');
        cargo.textContent = 'Cargo:'+empleados.cargo;

        //Direccion
        let direccion = document.createElement('p');
        direccion.textContent = "Dirección: "+empleados.direccion;

        //edad
        let edad = document.createElement('p');
        edad.textContent = 'Edad:'+empleados.edad;

        //imagen
        let imagen = document.createElement('img');
        imagen.setAttribute("src",empleados.imagen);

        //Añadimos datos a la caja
        caja3.append(imagen,nombre,cargo,direccion,edad);

    });


  }