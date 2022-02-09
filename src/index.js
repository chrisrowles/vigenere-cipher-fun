import 'bootstrap'
import './scss/style.scss'
import VigenereCipher from './js/vigenere-cipher'

const cipher = new VigenereCipher()

document.addEventListener('DOMContentLoaded', () => {
    const keyword = document.querySelector('#keyword')
    const plaintext = document.querySelector('#encrypt-plaintext')
    const ciphertext = document.querySelector('#decrypt-ciphertext')

    const encrypted = document.querySelector('#encrypted-text')
    const decrypted = document.querySelector('#decrypted-text')

    const encrypt = document.querySelector('#encrypt')
    encrypt.addEventListener('click', (e) => {
        e.preventDefault()
        encrypted.value = cipher.encrypt(plaintext.value, keyword.value) 
    })

    const decrypt = document.querySelector('#decrypt')
    decrypt.addEventListener('click', (e) => {
        e.preventDefault()
        decrypted.value = cipher.decrypt(ciphertext.value, keyword.value)
    })

    keyword.addEventListener('input', () => {
        encrypted.value = cipher.encrypt(plaintext.value, keyword.value)
        decrypted.value = cipher.decrypt(ciphertext.value, keyword.value)
    })
    
    plaintext.addEventListener('input', (e) => encrypted.value = cipher.encrypt(e.target.value, keyword.value))
    ciphertext.addEventListener('input', (e) => decrypted.value = cipher.decrypt(e.target.value, keyword.value))
})