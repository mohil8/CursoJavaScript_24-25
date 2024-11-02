window.addEventListener('load',inicio);

function inicio(){

    //Identificamos botones
    const botones = document.querySelectorAll('button');
    //Identificamos cajas
    const cajas = document.querySelectorAll('td div');

    //Arrays
    const numeros=[10,100,500];

    //Ejercicio
    botones.forEach((bt,indice) => {
        
        bt.addEventListener('click',function(){

            cajas[indice].replaceChildren();            
            let validar = false;
            let random = randomNum(numeros[indice]);
               
        do{
        
            let adivina = prompt('Introduce valor:');

            if(adivina>random){
                alert('El número es menor');
            }else if(adivina<random){
                alert('El número es mayor');
            }else{

                let resultado = document.createElement('p');
                cajas[indice].appendChild(resultado);
                resultado.textContent=random;
                validar=true;
            }

        }while(validar==false);

        })

    });

    function randomNum(num){

        return Math.floor(Math.random()*num)+1;

    }

}