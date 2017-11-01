function range(length, last, step) {
    let begin = last ? length : 0
    let end = last || length
    ste = step || 1
    let result = []

    for (let number = begin; number < end; number += step){
        result.push(number)
        }

return result
}
console.log(range(10))

function range(length, last, step) {
    let begin = last ? length : 0//o início
    let end = last || length
    step = step || 1
    let result = []

    for (let number = begin; number < end; number += step) {
        result.push(number)
    }

    return result
}
console.log(range(2,16))