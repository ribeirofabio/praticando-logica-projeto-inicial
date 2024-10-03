// calcularCustoViagem();

function calcularCustoViagem(distancia, eficiencia, precoGasolina, velocidadeMedia) {
    // codigo do calculo aqui    
    let tempoViagem = distancia / velocidadeMedia;
    let consumoCombustivel = distancia / eficiencia;
    let custoTotal = consumoCombustivel * precoGasolina;
    return custoTotal;
}