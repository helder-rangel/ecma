function primo(num) {
    for(let number = 1 ;number<=num; number++ ) {
        var numPri = 0
        if (num % number == 0) {
            numPri++
        }
    }
         if (numPri <= 2){
             var classi = 'Primo'
         }
        else {
             classi = 'Não é primo'
         }
    return classi
}
console.log(primo(8))//nao funcionoufuncionou