function toRoman(numero) {
    algarismos = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]

    let result = []

    for (let romano of algarismos) {
        let qtde = parseInt(numero/romano[0])
        numero = numero%romano[0]
        if(qtde)
            result.push(romano[1].repeat(qtde))
    }

    return result.join('')
}
var numero = 1954
console.log(`${numero}: `+toRoman(1954))