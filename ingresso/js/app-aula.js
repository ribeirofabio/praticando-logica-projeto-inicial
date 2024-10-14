// FUNCAO PARA COMPRAR INGRESSO
function comprar() {
    // RECUPERAR O TIPO DE INGRESSO
    let tipo = document.getElementById('tipo-ingresso');
    // RECUPERAR A QUANTIDADE INFORMADA
    let qtd = parseInt(document.getElementById('qtd').value);
    // COMPRANDO OS INGRESSOS
    if(tipo.value == 'pista') {
        comprarPista(qtd);
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