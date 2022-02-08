import { alphabet, alphabet13, alphabetPShift } from './config.js'

const rot13 = (str) => {
    return str.replace(/[A-Z]/gi, (char) => alphabet13[alphabet.indexOf(char)])
}

const apos  = (str) => {
    return [...str].map((char) => (parseInt(char, 36) - 10) + alphabetPShift).filter((char) => char >= 0)
}

const posa = (num) => {
    let str = ''
    for (const n in num) {
        str += String.fromCharCode(parseInt(n) + 'A'.charCodeAt(0))
    }

    return str
}

const tabulaRecta = () => {
    const b = alphabet.slice(-26).split('')

    return b.map((n,m) => b.map((o,p,q,r=m) => alphabet[(q+p)%26].join("")).join("\n"))
}


const test = 'abc'
const positions = apos(test)
const encoded = rot13(test)

const posaTest = posa(positions)

console.log({positions, encoded, posaTest})
// console.log(tabulaRecta())