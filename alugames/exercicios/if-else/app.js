function calcularProbabilidadeAdocao() {
    let peso = document.getElementById('peso').value;
    let idade = document.getElementById('idade').value;

    let nota = 10;
    console.log(nota);
    if (peso > 20) {
        console.log(nota);
        nota -= 4;
        console.log(nota);
    } 
    if (peso > 10) {
        console.log(nota);
        nota -= 2;
        console.log(nota);
    }

    if (idade >= 14) {
        console.log(nota);
        nota -= 4;
        console.log(nota);
    }
    if (idade >= 8) {
        console.log(nota);
        nota -= 2;
        console.log(nota);
    }

    if(nota < 0){
        nota = 0;
    }

    let resultado = document.getElementById('resultado');
    console.log(nota);
    
    // return nota;
    
    resultado.value = nota;
    // alert(nota);
}