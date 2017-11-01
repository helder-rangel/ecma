function zip(...arrays) {
    let resultado = []
    for (let index = 0; index < arrays.length; index++){
        let values = []
        for (let array = 0; array < arrays.length; array++ ){
            values.push(arrays[array][index])
          resultado.push(values)
        }
    }
    return resultado
}
console.log(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]))

function zip(...arrays) {
    let result = []
    for (let index = 0; index < arrays.length; index++) {
        let values = []
        for (let array = 0; array < arrays.length; array++)
            values.push(arrays[array][index])
        result.push(values)
    }
    return result
}
//console.log(zip(['moe', 'larry'], [30, 40]))