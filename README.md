# vigenere.js

A basic implementation of the [Vigenère cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher). This isn't secure, so please don't rely on it for anything sensitive, it's just an educational exercise.

## Getting started

1. Install
    ```sh
    npm install vigenere.js
    ```

2. Use
    ```js
    import { VigenereCipher } from "vigenere.js";

    const cipher = new VigenereCipher();

    const key = "LEMON";
    const plaintext = "ATTACK AT DAWN";

    const encrypted = cipher.encrypt(plaintext, key);
    const decrypted = cipher.decrypt(encrypted, key);

    console.log({
    key,        // LEMONLEMONLEMO
    plaintext,  // ATTACK AT DAWN
    encrypted,  // LXFOPVКMHКOEIB
    decrypted,  // ATTACK AT DAWN
    });
    ```


## How it works

The Vigenère Cipher is a method of encrypting alphabetic text where each letter of the plaintext is encoded with a different [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher), whose increment is determined by the corresponding letter of another text, the [key](https://en.wikipedia.org/wiki/Key_(cryptography)).

For example, if the plaintext is "ATTACK AT DAWN", and the key is "LEMON", then:

1. The key is repeated to match the length of the plaintext, which makes the key "LEMONLEMONLE".

2. The first letter `A` of the plaintext is shifted by 11 positions in the alphabet (because the first letter `L` of the key is the 11th letter of the alphabet counting from 0), yielding `L`.

3. The second letter `T` is shifted by 4 (because the second letter `E` of the key means 4), yielding `X`.

4. The third letter `T` is shifted by 12 (because the third letter `M` of the key means 12), yielding `F`, with wrap-around.

The Vigenère cipher is therefore a special case of a [polyalphabetic substitution](https://en.wikipedia.org/wiki/Polyalphabetic_cipher).

### More Detail

In a Caesar cipher, each letter of the alphabet is shifted along some number of places. For example, in a Caesar cipher of shift-3, `A` would become `D`, `B` would become `E`, `Y` would become `B` and so on.

The Vigenère cipher has several Caesar ciphers in sequence with different shift values, to encrypt, a table of alphabets can be used, termed a tabula recta, Vigenère square or Vigenère table. It has the alphabet written out 26 times in different rows, each alphabet shifted cyclically to the left compared to the previous alphabet, corresponding to the 26 possible Caesar ciphers.

![tabula recta](https://i.imgur.com/upo7dHm.png)

At different points in the encryption process, the cipher uses a different alphabet from one of the rows. The alphabet used at each point depends on a repeating keyword.


## LICENSE

[MIT](LICENSE)
