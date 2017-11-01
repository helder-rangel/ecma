let salary = 0
let base = 3000.00
switch (true){
    case base <= 1903.98:
        salary = base
        break
    case base >= 1903.99 && base < 2826.65:
        salary = base - (base * 0.075)
        break
    case base >= 2926.66 && base <=3751.05:
        salary = base -(base *0.15 )
        break
    case base >= 3751.06 & base <= 4664.68:
        salary = base - (base * 0.225)
        break
    default:
        salary = base -(base * 0.275)
}
console.log('Salary: ' + salary)
