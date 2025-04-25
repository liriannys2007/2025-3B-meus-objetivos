const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll("aba-conteudo");
const contadores = document.querySelectorAll(".contador");

const tempoObjetivo01 = new Date("2025-05-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent =tempoObjetivo01 - tempoAtual

for(let i=0; i<botoes.length; i++){
    
    botoes[i].onclick = function() {
       
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativo');
        }
       
        botoes[i].classList.add('ativo');
        textos[i].classList.add('ativo');
  
    }
}

function claculatempo(tempoObjetivo){
    let tempoAtual();
    let tempofinal = tempoObjetivo - tempoAtual

    let segundos = match.floor(tempofinal/1000);
    let minutos = match.floor(segundos/60);
    let horas = match.floor(minutos/60);
    let dias = match.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
}