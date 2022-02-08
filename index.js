const map   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const map13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
const aposN = 4

const rot13 = (str) => {
    return str.replace(/[A-Z]/gi, (char) => map13[map.indexOf(char)])
}

const apos  = (str) => {
    return [...str].map((char) => (parseInt(char, 36) - 10) + 1).filter((char) => char >= 0)
}

const posa = (num) => {
    let str = ''
    for (const n in num) {
        str += String.fromCharCode(parseInt(n) + 'A'.charCodeAt(0))
    }

    return str
}


const test = 'abc'
const positions = apos(test)
const encoded = rot13(test)

const posaTest = posa(positions)

console.log({positions, encoded, posaTest})