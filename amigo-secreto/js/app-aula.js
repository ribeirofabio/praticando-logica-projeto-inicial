function adicionar() {
    // RECUPERAR NOME DO AMIGO DIGITADO
    let amigo = document.getElementById('nome-amigo');
    // RECUPERAR A LISTA DE AMIGOS
    let lista = document.getElementById('lista-amigos');
    // CONDICOES
    // SE A LISTA ESTIVER VAZIA
    if(lista.textContent == '') {
        // INCLUIR NA LISTA DE AMIGOS
        lista.textContent = amigo.value;
    } else{
        // INCLUIR NA LISTA DE AMIGO ES CONCATENANDO
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    // LIMPA O CAMPO NOME DO AMIGO
    amigo.value = '';
}