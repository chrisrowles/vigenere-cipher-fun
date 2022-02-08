const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

class VigenereCipher
{
    constructor()
    {
        this.tabulaRecta = this.build()
    }
    
    /**
    * encrypt plaintext
    *
    * @param {string} plaintext - plaintext to be encrypted
    * @param {string} keyword - Keyword to be used for encryption
    * @return {string}
    */
    encrypt(plaintext, keyword)
    {
        let ciphertext = ''
        const treated = this.treat(keyword, plaintext.length)
        
        plaintext.split('').forEach((letter, index) => {
            ciphertext += this.tabulaRecta[treated[index]][letter]
        })
        
        return ciphertext
    }
    
    /**
    * Function to decrypt ciphertext.
    *
    * @param {string} ciphertext - ciphertext to be decrypted
    * @param {string} keyword - Keyword to be used for decryption
    * @return {string}
    */
    decrypt(ciphertext, keyword)
    {
        let plaintext = ''
        const treatedKeyword = this.treat(keyword, ciphertext.length)
        
        ciphertext.split('').forEach((letter, index) => {
            plaintext += this.getOriginalPosition(this.tabulaRecta[treatedKeyword[index]], letter)
        })
        
        return plaintext
    }
    
    /**
    * Build the tabula recta
    *
    * @return {object}
    */
    build()
    {
        const table = this.schema()

        for (const [i, row] of alphabet.entries()) {
            const shifted = this.shiftArray(alphabet, i)
            for (const [j, column] of alphabet.entries()) {
                table[row][column] = shifted[j]
            }
        }
        
        return table
    }
    
    /**
    * Build the schema for the tabula recta
    *
    * @return {object}
    */
    schema()
    {
        const column = {}

        for (const letter of alphabet) {
            const row = {}

            for (const shift of alphabet) {
                row[shift] = ''
            }

            column[letter] = row
        }
        
        return column
    }
    
    /**
    * Shift the array, moving elements in its head to its tail n times
    *
    * @param {array} arr - Array to be used for shifting
    * @param {number} num - Number of shifts applied
    * @return {array}
    */
    shiftArray(arr, num) {
        const copy = [...arr]
        
        for (let i = 0; i < num; i += 1) {
            copy.push(copy.shift())
        }
        
        return copy
    }
    
    /**
    * Fetch a keyword within the given limit.
    *
    * @param {string} keyword - Keyword to be verified and treated
    * @param {string} limit - Maximum length the keyword is allowed to be
    * @return {string}
    */
    treat(keyword, limit) {
        let treated = keyword
        
        while (treated.length < limit) {
            treated += treated
        }
        
        if (treated.length > limit) {
            treated = treated.substring(0, limit)
        }
        
        return treated
    }
    
    /**
    * Fetch a tabula recta column index given its row and value within that row.
    *
    * @param {string} row - Single row from the tabula recta
    * @param {string} letter - Single letter within the given row
    * @return {string}
    */
    getOriginalPosition(row, letter) {
        return Object.keys(row).find(key => row[key] === letter)
    }
}

export default new VigenereCipher()