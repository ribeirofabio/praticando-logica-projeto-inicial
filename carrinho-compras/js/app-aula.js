// LEVANTAMENTO DE OBJETIVOS
// ANALISAR HTML (!)
// RECUPERAR VALORES NOME DO PRODUTO, QUANTIDADE E VALOR
// CALCULAR O PRECO TOTAL (SUBTOTAL)
// ADICIONAR OS PRODUTOS NO CARRINHO
// ATUALIZAR O VALOR TOTAL
// LIMPAR QUANTIDADE
// IMPLEMENTAR BOTAO LIMPAR

// VARIAVEIS
let totalGeral = 0;
// document.getElementById('lista-produtos').innerHTML = '';
// document.getElementById('valor-total').textContent = 'R$ 0';
// limpar();

// CRIAR AS FUNCOES
function adicionar() {
    // RECUPERAR VALORES NOME DO PRODUTO, QUANTIDADE E VALOR
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
}

function limpar() {
    
}