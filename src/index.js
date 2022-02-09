import 'bootstrap'
import './scss/style.scss'
import VigenereCipher from './js/vigenere-cipher'

const cipher = new VigenereCipher()

document.addEventListener('DOMContentLoaded', () => {
    const encrypt = document.querySelector('#encrypt')
    encrypt.addEventListener('click', (e) => {
        e.preventDefault()

        const plaintext = document.querySelector('#encrypt-plaintext').value;
        const keyword = document.querySelector('#keyword').value

        const ciphertext = cipher.encrypt(plaintext, keyword)
        document.querySelector('#encrypted-text').textContent = ciphertext 
    })

    const decrypt = document.querySelector('#decrypt')
    decrypt.addEventListener('click', (e) => {
        e.preventDefault()

        const ciphertext = document.querySelector('#decrypt-ciphertext').value;
        const keyword = document.querySelector('#keyword').value

        const plaintext = cipher.decrypt(ciphertext, keyword)
        document.querySelector('#decrypted-text').textContent = plaintext
    })
})