
function calcular() {
    
    let preco = parseFloat(document.getElementById('preco').value) || 0; // Se estiver vazio, considera 0
    let quantidade = parseInt(document.getElementById('quantidade').value) || 0; // Se estiver vazio, considera 0

    
    let total = preco * quantidade;

    document.getElementById('total').innerText = 'Total: R$ ' + total.toFixed(2);
}

calcular();
       
       