//url del fichero json
const url = "http://camacho.atwebpages.com/webcam/getWebcam.php";
//contenedor donde se muestran los datos
const ubicacion = document.querySelector("#fila");

//realza solicitud
fetch(url)
.then(response=>response.text())
.then(datos=>mostrar(datos))
.finally(()=>alert('fin'))
.catch(error=>alert(error.data));

function mostrar (datos){
datos.foreach(webc=>{
  const columna = document.createElement('div');
  columna.className='col-lg-4';
  ubicacion.appendChild(columna);
  //<div class="card">
  const tarjeta=document.createElement('div');
  tarjeta.className='card';
  columna.appendChild(tarjeta);
  const videoW = document.createElement('video');
  videoW.setAttribute("src",webc.url,"autoplay loop");
  videoW.setAttribute("autoplay loop");
  tarjeta.appendChild(videoW);
  const CardBody=document.createElement('div');
  CardBody.className="card-body";
  tarjeta.appendChild(CardBody);
  const titulo = document.createElement('h4');
  titulo.className='card-title';
  titulo.textContent=webc.lugar;
  CardBody.appendChild(titulo); 
  const subtitulo = document.createElement("p");
  subtitulo.className="card-text";
  subtitulo.textContent=webc.tiempo;
  CardBody.appendChild(subtitulo); 
})
}