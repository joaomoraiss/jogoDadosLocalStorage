  let jogadorAtual = 1;
let jogadas = 0;
let pontosJogador1 = 0;
let pontosJogador2 = 0;

// Verificar se há dados salvos no localStorage e recuperar
if (localStorage.getItem('jogadorAtual')) {
  jogadorAtual = parseInt(localStorage.getItem('jogadorAtual'));
  jogadas = parseInt(localStorage.getItem('jogadas'));
  pontosJogador1 = parseInt(localStorage.getItem('pontosJogador1'));
  pontosJogador2 = parseInt(localStorage.getItem('pontosJogador2'));
  document.getElementById("jogador1").innerHTML = `Jogar Dado 1 - Último resultado: ${localStorage.getItem('resultadoDado1')}`;
  document.getElementById("jogador2").innerHTML = `Jogar Dado 2 - Último resultado: ${localStorage.getItem('resultadoDado2')}`;
}

function jogarDado(jogador) {
  if (jogadas < 10) {
    if (jogador == jogadorAtual) {
      let resultadoDado = Math.floor(Math.random() * 6) + 1;
      document.getElementById(`jogador${jogador}`).innerHTML = `Jogar Dado ${jogador} - Último resultado: ${resultadoDado}`;
      if (jogador == 1) {
        pontosJogador1 += resultadoDado;
        localStorage.setItem('resultadoDado1', resultadoDado);
      } else {
        pontosJogador2 += resultadoDado;
        localStorage.setItem('resultadoDado2', resultadoDado);
      }
      jogadas++;

      // Salvar os dados no localStorage
      localStorage.setItem('jogadorAtual', jogadorAtual);
      localStorage.setItem('jogadas', jogadas);
      localStorage.setItem('pontosJogador1', pontosJogador1);
      localStorage.setItem('pontosJogador2', pontosJogador2);

      if (jogadas == 10) {
        fimDeJogo();
      } else if (jogador == 1) {
        jogadorAtual = 2;
      } else {
        jogadorAtual = 1;
      }
    } else {
      alert(`A vez é do jogador ${jogadorAtual}`);
    }
  } else {
    alert("O jogo já terminou. Clique em 'Reiniciar Jogo' para jogar novamente.");
  }
}

function fimDeJogo() {
  if (pontosJogador1 > pontosJogador2) {
    document.getElementById("resultado").innerHTML = `Fim de jogo. O jogador 1 venceu com ${pontosJogador1} pontos contra ${pontosJogador2} pontos do jogador 2.`;
  } else if (pontosJogador2 > pontosJogador1) {
    document.getElementById("resultado").innerHTML = `Fim de jogo. O jogador 2 venceu com ${pontosJogador2} pontos contra ${pontosJogador1} pontos do jogador 1.`;
  } else {
    document.getElementById("resultado").innerHTML = "Fim de jogo. Empate!";
  }

  // Limpar os dados salvos no localStorage
  localStorage.removeItem('jogadorAtual');
  localStorage.removeItem('jogadas');
  localStorage.removeItem('pontosJogador1');
  localStorage.removeItem('pontosJogador2');
  localStorage.removeItem('resultadoDado1');
  localStorage.removeItem('resultadoDado2');
}

function reiniciarJogo() {
  jogadorAtual = 1;
  jogadas = 0;
  pontosJogador1 = 0;
  pontosJogador2 = 0;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("jogador1").innerHTML = "Jogar Dado 1";
  document.getElementById("jogador2").innerHTML = "Jogar Dado 2";

  // Limpar os dados salvos no localStorage ao reiniciar o jogo
  localStorage.removeItem('jogadorAtual');
  localStorage.removeItem('jogadas');
  localStorage.removeItem('pontosJogador1');
  localStorage.removeItem('pontosJogador2');
  localStorage.removeItem('resultadoDado1');
  localStorage.removeItem('resultadoDado2');
}


