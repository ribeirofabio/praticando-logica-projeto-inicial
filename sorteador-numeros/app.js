// ACOES DE SORTEAR OS NUMEROS
function sortear() {
    // VARIAVEIS PARA OS CAMPOS
    let qtd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // VALIDAR SE O CAMPO "DO NUMERO" E MENOR QUE "ATE O NUMERO"
    if(de >= ate){
        alert('Valor do campo "Do número" precisa ser menor que o do campo "Até o número"')
        return; // RETORNA VAZIO, OU SEJA, TRAVA A EXECUCAO ATE A CONDICAO SER RESOLVIDA
    }

    // VALIDAR SE O CAMPO "QUANTIDADE" E MENOR QUE O INTERVALO ENTRE OS CAMPOS "ATE O NUMERO" E "DO NUMERO"
    if(qtd > (ate - de + 1)){
        alert('Quantidade deve ser menor ou igual ao intervalo dos campos "Do número" e campos "Do número"')
        return;
    }

    // ARRAY PARA ARMAZENAR OS NUMEROS GERADOS
    let sorteados = [];
    // VARIAVEL AUX. PARA RECEBER UM NUMERO GERADO
    let numero;
    
    // LACO PARA GERAR OS NUMEROS
    for (let i = 0; i < qtd; i++) {
        numero = obterNumeroAleatorio(de, ate);
        // SE O NUMERO JA ESTIVER DENTRO DO ARRAY
        while(sorteados.includes(numero)){
            // GERA NOVAMENTE
            numero = obterNumeroAleatorio(de, ate)
        }        
        // ADICIONA O NUMERO AO ARRAY
        sorteados.push(numero);
    }

    // ALTERA O TEXTO DO CAMPO COM O RESULTADO
    if(sorteados.length > 0){
        exibirTexto('resultado', `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`);
        // PLUS: ALTERAR A VISIBILIDADE DOS BOTOES
        alterarStatusBotao('btn-reiniciar');
        alterarStatusBotao('btn-sortear');
    }
}

// GERAR NUMERO INTEIRO ALEATORIO COM MIN E MAX
function obterNumeroAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ACOES DE REINICIAR
function reiniciar() {    
    exibirTextoValue('quantidade', '');
    exibirTextoValue('de', '');
    exibirTextoValue('ate', '');

    // PLUS: ALTERAR A VISIBILIDADE DOS BOTOES
    alterarStatusBotao('btn-sortear');
    alterarStatusBotao('btn-reiniciar');
    // RETORNA O TEXTO PADRAO DO CAMPO DE RESULTADO
    exibirTexto('resultado', '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>');
}

// ALTERAR VALOR DA TAG
function exibirTextoValue(tag, texto) {
    let e = document.getElementById(tag);
    e.value = texto;
}

// ALTERAR TEXTO + COMPLEXO
function exibirTexto(tag, texto) {
    let e = document.getElementById(tag);
    e.innerHTML = texto;
}

// ALTERAR TEXTO + SIMPLES
function exibirTextoSimples(tag, texto) {
    let e = document.getElementById(tag);
    e.textContent = texto;
}

// ALTERAR CLASS DO BOTAO
function alterarStatusBotao(tag) {
    let botao = document.getElementById(tag);
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');        
    }
}