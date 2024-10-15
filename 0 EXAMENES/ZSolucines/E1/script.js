let accion = document.querySelector('form');
let validar = true;

accion.onsubmit = () => {
    // Declaramos los controladores, validaciones y small
    let validacion1 = document.getElementById('v1').value;
    let validacion2 = document.getElementById('v2').value;
    let validacion3 = document.getElementById('v3').value;
    let validacion4 = document.getElementById('v4').value;

    let smvalidacion1 = document.getElementById('smv1');
    let smvalidacion2 = document.getElementById('smv2');
    let smvalidacion3 = document.getElementById('smv3');
    let smvalidacion4 = document.getElementById('smv4');

    // Creamos las funciones de cada validación
    validacion1campo(validacion1, smvalidacion1);
    validacion2campo(validacion2, smvalidacion2);
    validacion3campo(validacion3, smvalidacion3);
    validacion4campo(validacion4, smvalidacion4);

    return validar;
};

function validacion1campo(v1, texto) {
    if (v1.length !== 10) {
        validar = false;
        texto.textContent = "El campo debe tener exactamente 10 caracteres";
    } else if (isNaN(v1[0]) || isNaN(v1[v1.length - 1])) {
        validar = false;
        texto.textContent = "Cumples la longitud de 10, pero el primer y último carácter deben ser un número";
    }
}

function validacion2campo(v2, texto) {
    if (v2.length !== 12) {
        validar = false;
        texto.textContent = "El campo debe tener exactamente 12 caracteres";
    } else {
        for (let i = 0; i < v2.length; i++) {
            const caracter = v2.charAt(i);

            // Verificamos que los primeros 6 caracteres no sean numéricos
            if (!isNaN(caracter) && i < v2.length / 2) {
                validar = false;
                texto.textContent = "Los primeros 6 caracteres no pueden ser números";
                break;
            }

            // Verificamos que los últimos 6 caracteres no sean letras
            if (isNaN(caracter) && i >= v2.length / 2) {
                validar = false;
                texto.textContent = "Los últimos 6 caracteres no pueden ser letras";
                break;
            }
        }
    }
}


function validacion3campo(v3, texto) {
    if (v3.length !== 19) {
        validar = false;
        texto.textContent = "El campo debe tener exactamente 20 caracteres";
    } else {
        for (let i = 0; i < v3.length; i++) {
            if ((i === 4 || i === 9 || i === 14 || i === 19) && v3.charAt(i) !== '-') {
                validar = false;
                texto.textContent = "El formato debe ser 1254-xxxx-xxxx-xxxx";
                break;
            } else if (isNaN(v3.charAt(i)) && (i !== 4 && i !== 9 && i !== 14 && i !== 19)) {
                validar = false;
                texto.textContent = "El contenido debe ser numérico en las posiciones adecuadas";
                break;
            }
        }
    }
}

function validacion4campo(v4, texto) {
    if (v4.length !== 8) {
        validar = false;
        texto.textContent = "El campo debe tener exactamente 8 caracteres";
    } else {
        let numMayus = 0;
        for (let i = 0; i < v4.length; i++) {
            if (v4.charAt(i) === v4.charAt(i).toUpperCase() && isNaN(v4.charAt(i))) {
                numMayus += 1;
            }
        }
        if (numMayus !== 2) {
            validar = false;
            texto.textContent = "Debe haber exactamente 2 caracteres en mayúscula";
        }
    }
}
