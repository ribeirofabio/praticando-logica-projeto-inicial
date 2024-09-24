function alterarStatus(id) {      
    // SELECIONANDO A TAG LI DO JOGO           
    let gameClicado = document.getElementById(`game-${id}`);
    // SELECIONANDO A IMAGEM DO JOGO
    let imagem = gameClicado.querySelector('.dashboard__item__img'); // PROCURAR UM ELEMENTO COM UMA CLASSE ESPECIFICADA (.[classe]) DENTRO DO ID
    // SELECIONANDO O BOTAO DE ALUGAR/DEVOLVER
    let botao = gameClicado.querySelector('.dashboard__item__button');
    // TESTANDO: MOSTRAR O NOME DO JOGO CLICADO
    let nomeGame = gameClicado.querySelector('.dashboard__item__name');    
    alert(nomeGame.textContent);
}        