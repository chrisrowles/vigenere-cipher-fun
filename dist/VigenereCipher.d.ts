type TabulaRecta = Record<string, Record<string, string>>;
export declare class VigenereCipher {
    private tabulaRecta;
    constructor();
    /**
     * encrypt plaintext
     *
     * @param plaintext - the text to encrypt
     * @param keyword - the encryption key to use
     */
    encrypt(plaintext: string, keyword: string): string;
    /**
     * Function to decrypt ciphertext.
     *
     * @param ciphertext - the text to decrypt
     * @param keyword - the decryption key to use
     */
    decrypt(ciphertext: string, keyword: string): string;
    /**
     * Build the tabula recta
     */
    buildTabulaRecta(): TabulaRecta;
    /**
     * Build the schema for the tabula recta
     */
    buildSchema(): TabulaRecta;
    /**
     * Shift the array, moving elements in its head to its tail n times
     */
    shiftArray(arr: string[], num: number): string[];
    /**
     * Pad the keyword to the given limit
     */
    padKeyword(keyword: string, limit: number): string;
    /**
     * Fetch a tabula recta column index given its row and value within that row.
     */
    getOriginalPosition(row: Record<string, string>, letter: string): string;
}
export {};
