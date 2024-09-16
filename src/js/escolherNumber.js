const numero_de_tentativas = document.getElementById("numTest");
const numeroEscolihdoH3 = document.getElementById("numeroEscolihdoH3");
const botao_novo_jogo = document.getElementById("btn01");
const numero_escolhido = document.getElementById("num");
const resposta_html = document.getElementById("resp");
const botao_escolha = document.getElementById("btn");
const dica = document.getElementById("obs");

let numeroGerado = Math.floor(Math.random() * 100) + 1;

function start() {
  let numero_input = Number(numero_escolhido.value);
  if (numero_input < 0) {
    alert("[ERRO] - Número negativos não são permitidos");
  } else if (numero_input === numeroGerado) {
    jogoGanho();
    vocePerdeu(jogoGanho);
  } else {
    ft_Dicas(numero_input);
    numberTentativas(numero_input);
  }
}
let contador = 1;
function numberTentativas(inputNamber) {
  if (contador <= 10) {
    numero_de_tentativas.textContent += `${contador} `;
    numeroEscolihdoH3.textContent += `${inputNamber}.        `;
  } else {
    jogoPerdido();
    vocePerdeu(jogoPerdido, jogoGanho);
  }
  contador++;
}

const vocePerdeu = (gamerOver, gamerWich) => {
  if (gamerOver || gamerWich) {
    botao_escolha.addEventListener("click", () => window.location.reload());
  }
};
const jogoGanho = () => {
  resposta_html.textContent = "PARABÉNS, VENCEDOR!";
  resposta_html.style.background = "green";
};
const jogoPerdido = () => {
  resposta_html.textContent = "VOCÊ PERDEU!";
  resposta_html.style.background = "red";
};

function ft_Dicas(numero) {
  if (numero > numeroGerado) {
    dica.innerHTML = "O seu número está acima do número escolhido";
  } else {
    dica.innerHTML = "O seu número está baixo do número escolhido";
  }
}

botao_escolha.addEventListener("click", () => {
  start();
  numero_escolhido.value = "";
  numero_escolhido.focus();
});
