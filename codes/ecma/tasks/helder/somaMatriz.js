function somaMatriz(a,b) {
    sum = []
    for ( var  row = 0; row < a.length; row++){
        let temp = []
        for (var col = 0; col < a[0].length; col++){//não entendi porque o indice é [0]
            temp[col] = a[row][col] + b[row][col]
        }
        sum.push(temp)
    }
    return sum
}
let a = [[3, 8], [4, 6]]
let b = [[4, 0], [1, -9]]
console.log(somaMatriz(a,b))

//a[0][0] + b[0][0] || a[0][1] + b[0][1] || a[1][0] + b[1][0] || a[1][1] + b[1][1]
//https://en.wikipedia.org/wiki/Matrix_(mathematics)#Addition.2C_scalar_multiplication_and_transposition