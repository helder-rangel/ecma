function uniq(array) {
    let result = []
    for (let value of array) {
        if(!result.includes(value))//no método include se o item faz parte do array ele retorna true; para o elemento encontrado vai retornar falso, como fica em relação a itens repetidos?
            result.push(value)
    }
    return result
}
console.log(uniq([1, 2, 1, 4, 1, 3]))