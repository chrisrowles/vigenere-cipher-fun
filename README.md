# vigenere.js

A javascript implementation of the [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

This isn't secure, so please don't rely on it for anything sensitive, it's just a learning exercise and a bit of fun...

## Getting started

1. Install
    ```sh
    npm install vigenere.js
    ```

2. Use
    ```js
    import { VigenereCipher } from "vigenere.js";

    const cipher = new VigenereCipher();

    const key = "lemon";
    const plaintext = "attack at dawn";

    const encrypted = cipher.encrypt(plaintext, key);
    const decrypted = cipher.decrypt(encrypted, key);

    console.log({
        key,
        plaintext,
        encrypted,
        decrypted,
    });
    ```
## LICENSE

[MIT](LICENSE)
