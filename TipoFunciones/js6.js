window.addEventListener('load',inicio);

function inicio(){

let url = 'texto.txt';

fetch(url)
.then(response=>response.text())
.then(data=>mostrar(data))
.catch(error=>alert(error))
.finally(alert('fin'));


function mostrar(data){

    let texto = '';
    let lineas = data.split('\n');

    lineas.forEach(element => {
        
        texto+=element.trim();
    });
    

    alert(texto);


}



}