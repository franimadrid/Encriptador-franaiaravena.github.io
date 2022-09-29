const mensajeInput = document.getElementById("mensaje-input")
const mensajeEncriptado = document.getElementById("mensaje-encriptado")

document.getElementById("encriptar").addEventListener("click", btnEncriptar);
document.getElementById("desencriptar").addEventListener("click", btnDesencriptar);
document.getElementById("copiar").addEventListener("click", copiar);

function btnEncriptar(){
    const textoEncriptado = encriptar(mensajeInput.value);
    mensajeEncriptado.value = textoEncriptado; 
    mensajeInput.value = ""
}

function encriptar(stringEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringEncriptada = stringEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

function btnDesencriptar(){
    if(mensajeEncriptado.value !== ""){
        let TextoEncriptado = desencriptar(mensajeEncriptado.value)
        mensajeInput.value = TextoEncriptado
        mensajeEncriptado.value = ""
    }
    else{
        let TextoEncriptado = desencriptar(mensajeInput.value)
        mensajeEncriptado.value = TextoEncriptado
        mensajeInput.value = "";
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes (matrizCodigo [i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo [i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptada;

}

function copiar(){
    mensajeEncriptado.select();
    navigator.clipboard.writeText(mensajeEncriptado.value);
    mensajeEncriptado.value = "";
    alert("Texto Copiado");
}