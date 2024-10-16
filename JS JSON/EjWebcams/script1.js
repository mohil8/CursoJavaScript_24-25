 // URL del fichero JSON
const url = 'getWebcam.php.json';
;
// Contenedor donde se muestran los datos
const ubicacion = document.querySelector("#fila");

// Realiza la solicitud
fetch(url)
  .then(response => {
    console.log('Estado de la respuesta:', response.status);
    if (!response.ok) {
      throw new Error('Error en la respuesta de la red');
    }
    return response.json();
  })
  .then(datos => {
    console.log('Datos recibidos:', datos);
    mostrar(datos);
  })
  .catch(error => console.error('Error:', error))
  .finally();


function mostrar(datos) {
  datos.forEach(webc => { // Cambiar foreach por forEach
    const columna = document.createElement('div');
    columna.className = 'col-lg-4';
    ubicacion.appendChild(columna);

    // Crear la tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.className = 'card';
    columna.appendChild(tarjeta);

    // Crear el video
    const videoW = document.createElement('video');
    videoW.src = webc.url; // Establecer directamente la propiedad src
    videoW.setAttribute("autoplay", "");
    videoW.setAttribute("loop", "");
    tarjeta.appendChild(videoW);

    // Crear el cuerpo de la tarjeta
    const CardBody = document.createElement('div');
    CardBody.className = "card-body";
    tarjeta.appendChild(CardBody);

    // Título
    const titulo = document.createElement('h4');
    titulo.className = 'card-title';
    titulo.textContent = webc.lugar;
    CardBody.appendChild(titulo);

    // Subtítulo
    const subtitulo = document.createElement("p");
    subtitulo.className = "card-text";
    subtitulo.textContent = webc.tiempo;
    CardBody.appendChild(subtitulo);
  });
}