window.addEventListener("load", empezar);

        function empezar() {
            var errores = 0;
            var contador = 0;
            const puntos = document.querySelector("#p1");
            const error = document.querySelector("#p2");
            const boton = document.querySelectorAll('button');
            const colores = ["pink", "green", "yellow", "blue", "violet", "orange", "red"];
        
            // Cambiar colores de los botones cada 1000 ms
            setInterval(() => {
    
                for (let i = 0; i < boton.length; i++) {
                    let random = Math.floor(Math.random() * colores.length);
                    boton[i].style.backgroundColor = colores[random];
                }
                     
            }, 1000);


            boton.forEach((bt,indice) => {
                  
                bt.addEventListener('click',function(){

                    if(bt.style.backgroundColor==colores[indice]){
                        contador++;
                        puntos.textContent='Puntos: '+contador;
                    }else{
                        errores++
                        error.textContent='Errores: '+errores
                    }

                })
            });
            
        }