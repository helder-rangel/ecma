Array.prototype.rotate = function(n) {
    return this.slice(n, this.length).concat(this.slice(0, n));
}

module.exports = class Cipher {

  rot(str, rotate) {
    let inputChars = 'abcdefghijklmnopqrstuvwxyz'.split('')

    let outputChars = inputChars.rotate(rotate)

    let index = char => inputChars.indexOf(char.toLowerCase())

    let translate = char => index(char) > -1 ? outputChars[index(char)] : char

    let isUpperCase = char => char === char.toUpperCase()

    let adjustCase = (char, index) => isUpperCase(str[index]) ? char.toUpperCase() : char

    let cipher = (char, index) => adjustCase(translate(char), index)

    return str.split('').map(cipher).join('')
 }

}
