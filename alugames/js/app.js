function alterarStatus(id) {      
    // SELECIONANDO A TAG LI DO JOGO           
    let gameClicado = document.getElementById(`game-${id}`);
    // SELECIONANDO A IMAGEM DO JOGO
    let imagem = gameClicado.querySelector('.dashboard__item__img'); // PROCURAR UM ELEMENTO COM UMA CLASSE ESPECIFICADA (.[classe]) DENTRO DO ID
    // SELECIONANDO O BOTAO DE ALUGAR/DEVOLVER
    let botao = gameClicado.querySelector('.dashboard__item__button');        
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
        }else {
            return;
        }    
    }else {    
        
        // CASO NAO POSSUA, ADICIONE A CLASSE
        imagem.classList.add('dashboard__item__img--rented');
        // ALTERAR O TEXTO DO BOTAO
        botao.textContent = 'Devolver';
        // ALTERAR A COR DO BOTAO
        botao.classList.add('dashboard__item__button--return');        
    }
}        