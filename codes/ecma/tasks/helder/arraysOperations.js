//sum
function sum(array){
    let sum = 0
    for (let value of array){
        sum+= value
    }
    return sum

}
let array =[3,6,9]
console.log(sum(array))

//multiplicação
function multiplica(array) {
    let multiplica = 1
    for (let value of array){
        multiplica *= value
    }
    return multiplica
}
console.log(multiplica(array))
//soma impares
function somaImpar(array) {
    let somaImpar = 0
    for (let value of array){
        if(value % 2 )
            somaImpar += value
    }
    return somaImpar
}
console.log(somaImpar(array))
