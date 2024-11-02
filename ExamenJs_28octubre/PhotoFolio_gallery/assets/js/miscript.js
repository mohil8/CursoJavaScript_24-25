// Espera a que la página cargue completamente antes de ejecutar el código
window.addEventListener("load", () => {

    // Define la URL del archivo JSON que contiene los datos de la galería
    let url = "datos.json";

    // Selecciona todos los elementos con la clase 'active' para gestionar el estado activo de los botones de la galería
    const gallery = document.querySelectorAll('.active');

    // Selecciona todas las imágenes dentro de los elementos con clase 'gallery-item' para modificar sus fuentes
    const contenedorImg = document.querySelectorAll('.gallery-item img');

    // Selecciona el elemento con clase 'current' para mostrar el nombre de la categoría seleccionada
    const listaHormiga = document.querySelector('.current');

    // Inicializa arrays para cada categoría que almacenarán los datos cargados desde el JSON
    let arrayNaturaleza = [];
    let arrayArquitectura = [];
    let arrayDeportes = [];
    let arrayAnimales = [];
    let arrayGente = [];

    // Hace una petición fetch para cargar los datos desde el archivo JSON
    fetch(url)
        .then(response => response.json()) // Convierte la respuesta a JSON
        .then(datos => mostrarDatos(datos)); // Llama a la función mostrarDatos para procesar los datos

    // Función que procesa los datos y los clasifica en arrays según su tipo
    function mostrarDatos(datos) {
        datos.forEach((element, indice) => {
            // Clasifica cada elemento en el array correspondiente según su tipo
            if (element.tipo == "naturaleza") {
                arrayNaturaleza.push(element);
            } else if (element.tipo == "gente") {
                arrayGente.push(element);
            } else if (element.tipo == "arquitectura") {
                arrayArquitectura.push(element);
            } else if (element.tipo == "animales") {
                arrayAnimales.push(element);
            } else if (element.tipo == "deportes") {
                arrayDeportes.push(element);
            }
        });
    }

    // Itera sobre cada elemento de la galería para configurar el comportamiento al hacer clic
    gallery.forEach(element => {
        element.onclick = () => {
            // Borra todos los textos (elementos <span>) que están dentro de 'gallery-item'
            const listaRotulo = document.querySelectorAll('.gallery-item span');
            listaRotulo.forEach(element => {
                element.remove();
            });

            // Muestra la categoría seleccionada en el elemento 'current'
            listaHormiga.textContent = "Gallery/" + element.textContent;

            // Verifica la categoría seleccionada y actualiza las imágenes y etiquetas de texto en consecuencia
            if (element.textContent == "Nature") {
                let i = 0;
                contenedorImg.forEach((item, indice) => {
                    // Cambia la fuente de la imagen a la imagen de la categoría 'Naturaleza'
                    item.setAttribute('src', arrayNaturaleza[i].imagen);
                    // Crea un elemento <span> y añade el texto descriptivo de la imagen
                    const texto = document.createElement('span');
                    texto.textContent = arrayNaturaleza[i].texto;
                    item.parentNode.appendChild(texto); // Añade el texto como un nuevo hijo
                    i++;
                    // Reinicia el índice si alcanza el final del array
                    if (i == arrayNaturaleza.length) {
                        i = 0;
                    }
                });
            }
            // Similar al bloque anterior, actualiza para la categoría 'People'
            if (element.textContent == "People") {
                let i = 0;
                contenedorImg.forEach((item, indice) => {
                    item.setAttribute('src', arrayGente[i].imagen);
                    const texto = document.createElement('span');
                    texto.textContent = arrayGente[i].texto;
                    item.parentNode.appendChild(texto);
                    i++;
                    if (i == arrayGente.length) {
                        i = 0;
                    }
                });
            }
            // Actualiza para la categoría 'Architecture'
            if (element.textContent == "Architecture") {
                let i = 0;
                contenedorImg.forEach((item, indice) => {
                    item.setAttribute('src', arrayArquitectura[i].imagen);
                    i++;
                    if (i == arrayArquitectura.length) {
                        i = 0;
                    }
                });
            }
            // Actualiza para la categoría 'Sports'
            if (element.textContent == "Sports") {
                let i = 0;
                contenedorImg.forEach((item, indice) => {
                    item.setAttribute('src', arrayDeportes[i].imagen);
                    i++;
                    if (i == arrayDeportes.length) {
                        i = 0;
                    }
                });
            }
            // Actualiza para la categoría 'Travel'
            if (element.textContent == "Travel") {
                let i = 0;
                contenedorImg.forEach((item, indice) => {
                    item.setAttribute('src', arrayAnimales[i].imagen);
                    i++;
                    if (i == arrayAnimales.length) {
                        i = 0;
                    }
                });
            }
        }
    });

});
