window.addEventListener("load", empezar);

        function empezar() {
            var errores = 0;
            var contador = 0;
            const puntos = document.querySelector("#p1");
            const error = document.querySelector("#p2");
            const boton = document.getElementById('1');
            const boton2 = document.getElementById('2');
            const boton3 = document.getElementById('3');
            const boton4 = document.getElementById('4');
            const boton5 = document.getElementById('5');
            const boton6 = document.getElementById('6');
            const boton7 = document.getElementById('7');

            const colores = ["pink", "yellow", "green", "blue", "purple", "orange", "red"];
            const botones = document.getElementsByClassName('m1');
            var segundos=30;

            // Cambiar colores de los botones cada 1000 ms
            setInterval(() => {

                
                for (let i = 0; i < botones.length; i++) {
                    let random = Math.floor(Math.random() * colores.length);
                    botones[i].style.backgroundColor = colores[random];
                }
                segundos--
                

            }, 1000);

            

            boton.addEventListener("click", boton1);
            boton2.addEventListener("click", boton22);
            boton3.addEventListener("click", boton33);
            boton4.addEventListener("click", boton44);
            boton5.addEventListener("click", boton55);
            boton6.addEventListener("click", boton66);
            boton7.addEventListener("click", boton77);

            function boton1() {
                // Verifica si el color del botón 1 es 'pink'
                if (botones[0].style.backgroundColor === 'pink') {
                    contador++;
                    puntos.textContent = "Puntos: " + contador;
                } else {
                    errores++;
                    error.textContent = "Errores: " + errores;
                }
            }
            function boton22() {
                // Verifica si el color del botón 1 es 'pink'
                if (botones[1].style.backgroundColor === 'green') {
                    contador++;
                    puntos.textContent = "Puntos: " + contador;
                } else {
                    errores++;
                    error.textContent = "Errores: " + errores;
                }
            }
            function boton33() {
                // Verifica si el color del botón 1 es 'pink'
                if (botones[2].style.backgroundColor === 'yellow') {
                    contador++;
                    puntos.textContent = "Puntos: " + contador;
                } else {
                    errores++;
                    error.textContent = "Errores: " + errores;
                }
            }
            function boton44() {
                // Verifica si el color del botón 1 es 'pink'
                if (botones[3].style.backgroundColor === 'blue') {
                    contador++;
                    puntos.textContent = "Puntos: " + contador;
                } else {
                    errores++;
                    error.textContent = "Errores: " + errores;
                }
            }
            function boton55() {
                // Verifica si el color del botón 1 es 'pink'
                if (botones[4].style.backgroundColor === 'violet') {
                    contador++;
                    puntos.textContent = "Puntos: " + contador;
                } else {
                    errores++;
                    error.textContent = "Errores: " + errores;
                }
            }
            function boton66() {
                // Verifica si el color del botón 1 es 'pink'
                if (botones[5].style.backgroundColor === 'orange') {
                    contador++;
                    puntos.textContent = "Puntos: " + contador;
                } else {
                    errores++;
                    error.textContent = "Errores: " + errores;
                }
            }
            function boton77() {
                // Verifica si el color del botón 1 es 'pink'
                if (botones[6].style.backgroundColor === 'red') {
                    contador++;
                    puntos.textContent = "Puntos: " + contador;
                } else {
                    errores++;
                    error.textContent = "Errores: " + errores;
                }
            }
        }