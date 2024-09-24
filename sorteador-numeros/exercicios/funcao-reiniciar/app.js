function calcular() {

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let valor = parseFloat(document.getElementById('valor').value);
  
    let total = quantidade * valor;
  
    if (quantidade >= 10 || valor >= 100) {
      total = total - (total / 100 * 5);
    }
  
    alert(`Valor total: ${total} `);
    reiniciar();
  }  
  
  function reiniciar() {
    // quantidade.value = '';
    // valor.value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('valor').value = '';
  }