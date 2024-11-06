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

  const textos= document.querySelectorAll('p');
  const btn1=document.querySelector('#btnaniadirN');
  btn1.onclick=function(){

    vector1.push(7,8,9);
    textos[0].textContent=vector1.join('-');

  }

  const btn2=document.querySelector('#btnaniadirB');
  btn2.onclick=function(){
    textos[1].textContent=vector2.join('/');
  }

  const btn3=document.querySelector('#btnaniadirP');
  btn3.onclick=function(){
    
    vector3.push({titulo:'Venom',minutos:110});

    let texto='';
    vector3.forEach(peli => {
      
      texto+='Titulo: '+peli.titulo+' Minutos: '+peli.minutos+' /';

    });

    textos[2].textContent=texto;

  }
  
  const btn4=document.querySelector('#btnEliminarN');
  btn4.onclick=function(){

    let elemento = vector1.pop();
    vector1.splice(vector1.length,1);
    textos[3].textContent=vector1.join('-')+' El ultimo elemento era: '+elemento;
  }

  



 
}
