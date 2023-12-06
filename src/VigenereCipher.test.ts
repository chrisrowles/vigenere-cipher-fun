import { VigenereCipher } from './VigenereCipher';

describe('VigenereCipher', () => {
  let vigenereCipher: VigenereCipher;

  beforeEach(() => {
    vigenereCipher = new VigenereCipher();
  });

  it('should encrypt and decrypt correctly', () => {
    const plaintext = 'HELLO WORLD';
    const keyword = 'KEY';

    // Encrypt
    const encryptedText = vigenereCipher.encrypt(plaintext, keyword);
    expect(encryptedText).toBe('RIJVS!GSPVH');

    // Decrypt
    const decryptedText = vigenereCipher.decrypt(encryptedText, keyword);
    expect(decryptedText).toBe(plaintext);
  });

  it('should handle spaces in the plaintext', () => {
    const plaintext = 'HELLO WORLD';
    const keyword = 'KEY';

    // Encrypt
    const encryptedText = vigenereCipher.encrypt(plaintext, keyword);
    expect(encryptedText).toBe('RIJVS!GSPVH');
  });

  it('should handle different keywords', () => {
    const plaintext = 'HELLO WORLD';
    const keyword1 = 'KEYAA';
    const keyword2 = 'KEYAB';

    // Encrypt with different keywords
    const encryptedText1 = vigenereCipher.encrypt(plaintext, keyword1);
    const encryptedText2 = vigenereCipher.encrypt(plaintext, keyword2);

    expect(encryptedText1).not.toBe(encryptedText2);

    // Decrypt with different keywords
    const decryptedText1 = vigenereCipher.decrypt(encryptedText1, keyword1);
    const decryptedText2 = vigenereCipher.decrypt(encryptedText2, keyword2);

    expect(decryptedText1).toBe(plaintext);
    expect(decryptedText2).toBe(plaintext);
  });
});
