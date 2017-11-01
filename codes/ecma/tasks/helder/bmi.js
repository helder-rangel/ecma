let peso = 82
let altura = 1.89
let result
let bmi = peso / (altura * altura)
switch (true) {
    case bmi <= 18.5:
        result = "Abaixo do Peso"
        break
    case bmi > 18.5 && bmi <= 24.9:
        result = "Peso Normal"
        break
    case bmi >= 25 && bmi <= 29.9:
        result = "Sobrepeso"
        break
    case bmi > 29.9:
        result = "Obeso"
}
console.log('BMI: ' + bmi + '\nResult: ' + result)
