window.addEventListener("load",empezar);

function empezar(){

    const boton1 = document.getElementById("btn1");
    boton1.addEventListener("click",pulsar1);
    const boton2 = document.getElementById("btn2");
    boton2.addEventListener("click",pulsar2);
    const boton3 = document.getElementById("btn3");
    boton3.addEventListener("click",pulsar3);
    const boton4 = document.getElementById("btn4");
    boton4.addEventListener("click",pulsar4);


    function pulsar1(){

        const c1 = document.getElementById("c1");
        c1.style.background="green";
    }

    function pulsar2(){
        const c2 = document.getElementById("c2");
        c2.textContent=Math.round(Math.random()*100);
    }

    function pulsar3(){

        let uno = prompt("Primer valor:");
        let dos = prompt("Segundo valor: ")
        uno =parseInt(uno);
        dos =parseInt(dos);

        c3 = document.getElementById("c3");
        c3.textContent = uno + dos;

    }

    function pulsar4(){

        const adivina = Math.round(Math.random()*100);
        let valor;

        do{

            valor= prompt("Adivina el número:")
            if(valor>adivina){
                
                alert("es mas pequeño");
            }else if(valor<adivina){

                alert("es mas grande")
            }else{

                const c4 = document.getElementById("c4");
                c4.textContent= adivina;
                alert("Enhorabuena")
            }


        }while(valor!=adivina);
 
        
        

    }

}




