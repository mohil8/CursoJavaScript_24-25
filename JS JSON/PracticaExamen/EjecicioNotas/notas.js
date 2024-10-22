window.addEventListener('load',empezar);

function empezar(){

    const url = 'json.json'

    fetch(url)
    .then(response=>response.json())
    .then(notas=>mostrar(notas))
    .catch(error=>alert(error))
    .finally();

    function mostrar(notas){

        //Alumnos con nota media mas alta
        let alumnoNotaAlta = '';
        let media=0;
        let alumnosTodoAprobado =[];
        let alumnosConMismaNota=[];
        let alumnoMediaAprobada=[];
        
       
            notas.forEach(not => {
                
                if(mediaNotas(not)>media){
                    media=mediaNotas(not)
                    alumnoNotaAlta=not.alumno;  
                }

                if(apruebanTodo(not)){
                    alumnosTodoAprobado.push(not.alumno);
                }

                if(mediaNotas(not)>5 && apruebanTodo(not)==false){
                    alumnoMediaAprobada.push(not.alumno);
                }
                if(comprobarTresExamanes(not)){
                    alumnosConMismaNota.push(not.alumno);
                }

            });

            alert(alumnoNotaAlta);
            alert(alumnosTodoAprobado);
            alert(alumnoMediaAprobada);
            alert(alumnosConMismaNota);
           
    }

    function mediaNotas(notas){

        let suma = 0;
        let mediaTotal=0;
        let notasAlumno = [notas.nota1,notas.nota2,notas.nota3,notas.nota4,notas.nota5,notas.nota6];

            notasAlumno.forEach(element => {
                
                suma+=Number(element);
                mediaTotal= suma/notasAlumno.length;
            });

        return mediaTotal; 

    }

    function apruebanTodo(notas){

        let aprueba=true;
        let notasAlumno = [notas.nota1,notas.nota2,notas.nota3,notas.nota4,notas.nota5,notas.nota6];

            notasAlumno.forEach(element => {
                
                if(Number(element)<5){
                    aprueba=false
                }

                
            });

        return aprueba;

    }

function comprobarTresExamanes(notas) {
    let tres = false;
    const notasAlumno = [
        notas.nota1,
        notas.nota2,
        notas.nota3,
        notas.nota4,
        notas.nota5,
        notas.nota6,
    ];

    for (let i = 0; i < notasAlumno.length; i++) {
        let contIgualdades = 0;
        notasAlumno.forEach(element => {
            if (Number(element) === Number(notasAlumno[i])) {
                contIgualdades++;
            }
        });
        if (contIgualdades >= 3) {
            tres = true;
            break; // Sale del bucle tan pronto como encuentra tres iguales
        }
    }
    return tres;
}


    


}