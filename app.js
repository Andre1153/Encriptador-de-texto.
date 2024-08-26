const textarea = document.querySelector(".textarea");
const mensaje = document.querySelector(".texto-procesado");
const botonCopiar = document.querySelector(".boton-copiar");

window.onload = function() {document.querySelector('.ocultar').classList.remove('hidden');};

/* Claves de encriptación:

La letra "e" es convertida para "enter".
La letra "i" es convertida para "imes".
La letra "a" es convertida para "ai".
La letra "o" es convertida para "ober".
La letra "u" es convertida para "ufat". */

function botonEncriptar() {
    if (textarea.value==="") {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "¡Por favor, ingrese un texto o palabra!";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
    }
    else if (/[^a-z\s]/.test(textarea.value)) {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "¡Por favor ingrese sólo minúsculas sin caracteres especiales ni tildes!";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
    }
    else {
        const textoEncriptado = encriptar(textarea.value);
        console.log (textoEncriptado)
        mensaje.value = textoEncriptado;
        textarea.value = "";
        document.querySelector(".encripta-texto").style.display="block";
        document.querySelector('.ocultar').classList.add('hidden'); // Oculta el div 'ocultar'.
    }  
 }

function encriptar(cadenaEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(cadenaEncriptada.includes(matrizCodigo[i][0])) {
            cadenaEncriptada = cadenaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return cadenaEncriptada;
}

function botonDesencriptar() {
    if (textarea.value=="") {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "¡Por favor, ingrese un texto o palabra!";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
    }
    else if (/[^a-z\s]/.test(textarea.value)) {
        var mensajeError = document.getElementById("mensaje-error");
        mensajeError.textContent = "¡Por favor, ingrese sólo minúsculas sin caracteres especiales ni tildes!";
        setTimeout(function() {mensajeError.textContent = "";}, 5000);
        return;
    }
    else {
        const textoEncriptado = desencriptar(textarea.value);
        mensaje.value = textoEncriptado;
        areaTexto.value = "";
        document.querySelector('.ocultar').classList.add('hidden'); // Oculta el div 'ocultar'.
    }
}

function desencriptar(cadenaDesencriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(cadenaDesencriptada.includes(matrizCodigo[i][1])) {
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return cadenaDesencriptada;
}

function copiar() {
    var resultado = mensaje.value;
    var temptextarea = document.createElement("textarea");
    temptextarea.value = resultado;
    document.body.appendChild(temptextarea);
    temptextarea.select();
    document.execCommand("copy");
    document.body.removeChild(temptextarea);
    var mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
    mensajeConfirmacion.textContent = "Texto copiado al portapapeles.";
    setTimeout(function() {mensajeConfirmacion.textContent = "";}, 5000);
}