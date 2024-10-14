// FUNCAO PARA COMPRAR INGRESSO
function comprar() {
    // RECUPERAR O TIPO DE INGRESSO
    let tipo = document.getElementById('tipo-ingresso');
    // RECUPERAR A QUANTIDADE INFORMADA
    let qtd = parseInt(document.getElementById('qtd').value);
    // COMPRANDO OS INGRESSOS
    if(tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior'){
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

// FUNCOES PARA COMPRAR CADA TIPO DE INGRESSO

// PISTA
function comprarPista(qtd) {
    // RECUPERAR QTD DISPONIVEL PARA PISTA
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    // SE A QTD A SER COMPRADA FOR MAIOR QUE A QTD DISPONIVEL PARA PISTA
    if (qtd > qtdPista){
        // MOSTRA UM ALERT DE ERRO
        alert('Quantidade indisponível para tipo pista')
    } else {
        // SUBTRAIR A QTD DE INGRESSOS DISPONIVEIS
        qtdPista = qtdPista - qtd;
        // RECUPERA E ATUALIZA O VALOR DO CAMPO TEXTO NA TELA
        document.getElementById('qtd-pista').textContent = qtdPista;
        // MOSTRA ALERT DE COMPRA REALIZADA
        alert('Compra realizada com sucesso!')        
    }
}

// SUPERIOR
function comprarSuperior(qtd) {
    // RECUPERAR QTD DISPONIVEL PARA SUPERIOR
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    // SE A QTD A SER COMPRADA FOR MAIOR QUE A QTD DISPONIVEL PARA SUPERIOR
    if (qtd > qtdSuperior){
        // MOSTRA UM ALERT DE ERRO
        alert('Quantidade indisponível para tipo Cadeira Superior')
    } else {
        // SUBTRAIR A QTD DE INGRESSOS DISPONIVEIS
        qtdSuperior = qtdSuperior - qtd;
        // RECUPERA E ATUALIZA O VALOR DO CAMPO TEXTO NA TELA
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        // MOSTRA ALERT DE COMPRA REALIZADA
        alert('Compra realizada com sucesso!')        
    }
}

// INFERIOR
function comprarInferior(qtd) {
    // RECUPERAR QTD DISPONIVEL PARA INFERIOR
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    // SE A QTD A SER COMPRADA FOR MAIOR QUE A QTD DISPONIVEL PARA INFERIOR
    if (qtd > qtdInferior){
        // MOSTRA UM ALERT DE ERRO
        alert('Quantidade indisponível para tipo inferior')
    } else {
        // SUBTRAIR A QTD DE INGRESSOS DISPONIVEIS
        qtdInferior = qtdInferior - qtd;
        // RECUPERA E ATUALIZA O VALOR DO CAMPO TEXTO NA TELA
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        // MOSTRA ALERT DE COMPRA REALIZADA
        alert('Compra realizada com sucesso!')        
    }
}