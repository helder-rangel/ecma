function fibonacci(number){
    let a = 0
    let b = 1
    let temp = 1

    if(number > 1)
        while (number > 2){
            temp = a + b
            a = b
            b = temp

            number--
        }
    else if(number == 1)
        return 0
    else
        return undefined

    return temp
}
console.log('fibonaci number: '+fibonacci(10))

function fibonacci1(number){
    let a = 0
    let b = 1
    let result = `${a}, ${b}`
    let temp

    if(number > 1)
        while (number > 2){
            temp = a + b
            a = b
            b = temp

            number--
            result += `, ${temp}`
        }
    else if(number == 1)
        return '0'
    else
        return ''

    return result
}
console.log(fibonacci1(10))

