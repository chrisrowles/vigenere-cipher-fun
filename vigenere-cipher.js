const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

class VigenereCipher
{
    constructor()
    {
        this.tabulaRecta = this.buildTabulaRecta()
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
        const padded = this.padKeyword(keyword, plaintext.length)
        
        plaintext.split('').forEach((letter, index) => {
            ciphertext += this.tabulaRecta[padded[index]][letter]
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
        keyword = this.padKeyword(keyword, ciphertext.length)
        
        ciphertext.split('').forEach((letter, i) => {
            plaintext += this.getOriginalPosition(this.tabulaRecta[keyword[i]], letter)
        })
        
        return plaintext
    }
    
    /**
    * Build the tabula recta
    *
    * @return {object}
    */
    buildTabulaRecta()
    {
        const table = this.buildSchema()

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
    buildSchema()
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
    * Pad the keyword to the given limit.
    *
    * @param {string} keyword - Keyword to be verified and padded
    * @param {string} limit - Maximum length the keyword is allowed to be
    * @return {string}
    */
    padKeyword(keyword, limit) {
        let padded = keyword
        
        while (padded.length < limit) {
            padded += padded
        }
        
        if (padded.length > limit) {
            padded = padded.substring(0, limit)
        }
        
        return padded
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