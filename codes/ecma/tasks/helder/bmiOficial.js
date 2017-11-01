let weight = 82
let height = 1.89
let result
let bmi = weight / (height * height)

switch (true) {
    case bmi < 18.5:
        result = "Underweight"
        break
    case bmi >= 18.5 && bmi <= 24.9:
        result = "Normal weight"
        break
    case bmi >= 25 && bmi <= 29.9:
        result = "Overweight"
        break
    default:
        result = "Obesity"
}

console.log('BMI: '+bmi+'\nResult: '+result)