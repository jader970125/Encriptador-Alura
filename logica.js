function encriptarTexto(){
    let cuadroTexto=document.getElementById('textoOriginal').value;
    let textoEncriptado="";
    for(var i=0; i<cuadroTexto.length; i++){
        if(cuadroTexto[i]=="a"){
            textoEncriptado = textoEncriptado+"ai";
        }
        else if(cuadroTexto[i]=="e"){
            textoEncriptado= textoEncriptado+"enter";
        }
        else if(cuadroTexto[i]=="i"){
            textoEncriptado= textoEncriptado+"imes";
        }
        else if(cuadroTexto[i]=="o"){
            textoEncriptado= textoEncriptado+"ober";
        }
        else if(cuadroTexto[i]=="u"){
            textoEncriptado= textoEncriptado+"ufat";
        }
        else{
            textoEncriptado=textoEncriptado + cuadroTexto[i];
        }
    }
    
    return textoEncriptado;


}


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
