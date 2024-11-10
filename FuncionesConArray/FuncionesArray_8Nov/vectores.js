window.addEventListener("DOMContentLoaded",inicio);

function inicio(){
    const vector1=[2,5,2,4,6,8,9,6];
    const vector2=["paco","lola","pedro"];
    const vector3=[
        {
            titulo: 'Los lunes al sol',
            minutos: 120
          },
          {
            titulo: 'La delgada línea roja',
            minutos: 120
          },
          {
            titulo:"Bienvenido MrMarsall",
            minutos:93
          }
    ]

  
  //Push
  const btnPush = document.querySelector('#btnaniadirN');
  btnPush.onclick=function(){
    let num = prompt('Introduce el número que quieres añadir al array '+vector1.join('-'));
    vector1.push(Number(num));
    alert('Ahora el array es '+vector1.join('-'));
  }

  const btnPush2 = document.querySelector('#btnaniadirB');
  btnPush2.onclick=function(){
    let nombre = prompt('Introduce un nombre a los siguietes '+vector2.join('-'));
    vector2.push(nombre);
    alert('Nombre: '+nombre+' añadido --> '+vector2.join('-'))
  }

  const btnPush3 = document.querySelector('#btnaniadirP');
  btnPush3.onclick=function(){
    let tit = prompt('Elige el titulo de la película: ');
    let min = prompt('Cuantos minutos tendrá la película ')
    vector3.push({ titulo:tit, minutos:min});

    let peliculas = '';

    vector3.forEach(element => {
        peliculas+='Título: '+element.titulo+'- Minutos: '+element.minutos+'.\n';
    });

    alert(peliculas)
  }

  //Pop
  const btnPop = document.querySelector('#btnEliminarN');
  btnPop.onclick=function(){
    alert('Al vector '+vector2.join('-')+' le eliminamos '+vector2.pop()+': '+vector2.join('-'));
  }

  //Unshift
  const btnUnshift = document.querySelector('#btnAniadirU');
  btnUnshift.onclick=function(){
    
    let nombre = prompt('Que nombre le quieres añadir a: '+vector2.join('-'));
    vector2.unshift(nombre);
    alert('Ahora el vector es: '+vector2.join('-'));
  }

  //shift
  const btnShift = document.querySelector('#btnEliminarS');
  btnShift.onclick=function(){
    alert('Al vector '+vector1.join('-')+' le eliminamos el primer número '+vector1.shift()+': '+vector1.join('-'));
  }

  //slice
  const btnSlice = document.querySelector('#btnSlice');
  btnSlice.onclick=function(){

    alert('El vector normal es : '+vector1+' y la copia con el slice: '+vector1.slice(1,5))
  }

  //join
  const btnJoin = document.querySelector('#btnJoin');
  btnJoin.onclick=function(){
    let separador = prompt('Elige el separador para separar el vector '+vector2);
    alert(vector2.join(separador));
  }

  //Includes

  const btnInclude = document.querySelector('#btnIncludes');
  btnInclude.onclick=function(){
    
    let nombre = prompt('Escribe el nombre que buscas');

    if(vector2.includes(nombre)){
      alert('El vector '+vector2+' contiene el nombre: '+nombre);
    }else{
      alert('El vector '+vector2+' no contiene el nombre: '+nombre);
    }
  }

  //Sort
  const btnSort = document.querySelector('#btnSort');
  btnSort.onclick=function(){
    alert('El vector '+vector1+' ordenado es: '+vector1.sort());
  }

  //Reverse 
  const btnReverse = document.querySelector('#btnReverse');
  btnReverse.onclick=function(){
    alert('El vector : '+vector1.sort()+' en reverse es: '+vector1.sort().reverse());
  }

  //Map
  const btnMap=document.querySelector('#btnMap');
  btnMap.onclick=function(){

    let pelis = vector3.map(peli=>{
      
      if(peli.minutos==120){
        return peli.titulo;
      }
    })

    alert('Las peliculas con 120 minutos son: '+pelis);
  }

  //Reduce
  const btnReduce = document.querySelector('#btnReduce');
  btnReduce.onclick=function(){

    let total= vector1.reduce((suma,numero)=> suma+numero)

    alert('La suma de los números del vector '+vector1.join('-')+' es: '+total);
  }

  //Filter
  const btnFilter = document.querySelector('#btnFilter');
  btnFilter.onclick=function(){

    let array =vector3.filter(peli=>peli.minutos<120).map(nom=>nom.titulo).join('-');

    alert("La pelicula con menos de 120 minutos es : "+array);
  }

  //some
  const btnSome = document.querySelector('#btnSome');
  btnSome.onclick=function(){

    let numero = prompt('Adivina número:');

    if(vector1.some(num=>num==numero)){
      alert('El número si esta en el vector: '+vector1.join('-'));
    }else{
      alert('El número no se encuentra en le vector.');
    }
  }

  //every
  const btnEvery= document.querySelector('#btnEvery');
  btnEvery.onclick=function(){

    if(vector3.every(peli=>peli.minutos>60)){
      alert('Todas las peliculas duran más de 1h')
    }else{
      alert('Hay alguna pelicula que dura menos de una hora');
    }
  }

  //find
  const find= document.querySelector('#btnFind');
  find.onclick=function(){

    let array=vector3.find(peli=>peli.minutos==120);
    //NO se imprimir esto 
    console.log(array);
  }

  //keys
  const keys= document.querySelector('#btnKeys');
  keys.onclick=function(){

     const claves = Object.keys(vector3[0]);
     alert('Los atributos de las peliculas son: '+claves.join(' y '));
  }

  //values
  const btnValues=document.querySelector('#btnValues');
  btnValues.onclick=function(){
    let datos = ''
    vector3.forEach(peli => {
      datos+= 'Película: '+Object.values(peli).join('-')+'\n'
    });

    alert(datos);
    
  }

  //entries
  const btnEntries=document.querySelector('#btnEntry');
  btnEntries.onclick=function(){
    
    alert('El tamaño del tercer vector es '+Object.entries(vector3).length);
  }

}
