let tempo = 0; // Tempo em segundos
let intervalo;

const tempoDisplay = document.getElementById("tempo");
const botaoIniciar = document.getElementById("botao");
const botaoZerar = document.getElementById("botaoZerar");

botaoIniciar.addEventListener("click", () => {
    if (!intervalo) { // Verifica se o cronômetro já está em execução
        intervalo = setInterval(() => {
            tempo++;
            const minutos = Math.floor(tempo / 60);
            const segundos = tempo % 60;
            tempoDisplay.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        }, 1000);
        botaoIniciar.textContent = "Parar"; // Altera o texto do botão
    } else {
        clearInterval(intervalo); // Para o cronômetro
        intervalo = null; // Reseta o intervalo
        botaoIniciar.textContent = "Iniciar"; // Restaura o texto do botão
    }
});

botaoZerar.addEventListener("click", () => {
    clearInterval(intervalo); // Para o cronômetro
    intervalo = null; // Reseta o intervalo
    tempo = 0; // Reseta o tempo
    tempoDisplay.textContent = "00:00"; // Restaura a exibição
    botaoIniciar.textContent = "Iniciar"; // Restaura o texto do botão
});