window.addEventListener("load",empezar);

function empezar(){

    //crear botones y asignarles una función
    const boton1 = document.getElementById("btn1");
    boton1.addEventListener("click",pulsar1);
    const boton2 = document.getElementById("btn2");
    boton2.addEventListener("click",pulsar2);
    const boton3 = document.getElementById("btn3");
    boton3.addEventListener("click",pulsar3);

    function pulsar1(){

        //creamos variable random
        const valor=Math.round(Math.random()*10);
        let adivina;

        /*bucle hasta que el valor pedido no sea igual al valor random no para de pedir valor*/
        do{
            
            //creamos variable para pedir un valor 
            adivina = prompt("Introduce valor")

            if(adivina<valor){
                alert("El número es mayor")
            }else if(adivina>valor){
                alert("El número es menor")
            }          

        }while(adivina!=valor);
        alert("Enhorabuena, el número era "+valor);
        /*Cambiamos el contenido del nodo cuadro_uno al valor random que había que adivinar*/
        const cuadro_Uno=document.getElementById("c1");
        cuadro_Uno.textContent=adivina;
    }

    /*Lo mismo que la función pulsar1, pero 100 números a adivinar*/
    function pulsar2(){

        const valor=Math.round(Math.random()*100);
        let adivina;

        do{

            adivina = prompt("Introduce valor")

            if(adivina<valor){
                alert("El número es mayor")
            }else if(adivina>valor){
                alert("El número es menor")
            }          

        }while(adivina!=valor);
        alert("Enhorabuena, el número era "+valor);
        const cuadro_dos=document.getElementById("c2");
        cuadro_dos.textContent=adivina;
    }

    function pulsar3(){

        let cuadro_tres=document.getElementById("c3");
        const valor=Math.round(Math.random()*500);
        let adivina;

        do{

            adivina = prompt("Introduce valor")

            if(adivina<valor){
                alert('El número es mayor')
                
            }else if(adivina>valor){
                alert('El número es menor')
                
            }          

        }while(adivina!=valor);
        alert("Enhorabuena, el número era "+valor);
        
        cuadro_tres.textContent=adivina;
    }

}