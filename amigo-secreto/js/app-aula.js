// VARIAVEIS
// ARRAY DE AMIGOS
let amigos = [];

// FUNCOES
function adicionar() {
    // RECUPERAR NOME DO AMIGO DIGITADO
    let amigo = document.getElementById('nome-amigo');
    // RECUPERAR A LISTA DE AMIGOS
    let lista = document.getElementById('lista-amigos');
    // VALIDAR SE O NOME ESTA VAZIO
    if(amigo.value == '') {
        // MOSTRA UMA MENSAGEM NA TELA
        alert('Informe o nome do amigo!')
        // RETORNA PRA QUEM CHAMOU A FUNCAO ADICIONAR
        return;
    } else {
        // SE O NOME JA EXISTE
        if(amigos.includes(amigo.value)){
        // MOSTRA UMA MENSAGEM NA TELA
        alert('Nome já existe!');
        // RETORNA PRA QUEM CHAMOU A FUNCAO ADICIONAR
        return;
    } else {
        // ADICIONAR AMIGOS NO ARRAY DE AMIGOS
        amigos.push(amigo.value);
    }    
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
    
}

function sortear() {
    // EMBARALHA LISTA DE AMIGOS
    embaralha(amigos);
    // RECUPERA LISTA DE SORTEIO
    let sorteio = document.getElementById('lista-sorteio');
    // ATUALIZA TEXTO DO CAMPO DA LISTA DE SORTEIO
    for(let i = 0; i < amigos.length; i++){
        // SE I FOR IGUAL AO ULTIMO ELEMENTO DA LISTA
        if(i == amigos.length - 1){
            // O ULTIMO NOME DA LISTA TIRA O PRIMEIRO
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -- > ' + amigos[0];
        } else {
            // O PRIMEIRO TIRA O SEGUNDO E ASSIM POR DIANTE ATE O FINAL DA LISTA
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -- > ' + amigos[i + 1] + '<br>';
        }        
    }
}

// https://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {    
    // LIMPA O ARRAY DE AMIGOS
    amigos = [];
    // LIMPA A LISTA DE AMIGOS
    document.getElementById('lista-amigos').innerHTML = '';
    // LIMPA O CAMPO SORTEIO
    document.getElementById('lista-sorteio').innerHTML = '';    
}