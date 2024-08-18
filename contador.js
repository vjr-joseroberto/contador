function contagem() {
    const meta = new Date('January 1, 2026 00:00:00').getTime();
    const atual = new Date().getTime();
    const faltante = meta - atual;

    const dias = Math.floor(faltante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((faltante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((faltante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((faltante % (1000 * 60)) / 1000);

    document.getElementById('contagemRegressiva').textContent =
        `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos restantes`;
}

// Atualiza a contagem regressiva a cada segundo
setInterval(contagem, 1000);

// Inicializa a contagem regressiva ao carregar a página
contagem();