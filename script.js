//Pegando os dados do HTML

let textoArea = document.querySelector("#input-texto");
let resultado = document.querySelector("#resultado");

let botaoCriptografar = document.querySelector("#botaoCriptografar");
let botaoDesincriptografar = document.querySelector("#botaoDesincriptografar");
let botaoCopia = document.querySelector("#botaoCopia");

//Lógica
//não aceitar números, caracteres especiais e letras com acentos
textoArea.addEventListener("keypress", function (e) {
  const keyCode = e.keyCode ? e.keyCode : e.key;
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
    alert("Digite somente letras");
  }
  if (!verificaCaracter(e)) {
    e.preventDefault();
    alert("Digite apenas letras");
  }
});

function verificaCaracter(e) {
  const caracter = String.fromCharCode(e.keyCode);

  const padrao = "[a-zA-z0-9 ]";

  if (caracter.match(padrao)) {
    return true;
  }
} //funções dos botões
function criptografar() {
  let texto = textoArea.value;
  let resultado1 = texto.replaceAll("e", "enter");
  let resultado2 = resultado1.replaceAll("i", "imes");
  let resultado3 = resultado2.replaceAll("a", "ai");
  let resultado4 = resultado3.replaceAll("u", "ufat");
  let resultado5 = resultado4.replaceAll("o", "ober");

  resultado.value = resultado5.toLowerCase();
}
function desincriptografar() {
  let texto = textoArea.value;
  let resultado1 = texto.replaceAll("enter", "e");
  let resultado2 = resultado1.replaceAll("imes", "i");
  let resultado3 = resultado2.replaceAll("ai", "a");
  let resultado4 = resultado3.replaceAll("ufat", "u");
  let resultado5 = resultado4.replaceAll("ober", "o");

  resultado.value = resultado5.toLowerCase();
}
function limpaTela() {
  textoArea.value = "";
  resultado.value = "";
}
function copiarTexto() {
  let textoCopiado = resultado.value;
  navigator.clipboard.writeText(textoCopiado);
  limpaTela();
  //input.focus();definir o input
}
botaoCriptografar.onclick = criptografar;
botaoDesincriptografar.onclick = desincriptografar;
botaoCopia.onclick = copiarTexto;
