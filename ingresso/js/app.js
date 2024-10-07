// ANALISAR HTML ->
    // RECUPERAR TOTAL INICIAL POR TIPO DE INGRESSO
    // IMPLEMENTAR BOTAO COMPRAR
        // RECUPERAR TIPO DE INGRESSO SELECIONADO
        // RECUPERAR QUANTIDADE DE INGRESSOS COMPRADOS
        // CRIAR OPERACAO POR TIPO DE INGRESSO        
            // VALIDAR SE QTD COMPRADA É MENOR OU IGUAL A QTD DISPONIVEL
                // SE SIM
                    // SUBTRAIR A QTD DE INGRESSOS COMPRADOS DO TOTAL INICIAL DO TIPO DE INGRESSO SELECIONADO
                    // ALTERAR TEXTO DA QUANTIDADE DISPONIVEL DO TIPO DE INGRESSO SELECIONADO
                // SE NAO
                    // GERAR ALERT SE QTD COMPRADA FOR MAIOR QTD DISPONIVEL


// VARIAVEIS

// RECUPERAR TOTAL INICIAL POR TIPO DE INGRESSO
let totalIngressosPista = parseInt(document.getElementById('qtd-pista').innerHTML);
let totalIngressosCadeiraSuperior = parseInt(document.getElementById('qtd-superior').innerHTML);
let totalIngressosCadeiraInferior = parseInt(document.getElementById('qtd-inferior').innerHTML);

// FUNCOES

// IMPLEMENTAR BOTAO COMPRAR
function comprar() {
    // RECUPERAR TIPO DE INGRESSO SELECIONADO
    let ingresso = document.getElementById('tipo-ingresso').value;
    // RECUPERAR QUANTIDADE DE INGRESSOS COMPRADOS
    let quantidadeIngressosComprados = document.getElementById('qtd').value;    
    // CRIAR OPERACAO POR TIPO DE INGRESSO
    if(ingresso == 'pista'){
        // VALIDAR SE QTD COMPRADA É MENOR OU IGUAL A QTD DISPONIVEL        
        if(quantidadeIngressosComprados <= totalIngressosPista){            
            // SUBTRAIR A QTD DE INGRESSOS COMPRADOS DO TOTAL INICIAL DO TIPO DE INGRESSO SELECIONADO
            totalIngressosPista -= quantidadeIngressosComprados;
            // ALTERAR TEXTO DA QUANTIDADE DISPONIVEL DO TIPO DE INGRESSO SELECIONADO
            let qtdDisponivelPista = document.getElementById('qtd-pista');
            qtdDisponivelPista.innerHTML = totalIngressosPista;            
        // GERAR ALERT SE QTD COMPRADA > QTD DISPONIVEL
        }else {            
            alert('A quantidade de ingresso comprada é maior que a quantidade disponível para a Pista!')            
        }
    }else if(ingresso == 'inferior'){
        if(quantidadeIngressosComprados <= totalIngressosCadeiraInferior){                                
            totalIngressosCadeiraInferior -= quantidadeIngressosComprados;                
            let qtdDisponivelInferior = document.getElementById('qtd-inferior');
            qtdDisponivelInferior.innerHTML = totalIngressosCadeiraInferior;            
        }else {
            alert('A quantidade de ingresso comprada é maior que a quantidade disponível para Cadeira Inferior!')                
        }
    }else if(ingresso == 'superior'){
        if(quantidadeIngressosComprados <= totalIngressosCadeiraSuperior){                                
            totalIngressosCadeiraSuperior -= quantidadeIngressosComprados;                
            let qtdDisponivelSuperior = document.getElementById('qtd-superior');
            qtdDisponivelSuperior.innerHTML = totalIngressosCadeiraSuperior;            
        }else {
            alert('A quantidade de ingresso comprada é maior que a quantidade disponível para Cadeira Superior!')            
        }
    }
}