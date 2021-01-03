const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "L", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

module.exports = (length) => {
    let str = ""

    for (let i = 0; i < length; i++) {
        const upperCase = Math.floor(Math.random() * 100) >= 50
        const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)]
        str += (upperCase) ? letter.toUpperCase() : letter
    }

    return str;
}