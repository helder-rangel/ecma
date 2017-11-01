let result = ''
for(let number = 99; number >=0; number--){
    whiteSpace = number % 10  ? ' ' : '\n'
    value = number < 10 ? '0' + number : number
    result += value + whiteSpace
}
console.log(result)