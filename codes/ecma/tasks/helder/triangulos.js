function triagulo(a,b,c) {
    if (a >= b + c || b >= a + c || c >= b + a)
        return 'não é triângulo'
    else
        switch (true) {
            case a === b && b === c:
                return 'Equilatero'
            case a != b && b != c && a != c:
                return 'Escaleno'
            default:
                return 'Isóceles'
        }
}
console.log(triagulo(3,2,4))