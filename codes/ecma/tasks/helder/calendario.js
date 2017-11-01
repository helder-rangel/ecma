//inicioSemana 0(DOM) 1(SEG) 2(TER) 3(QUA) 4(QUI) 5(SEX) 6(SAT)
//fimMes dia 28...31
function calendario(inicioSemana,fimMes) {
    let resultado = 'DOM SEG TER QUA QUI SEX SAB\n'

        for(let vezes=0; vezes < inicioSemana; vezes++){
            resultado += '    '
        }
        for(let dia = 1; dia <=fimMes; dia++){
            resultado += (dia < 10) ? ` 0${dia}` : ` ${dia}`
            if(dia == fimMes)
                return resultado
            resultado += (dia + inicioSemana) % 7 == 0 ? '\n' : '.'
        }
    }
    console.log(calendario(0,30))

/** calendar
 * beginWeek: 0..6 - 0(DOM), 1(SEG), 2(TER), 3(QUA), 4(QUI), 5(SEX), 6(SAB)
 * endDay: 28..31
 */
function calendar(beginWeek, endDay) {
    let result = 'DOM SEG TER QUA QUI SEX SAB\n'

    for(let times=0; times < beginWeek; times++){
        result += '    '
    }

    for(let day = 1; day <= endDay; day++){
        result += (day < 10) ? ` 0${day}` : ` ${day}`
        if(day == endDay)
            return result
        result += (day+beginWeek) % 7 == 0 ? '\n' : ' '
    }

}
console.log(calendar(0,30))