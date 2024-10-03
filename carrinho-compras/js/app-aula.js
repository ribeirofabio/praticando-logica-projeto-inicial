// LEVANTAMENTO DE OBJETIVOS
// ANALISAR HTML (!)
// RECUPERAR VALORES NOME DO PRODUTO, QUANTIDADE E VALOR TOTAL
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
    // SEPARAR NOME DO PRODUTO
    let nomeProduto = produto.split('-')[0];
    // SEPARAR VALOR UNITARIO DO PRODUTO
    let valorUnitario = produto.split('R$')[1];
    // RECUPERAR QUANTIDADE
    let quantidade = document.getElementById('quantidade').value; 
    // CALCULAR O PRECO TOTAL (SUBTOTAL)
    let preco = quantidade * valorUnitario;
    // ADICIONAR PRODUTO NO CARRINHO
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>          
    </section>`;
    // ATUALIZAR O VALOR TOTAL
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    // ZERAR A QUANTIDADE
    document.getElementById('quantidade').value = 0;
}

// IMPLEMENTAR BOTAO LIMPAR
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}