// URL del fichero JSON
const url = "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php";
// Contenedor donde se muestran los datos
const filas = document.querySelector("tbody");

// Realiza la solicitud
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta de la red');
    }
    return response.json(); // Cambiar a json ya que se espera un objeto JSON
  })
  .then(datos => mostrar(datos))
  .catch(error => alert(error.message)) // Manejo de errores simplificado
  .finally(() => alert('Fin de la solicitud'));

  function mostrar(datos){

    datos.forEach(ciudad => {

        let cajatbody = document.createElement('tr');
        filas.appendChild(cajatbody);

        let nombreCiudad = document.createElement('td');
        nombreCiudad.textContent=ciudad.ciudad_nombre;

        let poblacion = document.createElement('td');
        poblacion.textContent = ciudad.ciudad_poblacion;

        let video = document.createElement('td');
        video.innerHTML=ciudad.video;

        let imagentd=document.createElement('td');
        let imagen = document.createElement('img');
        imagen.setAttribute('src',ciudad.imagen);
        imagen.setAttribute('width','200');
        imagentd.appendChild(imagen);

        let tdMapa = document.createElement('td');
        tdMapa.innerHTML=ciudad.mapa;

        let idCiudad = document.createElement('td');
        idCiudad.textContent=ciudad.ciudad_ID;


        cajatbody.append(nombreCiudad,poblacion,
        video,imagentd,tdMapa,idCiudad);
        
    });

  }