function sum(operand1,operand2) {
    return operand1 + operand2
}
console.log('soma com funcao:'+sum(5,9))
//operador seta
let semnome = (operand1,operand2) => operand1 + operand2
console.log('soma com funcao anonima: '+semnome(2,4))

//area do círculo
function areaDoCirculo(raio) {
    return 3.14 * (raio * raio)
}
console.log('raio com funcao comum: '+areaDoCirculo(4))

let tamanho = (raio) => 3.14 * (raio * raio)
let raio = 30
console.log('raio com arrow function: '+tamanho(raio).toFixed(2))
///calculadora
let resultados = 0
function calc(operando1,operando2,operador) {
    switch (operador){
        case '+':
            resultados = parseInt(operando1) + parseInt(operando2)
            break
        case '-':
            resultados = operando1 - operando2
            break
        case '*':
            resultados = operando1 * operando2
            break
        case '/':
            resultados = operando1 / operando2
            break
        default:
            console.log('valor inválido')
    }
    return resultados
}
console.log('calculadora: '+calc(9.5,2,'/'))

//fatorial iterativo
function factoria(n){
    let f = n
    if(n==0) {
        f++
    }
        while (f > 1) {
            f *= --f
        }
        return f
}
let n = 5
console.log('Faotrial de; '+factoria(5))
//fatorial recursivo
let num= 8
function fator(num){
    return num == 0 ? 1 : factor(num -1)
    }
console.log('Fatorial recursivo: '+fator(9))
//triangulo

function triagulo(a,b,c) {
    if (a >= b + c || b >= a + c || c >= b + a)
        return 'não é triângulo'
    else
        switch (true) {
            case a === b && b === c:
                return 'Equilatero'
            case a != b && b != c && a != c:
                return 'Escaleno'
            default:
                return 'Isóceles'
        }
}
console.log(triagulo(2,2,2))