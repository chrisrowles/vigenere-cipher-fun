import cipher from './vigenere-cipher.js'


function encrypt() {
    const plaintext = 'HELLOWORLD'
    const keyword = 'LEMON'
    const expected = 'SIXZBHSDZQ'
    const result = cipher.encrypt(plaintext, keyword)

    console.log({plaintext, result, expected})
}


function decrypt() {
    const ciphertext = 'SIXZBHSDZQ'
    const keyword = 'LEMON'
    const expected = 'HELLOWORLD'
    const result = cipher.decrypt(ciphertext, keyword)

    console.log({ciphertext, result, expected})
}

encrypt()
decrypt()