function saque(valor) {
    let notas = [100,50,20,10,5,2,1]
    let result =[]

    for (let nota of notas){
        let qtde = parseInt(valor/nota)
        valor = valor%nota
        if(qtde)
            result.push([nota,qtde])
    }
    return result
}

console.log(saque(1420))