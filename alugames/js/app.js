// CONTAGEM DE JOGOS ALUGADOS
let quantidadeAlugados = 1;
// LISTA DE ALUGADOS
let listaAlugados = ['Takenoko'];
// FUNCAO PARA ALTERAR O STATUS DO JOGO
function alterarStatus(id) {      
    // SELECIONANDO A TAG LI DO JOGO           
    let gameClicado = document.getElementById(`game-${id}`);
    // SELECIONANDO A IMAGEM DO JOGO
    let imagem = gameClicado.querySelector('.dashboard__item__img'); // PROCURAR UM ELEMENTO COM UMA CLASSE ESPECIFICADA (.[classe]) DENTRO DO ID
    // SELECIONANDO O BOTAO DE ALUGAR/DEVOLVER
    let botao = gameClicado.querySelector('.dashboard__item__button');        
    // SELECIONANDO O NOME DO JOGO
    let nome = gameClicado.querySelector('.dashboard__item__name').textContent;    
    // LOGICA PARA ALTERAR O STATUS ATRAVES DA LISTA DE CLASSES DO ELEMENTO
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // CONFIRMACAO DE DEVOLUCAO
        let confirmarDevolucao = prompt('Deseja devolver o jogo (S ou N)?');
        if(confirmarDevolucao == 's' || confirmarDevolucao == 'S'){
        // REMOVENDO A CLASSE DA LISTA DE CLASSES
        imagem.classList.remove('dashboard__item__img--rented');
        // ALTERAR O TEXTO DO BOTAO
        botao.textContent = 'Alugar';
        // ALTERAR A COR DO BOTAO
        botao.classList.remove('dashboard__item__button--return');        
            // VERIFICAR LISTA DE JOGOS ALUGADOS
            if(listaAlugados.includes(nome)){
                // DECREMENTA JOGOS ALUGADOS
                quantidadeAlugados--;
                // ALTERA LISTA DE JOGOS            
                removeNaListaDeJogos(id);
                // IMPRIMIR JOGOS ALUGADOS
                imprimeJogosAlugados();
            }else{
                // INCREMENTA JOGOS ALUGADOS
                quantidadeAlugados++;            
                // ALTERA LISTA DE JOGOS
                adicionaNaListaDeJogos(id);
                // IMPRIMIR JOGOS ALUGADOS
                imprimeJogosAlugados();
            }
        }else {
            // RETORNA PARA A FUNCAO
            return;
        }    
    }else {
    // CASO NAO POSSUA, ADICIONE A CLASSE
    imagem.classList.add('dashboard__item__img--rented');
    // ALTERAR O TEXTO DO BOTAO
    botao.textContent = 'Devolver';
    // ALTERAR A COR DO BOTAO
    botao.classList.add('dashboard__item__button--return');                    
        // VERIFICAR LISTA DE JOGOS ALUGADOS
        if(listaAlugados.includes(nome)){
            // DECREMENTA JOGOS ALUGADOS
            quantidadeAlugados--;
            // ALTERA LISTA DE JOGOS            
            removeNaListaDeJogos(id);
            // IMPRIMIR JOGOS ALUGADOS
            imprimeJogosAlugados();
        }else{
            // INCREMENTA JOGOS ALUGADOS
            quantidadeAlugados++;            
            // ALTERA LISTA DE JOGOS
            adicionaNaListaDeJogos(id);
            // IMPRIMIR JOGOS ALUGADOS
            imprimeJogosAlugados();
        }
    }
}
// FUNCAO PARA IMPRIMIR QTD DE JOGOS ALUGADOS
function imprimeJogosAlugados() {    
    if(listaAlugados.length > 0){
        console.log(`Lista de jogos alugados = ${listaAlugados}`);
        alert(`Lista de jogos alugados = ${listaAlugados}`);
    }else{
        console.log('Lista de jogos alugados está vazia!');
        alert('Lista de jogos alugados está vazia!');
    }    
    console.log(`Quantidade de jogos alugados = ${quantidadeAlugados}`);
    alert(`Quantidade de jogos alugados = ${quantidadeAlugados}`);
}
function adicionaNaListaDeJogos(id) {    
    let gameClicado = document.getElementById(`game-${id}`);
    let nome = gameClicado.querySelector('.dashboard__item__name').textContent;    
    listaAlugados.push(nome);
}
function removeNaListaDeJogos(id) {    
    let gameClicado = document.getElementById(`game-${id}`);
    let nome = gameClicado.querySelector('.dashboard__item__name').textContent;
    let index = listaAlugados.indexOf(nome);
        if (index !== -1) {
            listaAlugados.splice(index, 1);
        }
}