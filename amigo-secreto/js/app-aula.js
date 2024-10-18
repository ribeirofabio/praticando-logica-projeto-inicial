// VARIAVEIS
// ARRAY DE AMIGOS
let amigos = [];

// FUNCOES
function adicionar() {
    // RECUPERAR NOME DO AMIGO DIGITADO
    let amigo = document.getElementById('nome-amigo');
    // RECUPERAR A LISTA DE AMIGOS
    let lista = document.getElementById('lista-amigos');
    // ADICIONAR AMIGOS NO ARRAY DE AMIGOS
    amigos.push(amigo.value);
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

function sortear() {
    // EMBARALHAR LISTA DE AMIGOS
    embaralha(amigos);
    
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