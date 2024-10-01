// OBJETIVOS
// RECUPERAR QUANTIDADE, NOME E PRECO DO PRODUTO DA LISTA DE PRODUTOS
// AO CLICAR ADICIONAR, ADICIONA PRODUTOS NO CARRINHO E INCREMENTA O TOTAL E LIMPA O CAMPO QUANTIDADE
// AO CLICAR LIMPAR, ZERA O CARRINHO E O TOTAL

// CONDICOES
// AO CARREGAR A PAGINA, LIMPA O CARRINHO E O TOTAL
// SO ADICIONA O PRODUTO NO CARRINHO SE A QUANTIDADE FOR PREENCHIDA

/////////////////////////////////////////////////////////////////////////////////////

// VARIAVEIS

// LISTA DE PRODUTOS
let listaDeProdutos = [];
// LISTA PARA O CARRINHO
let listaDeProdutosNoCarrinho = [];
// VALOR INICIAL DO TOTAL
let valorTotalProdutos = 1400;

// FUNCOES

function adicionar() {   
    // ADICIONAR PRODUTO NA LISTA
    // RECUPERAR SELECT(LISTAGEM) DE PRODUTOS
    let select = document.getElementById('produto');
    // RECUPERAR OPTION DO PRODUTO SELECIONADO
    let option = select.options[select.selectedIndex].value;
    // RECUPERANDO A QUANTIDADE DO PRODUTO
    let quantidade = document.getElementById('quantidade').value;
    // CONDICAO: SE A QUANTIDADE ESTA PREENCHIDA
    if(quantidade != null && quantidade > 0){
        // ADICIONA NA LISTA DE PRODUTOS
        listaDeProdutos.push(parseInt(quantidade));
    }else{
        // SE NAO, RETORNA PARA A FUNCAO
        return;
    }    
    // SEPARAR NOME DO PRODUTO PELO "-"
    let nomeDoProdutoSeparado = separarNomeDoProduto(option);        
    // ADICIONAR PRODUTO NA LISTA DE PRODUTOS    
    listaDeProdutos = listaDeProdutos.concat(nomeDoProdutoSeparado);
    // INCREMENTANDO VALOR TOTAL
    valorTotalProdutos += nomeDoProdutoSeparado[1] * quantidade;    

    //  (OPCIONAL) IMPRIMINDO LISTA DE PRODUTOS NA TELA
    // imprimirNaTela('Lista de produtos = ' + listaDeProdutos);
    imprimirNaTela(listaDeProdutos);    

    // ALTERAR TEXTO DO CARRINHO
    // RECUPERAR ID DO CARRINHO
    let carrinho = document.getElementById('lista-produtos');   
    // RECUPERAR A TAG SECTION
    // let section = carrinho.querySelector('.carrinho__produtos__produto');    
    // ALTERAR TEXTO TAG SECTION
    // section.innerHTML = `<span class="texto-azul">${quantidade}x</span> 
    //     ${nomeDoProdutoSeparado[0]} 
    //     <span class="texto-azul">R$${nomeDoProdutoSeparado[1]}</span>`;   

    // // PULAR LINHAS
    // let pularLinhas = document.createElement('br');
    // section.appendChild(pularLinhas);

    // ADICIONAR NOVOS PRODUTOS NO CARRINHO
    // CRIANDO UMA NOVA SECTION
    let novoTextoSection = document.createElement('section');
    novoTextoSection.innerHTML = `<span class="texto-azul">${quantidade}x</span> 
        ${nomeDoProdutoSeparado[0]} 
        <span class="texto-azul">R$${nomeDoProdutoSeparado[1]}</span>`;
    // ADICIONAR CLASSE NA NOVA SECTION
    novoTextoSection.className = 'carrinho__produtos__produto';    
    // ADICIONAR NOVA SECTION AO CARRINHO
    // CONDICAO SE A QUANTIDADE ESTA PREENCHIDA
    if(quantidade != null && quantidade > 0){
        // ADICIONA NOVA SECTION NO CARRINHO
        carrinho.appendChild(novoTextoSection);
    } else{
        // SE NAO, RETORNA PARA A FUNCAO
        return;
    }    

    // (OPCIONAL) LIMPAR CAMPO QUANTIDADE
    // let campoQuantidade = document.getElementById('quantidade');
    // campoQuantidade.value = 1;
    // campoQuantidade.placeholder = '100';
    valorPadraoCampoImput('quantidade');
    
    // ALTERAR TEXTO DO TOTAL
    // RECUPERA O CAMPO TOTAL
    let valorTotal = document.getElementById('valor-total');
    // console.log('Valor total = ' + valorTotal.textContent);
    // valorTotalProdutos += nomeDoProdutoSeparado[1];
    // ALTERA O TEXTO DO CAMPO TOTAL
    valorTotal.textContent = 'R$' + valorTotalProdutos;
    // (OPCIONAL) IMPRIME O VALOR DO CAMPO TOTAL NA TELA
    imprimirNaTela('Valor Total = ' + valorTotalProdutos);
}    

// REMOVER R$ E SEPARAR NOME DO PRODUTO PELO "-"
function separarNomeDoProduto(produto) {
    // ARRAY AUXILIAR
    let palavraSeparada = [];
    // ARRAY AUXILIAR RECEBE O NOME DO PRODUTO TROCANDO R$ POR '' E SEPARANDO POR '-'
    palavraSeparada = produto.replace('R$', '').split('-');
    // CONVERTER VALOR DO PRODUTO (ARRAY AUXILIAR) EM INTEIRO
    palavraSeparada[1] = parseInt(palavraSeparada[1]); // O VALOR ESTA NA POSICAO [1]
    // RETORNA O ARRAY ALTERADO
    return palavraSeparada;
}

// IMPRIMIR TEXTO NA TELA
function imprimirNaTela(texto) {
    console.log(texto);
    // alert(texto);
}

// LIMPAR ITENS DA TELA
function limpar() {
    // LIMPAR CARRINHO
    // RECUPERAR ID DO CARRINHO
    let carrinho = document.getElementById('lista-produtos');   
    // ARROW FUNCION PARA PERCORRER O ELEMENTO PARENT (CARRINHO)
    const removeChilds = (parent) => {
        // ENQUANTO O CARRINHO TIVER "FILHOS" (SECTIONS)
        while (parent.lastChild) {
            // REMOVA O ULTIMO SECTION
            parent.removeChild(parent.lastChild);
        }
    };    
    // CHAMA A ARROW FUNCTION
    removeChilds(carrinho);

     // ZERAR TEXTO DO CAMPO TOTAL
     // RECUPERA O CAMPO TOTAL
     let valorTotal = document.getElementById('valor-total');
     // ZERA O TOTAL
     valorTotalProdutos = 0;
     // ALTERA O TEXTO DO CAMPO TOTAL
     valorTotal.textContent = 'R$' + valorTotalProdutos;
}

// VALOR PADRAO CAMPO INPUT
function valorPadraoCampoImput(id) {
    // RECUPERA O CAMPO
    let campo = document.getElementById(`${id}`);
    // VALUE DO IMPUT
    campo.value = '';
    // PLACEHOLDER DO INPUT
    campo.placeholder = '100';
    // RETORNA O INPUT ALTERADO
    return campo;
}