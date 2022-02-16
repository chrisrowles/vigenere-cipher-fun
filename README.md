# vigenere.js

A javascript implementation of the Vigenère cipher.

Read about how it works [here](https://rowles.ch/blog/1).
    
### DISCLAIMER
Obviously this isn't really secure, so please don't rely on it for anything sensitive, it's just a learning exercise and a bit of fun...

## Getting started

1. Install
    ```sh
    npm install vigenere.js
    ```

2. Use
    ```js
    const vigenere = require('vigenere.js')

    const key = 'lemon'
    const plaintext = 'attack at dawn'
    const ciphertext = ''

    const encrypted = vigenere.encrypt(plaintext, key)
    const decrypted = vigenere.decrypt(encrypted, key)

    console.log({ encrypted, decrypted })
    // { encrypted: 'LXFOPV!MH!OEIB', decrypted: 'ATTACK AT DAWN' }
    ```
## LICENSE

[MIT](LICENSE)
