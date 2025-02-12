function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    // Armazenar os números sorteados
    let sorteados = [];
    
    // Sorteia números até que o número desejado de sorteios seja atingido sem repetir
    for (let i = 0; i < quantidade; i++) {
        let numero;
        
        
        do {
            numero = numeroAleatorio(doNumero, ateNumero);
        } while (sorteados.includes(numero));  
        
        sorteados.push(numero);
    }

    // Determina o nome no plural ou singular baseado na quantidade
    let palavraSorteado = quantidade > 1 ? 'Números Sorteados' : 'Número Sorteado';
    
    // Exibe os números sorteados no console
    console.log(`${palavraSorteado}: ${sorteados}`);

    // Exibe os números sorteados na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">${palavraSorteado}: ${sorteados}.</label>`;
    alterarStatus ();
}

// Função para gerar um número aleatório entre o intervalo 'min' e 'max'
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Alterar o status do botão
function alterarStatus() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Definindo a função do botão Reiniciar
function reiniciar(){
    alterarStatus();
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

}
