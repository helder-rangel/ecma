let resulta = '';

for (let teste = 99; teste => 0;teste -= 2){
    let whiteSpace = teste % 10 == 1 ? '\n' : ' ';
    let value = teste < 10 ? '0'+teste : teste;
    resulta += value + whiteSpace;
}
console.log(resulta);