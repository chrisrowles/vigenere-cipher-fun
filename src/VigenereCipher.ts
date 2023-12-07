const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type TabulaRecta = Record<string, Record<string, string>>;

export class VigenereCipher {
  private tabulaRecta: TabulaRecta;

  constructor() {
    this.tabulaRecta = this.buildTabulaRecta();
  }

  /**
   * encrypt plaintext
   *
   * @param plaintext - the text to encrypt
   * @param keyword - the encryption key to use
   */
  encrypt(plaintext: string, keyword: string): string {
    let ciphertext = '';
    plaintext = plaintext.toUpperCase();
    const padded = this.padKeyword(keyword, plaintext.length);

    for (const [i, letter] of plaintext.split('').entries()) {
      if (letter === ' ') {
        ciphertext += 'К';
      } else {
        ciphertext += this.tabulaRecta[padded[i]][letter];
      }
    }

    return ciphertext;
  }

  /**
   * Function to decrypt ciphertext.
   *
   * @param ciphertext - the text to decrypt
   * @param keyword - the decryption key to use
   */
  decrypt(ciphertext: string, keyword: string): string {
    let plaintext = '';
    ciphertext = ciphertext.toUpperCase();
    keyword = this.padKeyword(keyword, ciphertext.length);

    const split = ciphertext.split('');
    for (const [i, letter] of split.entries()) {
      if (letter === 'К') {
        plaintext += ' ';
      } else {
        plaintext += this.getOriginalPosition(
          this.tabulaRecta[keyword[i]],
          letter,
        );
      }
    }

    return plaintext;
  }

  /**
   * Build the tabula recta
   */
  buildTabulaRecta(): TabulaRecta {
    const table = this.buildSchema();

    for (const [i, row] of alphabet.entries()) {
      const shifted = this.shiftArray(alphabet, i);
      for (const [j, column] of alphabet.entries()) {
        table[row][column] = shifted[j];
      }
    }

    return table;
  }

  /**
   * Build the schema for the tabula recta
   */
  buildSchema(): TabulaRecta {
    const column: Record<string, Record<string, string>> = {};

    for (const letter of alphabet) {
      const row: Record<string, string> = {};

      for (const shift of alphabet) {
        row[shift] = '';
      }

      column[letter] = row;
    }

    return column;
  }

  /**
   * Shift the array, moving elements in its head to its tail n times
   */
  shiftArray(arr: string[], num: number): string[] {
    const copy = [...arr];

    for (let i = 0; i < num; i += 1) {
      copy.push(copy.shift() as string);
    }

    return copy;
  }

  /**
   * Pad the keyword to the given limit
   */
  padKeyword(keyword: string, limit: number) {
    let padded = keyword.toUpperCase();

    while (padded.length < limit) {
      padded += padded;
    }

    if (padded.length > limit) {
      padded = padded.substring(0, limit);
    }

    return padded;
  }

  /**
   * Fetch a tabula recta column index given its row and value within that row.
   */
  getOriginalPosition(row: Record<string, string>, letter: string): string {
    return Object.keys(row).find((key) => row[key] === letter) as string;
  }
}
