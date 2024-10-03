window.addEventListener('load',empezar);

function empezar(){

    let validacion = document.querySelector('#validar');

    validacion.onsubmit = inicio;

    function inicio(){

        //Cramos el boleano para avanzar
        let avanza = true;

        //Identificamos valores;

        let ciclo = document.querySelector('input[name="ciclo"]:checked');
        let modulos = document.querySelectorAll('input[name="modulo"]:checked');
        let curso = document.querySelector('#curso').value;
        let nombre = document.querySelector('#nombre').value;
        let comentario = document.querySelector('#comentarios').value;

        //Identificar sm
        let smCiclo = document.querySelector('#smCiclo');
        let smModulo = document.querySelector('#smModulo');
        let smCurso = document.querySelector('#smCurso');
        let smNombre = document.querySelector('#smNombre');
        let smComentario = document.querySelector('#smComentario');

        //Validamos Ciclo

        if(!ciclo){
            smCiclo.textContent = 'Es necesario seleccionar una opción';
            avanza = false;
        }else{
            smCiclo.textContent ='';
        }

        //Validamos Módulos 
         
        if(modulos.length === 0){
            smModulo.textContent = 'Debes elegir mínimo un campo';
            avanza = false;
        }else{
            smModulo.textContent='';
        }

        //Validamos Curso

         if(curso === ''){
            smCurso.textContent = 'Debes elegir un valor';
            avanza = false;
         }else{
            smCurso.textContent ='';
         }

         //Validamos Nombre

         if(nombre.trim()===''){

            smNombre.textContent = 'El campo no puede estar vacio';
            avanza = false;
         }else{
            smCurso.textContent='';
         }

         if(comentario.trim()===''){
            smComentario.textContent = 'El campo no puede estar vacio'
            avanza = false;
         }else{
            smComentario.textContent = '';
         }

         return avanza;
    }
}