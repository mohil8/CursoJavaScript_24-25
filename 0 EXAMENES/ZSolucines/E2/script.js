window.addEventListener("load", inicio);

function inicio(){

    const nombres = [ "chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
    "melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña", 
    "platanos", "pomelos", "prunus", "sandias" ];
        
    const precios = [3, 4, 2, 3, 5, 6, 2, 3, 1, 1, 3, 5, 6, 1, 3, 6 ];
        
    const imagenes=["imagenes/chirimoya.PNG","imagenes/ciruela.PNG", "imagenes/fresa.PNG", "imagenes/kiwi.PNG",
    "imagenes/mandarina.PNG", "imagenes/melocoton.PNG", "imagenes/melon.PNG", "imagenes/naranja.PNG",
    "imagenes/nectarina.PNG", "imagenes/papaya.PNG", "imagenes/peras.PNG", "imagenes/piña.PNG", 
    "imagenes/platanos.PNG", "imagenes/pomelos.PNG", "imagenes/prunus.PNG", "imagenes/sandias.PNG"];

    //Identificamos los elementos del html

    const galeria = document.getElementById('galeria');
    const total = document.getElementById('total');
    const cesta = document.getElementById('cesta');
    let precioTotal = 0;
    total.textContent="Total = "+precioTotal;
    //Introducimos las frutas en la galeria junto a su nombre y precio

    for(let i=0;i<imagenes.length;i++){
        //Creamos un div para almacenar foto y texto
        const cajaFruta = document.createElement('div');
        galeria.appendChild(cajaFruta);
        cajaFruta.style.backgroundColor="grey";
        //Creamos imagagenes de frutas
        const imgFruta= document.createElement('img');
        imgFruta.setAttribute('src',imagenes[i])
        cajaFruta.appendChild(imgFruta);
        //Creamos parrafos para el nombre y precio
        //Precio
        const precioFruta = document.createElement('p');
        precioFruta.textContent = precios[i]+' €';
        cajaFruta.appendChild(precioFruta);
        //Nombre
        const nombreFruta = document.createElement('p');
        nombreFruta.textContent = nombres[i];
        cajaFruta.appendChild(nombreFruta);

        //Añadimos funcion a la foto para comprar
        imgFruta.addEventListener('click', () => compra(precios[i], nombres[i]));

        
    }

    function compra(precio,nombre){

        
        
        const kg = prompt('Introduce kg que quieres:');
        const kgNumero = parseFloat(kg);

        const precioFinal = precio*kgNumero;
        precioTotal+=precioFinal;
        total.textContent = "Total = " + precioTotal.toFixed(2) + " €";

        const array = [nombre,kgNumero,precioFinal.toFixed(2)+ ' €'];

        //Creamos un tr
        const tr = document.createElement('tr');
        cesta.appendChild(tr);
        for(let i=0;i<3;i++){
            const td = document.createElement('td');
            td.textContent = array[i];
            tr.appendChild(td);
        }

        const tdBoton = document.createElement('td');
        tr.appendChild(tdBoton);
        const elimiarCompra = document.createElement('button');
        elimiarCompra.textContent= "Eliminar "+nombre;
        tdBoton.appendChild(elimiarCompra);
        elimiarCompra.addEventListener('click',function(){
            tr.remove();
            precioTotal -= precioFinal; // Restamos el precio de la compra eliminada
            total.textContent = "Total = " + precioTotal.toFixed(2) + " €";
        });
    }

    
}

