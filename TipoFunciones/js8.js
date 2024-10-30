window.addEventListener('load',inicio);

function inicio(){

    const contenedor = document.querySelector('.col-lg-12');

    
    while(num1 != num2){

        //1 Num aleatorio
        let num1 = Math.floor(Math.random()*20);
        let num2 = Math.floor(Math.random()*20);
        const cadena = `la suma de ...${num1} y ${num2}, es: `+$(num1+num2);
        let p = document.createElement('p');
        p.textContent=cadena;
        contenedor.appendChild(p);
        if(num1 == num2){
            break;
        }

    }




}