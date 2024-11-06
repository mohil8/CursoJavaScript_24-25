
//pop() devuelve el ultimo elemento del array en este caso el 7

const array=[1,2,3,4,5,6,7];
let numero = array.pop();

console.log(numero);//devuelve 7

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

//unshift añade un elemento al principio del array , el contrario del push;

array.unshift(4);
//Ahora el array es =[4,1,2,...]

console.log(array);
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
//shift elimina el primer elemento del array; con un array no hace falta convertir a nada

//El td es un elemeto Nodelist que es parecido a un array pero no, pasaremos a convertirlo en un array pa usarlo
const td = Array.from(document.querySelectorAll('td'));
td.shift();

console.log(td);

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
//concat(valor1,valor2,....)

const arr1=[1,2];
const arr2=[3,4];
const arr3=[5,6];

const arrayFinal=arr1.concat(arr2,arr3);
console.log(arrayFinal)

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
//slice(desde,hasta)

const num=[1,2,3,4,5,6];
const valor=num.slice(0,4);//el array valor estara compuesto por los números desde la posición 0 hasta la 4
console.log(valor);

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/
//splice(inicio, cantidadBorrar...): elimina y añade elementos a un vector.
const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
vector.splice(3, 4)

console.log(vector);

//Añadir sin borrar con el splice
const vector2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
vector2.splice(5, 0, 1, 1, 1);//desde la posicion 5 borra 0 elemento y luego añade si cambias el 0 te borra esa cantidad de elementos
console.log(vector2)

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

//fill(valor,comienzo,fin) El método fill rellena el array con el valor que se pasa como parámetro, 
//sustituyendo los valores actuales del vector.

const vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
vec.fill(10,0,4) //sustituye con el 10 desde la posición 0 hasta la 4 esta no incluida

console.log(vec);

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

//join (separador) método join retorna un string con todos 
//los elementos del vector separados por el separador que se pasa como parámetro.

let ar=['Fútbol','K-1','Natación'];
let cadena = ar.join('-');
console.log(cadena); //esta cadena contiene los elementos del array separados con el elemento elegido con el join

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

//Ordenación con el sort,el reverse,y localcompare

const fruta = 
[{ nombre: 'naranja', precio: 4 }, 
{ nombre: 'manzanas', precio: 2 },
{ nombre: 'kiwi', precio: 3 }] 

//Ordenamos por precio
let order = fruta.sort((a,b)=>a.precio-b.precio);
console.log(order);
//Ordenamos precio al reves
order=fruta.reverse();
console.log(order);

//el localcompare se usa para ordenar por orden alfabético pero solo a la hora de leer ficheros json,...


/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

//MANERA DE ELIMINAR UN ELEMENTO DE UN ARRAY POR NOMBRE DE VARIABLE
const frutas = [
    { nombre: 'naranja', precio: 4 }, 
    { nombre: 'manzanas', precio: 2 },
    { nombre: 'kiwi', precio: 3 }
];
  
let indexToRemove = -1;
 
// Usar forEach para encontrar el índice
frutas.forEach((item, index) => {
   if (item.nombre == 'manzanas' && item.precio == 2) {
     indexToRemove = index;
   }
});
 
// Si se encontró el índice, eliminar el elemento
if (indexToRemove !== -1) {
   frutas.splice(indexToRemove, 1);
}
 
console.log(frutas);
/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

//Incluede('dato') sirve para saber si un array contiene el dato que pasamos por valor, devuelve un bolean

const alumnos = ["paco", "lolo", "lola", "paca"] 
if(alumnos.includes('paco')){
   console.log('Si existe el alumno "paco" en el arreglo')
}

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

//Vector.indexof ( ) retorna un entero que representa el índice del elemento en el array. Si no se encuentra el elemento, retorna -1

//Cuando es un array simple
const alumnos1=['Javier','Sandra','Elbicho','David'];
console.log('El indice de Elbicho es: '+ alumnos1.indexOf('Elbicho'));
 
//Cuando no es un array simple seria de esta manera
const alumnos2 = [{ nombre: 'Paco', edad: 18 }, { nombre: 'Mou', edad: 20 }, { nombre: 'Andrés', edad: 19 }] 
let indice = alumnos2.findIndex(alumno=>alumno.nombre=='Mou');
console.log('La posición de Mou es: '+indice);

//vector.map(funcion) : retorna un nuevo array con los resultados de aplicar la función que se pasa como parámetro a cada elemento del array. 
//El vector original no se modifica. Se consigue un nuevo vector con las modificaciones

const bicicletas =
   [{ marca: 'canyon', precio: 7000 },
   { marca: 'specializad', precio: 6200 }, 
   { marca: 'pinarello', precio: 5000 },
   { marca: 'orbea', precio:5600},
   {marca: 'bh' , precio:4500}
];

// crear un nuevo vector aumentando con las bicis que cuesten más de 5000 euros y tambien solo la variable que quieres en este caso el precio

const bicisKaras = bicicletas.map(bike => {
       if (bike.precio > 5000) 
       { return bike.precio; }
})
console.log(bicisKaras)

//SI no conocieramos el map lo hariamos de la siguiente forma

let bicisCaras=[];
bicicletas.forEach(bici => {
       
    if(bici.precio>5000){

        bicisCaras.push(bici);
    }
});
console.log(bicisCaras)

/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

//vector.filter(funcion) devuelve un nuevo array con los elementos que cumplen con la condición de la función que se pasa como parámetro.
const frutas2 = [
    { nombre: 'Manzana', procedencia: 'Badajoz', },
    { nombre: 'Pera', procedencia: 'Badajoz' },
    { nombre: 'Sandía', procedencia: 'Cáceres' }, 
    { nombre: 'Melón', procedencia: 'Cáceres' },
    { nombre: 'Melocotón', procedencia: 'Cáceres' }, 
    { nombre: 'Naranja', procedencia: 'Badajoz' }
]

//Con este obtengo un array con todos los elemetos procedentes de badajoz
const badajoz=frutas2.filter(fruta=>fruta.procedencia=='Badajoz');
console.log(badajoz);

//Y con esto todos los de cacers ordenados por numero de caracteres  y que muestre solo el nombre
const caceres = frutas2.filter(fruta=>fruta.procedencia=='Cáceres').map(fruta=>fruta.nombre).sort((a,b)=>a.length-b.length);
console.log(caceres);


/*-------------------------------------------------------------------------------------------------------------------------------------------------*/

//vector.reduce() reduce el array a un único valor aplicando la función que se pasa como parámetro (el método reduce no modifica el contenido del vector)

const vector3 = [1, 2, 3, 4, 5];
suma=0;
const sumaTotal = vector3.reduce((suma, item) => suma + item);

console.log('La suma de todo el array es: '+sumaTotal);


    



    

  