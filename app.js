let codigo = {'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'};
let texto_in = '';
let palavra = '';
let texto_out = '';
let letras = [];

function criptografar(){
    zerar();
    texto_in = document.querySelector('textarea').value;
    texto_out = document.getElementById('textoOut');
 
    for (let c = 0; c < texto_in.length; c++){
        letras.push(texto_in[c]);
    }
   
    for (let n = 0; n < letras.length; n++){
        if (letras[n] in codigo){
            palavra+= codigo[letras[n]]
        }
        else{
            palavra += letras[n];
        }
    }
    console.log(letras);
    if (texto_in != ''){
        limparText();
        copiarEnabled();
    }
    console.log(palavra)
    texto_out.innerHTML = palavra;
    
    return texto_out;
}
function descriptografar(){
    zerar();
    texto_in = document.querySelector('textarea').value;
    texto_out = document.getElementById('textoOut');
    if (texto_in != ''){
        limparText();
        copiarEnabled();
    }
    return texto_out.innerHTML = replaceLetters(texto_in);
     
}
function copiar(){
    var copiaTexto = texto_out.innerHTML;
    navigator.clipboard.writeText(copiaTexto);
    alert('copiado! ')
    
    return console.log('Copiado o texto: ' + copiaTexto);      
}
function copiarEnabled(){
    let habilitar = document.getElementById('copiarButton').removeAttribute('disabled');
    return habilitar;
}
function limparText(){
    let limpaTexto = document.getElementById('titulo3');
    limpaTexto.innerHTML = '';
    limpaTexto = document.getElementById('texto_secao2');
    limpaTexto.innerHTML = '';
}
function zerar(){
    texto_in = '';
    palavra = '';
    texto_out = '';
    letras = []; 
}
function replaceLetters(texto){
    check = texto.replaceAll('ai', 'a');
    check = check.replaceAll('enter', 'e');
    check = check.replaceAll('imes', 'i');
    check = check.replaceAll('ober', 'o');
    check = check.replaceAll('ufat', 'u');
    return check;
}







