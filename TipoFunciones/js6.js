window.addEventListener('load',inicio);

function inicio(){

let url = 'texto.txt';

fetch(url)
.then(response=>response.text())
.then(data=>mostrar(data))
.catch(error=>alert(error))
.finally(alert('fin'));


function mostrar(data){

    let texto = 'Valores: ';

    texto+=data.split('\n');
    let texto2=texto.replaceAll(',',' ');
    
    

    alert(texto2);


}



}