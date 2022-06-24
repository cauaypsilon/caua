function delta(a, b, c){
    const resultado = b**2 - 4*a*c
    return resultado
}

function bhaskara(a, b, c) {
    let x1 = 'inexistente'
    let x2 = 'inexistente'
    const valorDelta = delta(a, b, c)
    if (valorDelta == 0)
        x1 = (-b + Math.sqrt(valorDelta)) / (2 * a)
    else if (valorDelta > 0){
        x1 = (-b + Math.sqrt(valorDelta)) / (2*a)
        x2 = (-b - Math.sqrt(valorDelta)) / (2*a)
    }
    return {x1: x1,x2: x2}
}

function handleBtncalcular(){
    const a = parseInt(document.getElementById('ValorA').value)
    const b = parseInt(document.getElementById('ValorB').value)
    const c = parseInt(document.getElementById('ValorC').value)
    const resultado = bhaskara(a,b,c)
    document.getElementById('resultadoX1').innerHTML = 'x1:' + resultado.x1
    document.getElementById('resultadoX2').innerHTML = 'x2:' + resultado.x2
}

document.getElementById('btnCalcular').addEventListener('click', handleBtncalcular)