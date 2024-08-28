function botaoCriptografar(){
  const inputValue = document.getElementById('input').value;
  let palavraCriptografada = '';
  for (let i = 0; i < inputValue.length; i++) {
    let letraCriptografado = criptografar(inputValue.charAt(i))
    palavraCriptografada = palavraCriptografada + letraCriptografado
  }
  document.getElementById('img-content').hidden = true
  document.getElementById('title-text').hidden = true
  document.getElementById("text").innerText = palavraCriptografada
  document.getElementById('botao-copiar').hidden = false
}


async function receberPalavraCriptografada(){
  const palavraCriptografada = document.getElementById('input').value;
  const fodase = await descriptografar(palavraCriptografada);
  document.getElementById("text").innerText = fodase;
  document.getElementById('img-content').hidden = true;
  document.getElementById('title-text').hidden = true;
  document.getElementById('botao-copiar').hidden = false;
}

function copiar(){
  let textCopy = document.getElementById('text');
  navigator.clipboard.writeText(textCopy.innerText);
  document.getElementById("text").innerText = ""
}


function criptografar(letra){
  switch (letra){
    case 'e': 
      return 'enter'
    case 'i':
      return 'imes'
    case 'a':
      return 'ai'
    case 'o':
      return 'ober'
    case 'u':
      return 'ufat'
    default:
      return letra
  }
}

async function descriptografar(stringEncriptada){
  const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][1])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    } 
  }
  return stringEncriptada;
}
