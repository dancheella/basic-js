const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = "";
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      let currentCharCode = message.charCodeAt(i);

      if (currentCharCode >= 65 && currentCharCode <= 90) {
        let keyCharCode = key.charCodeAt(j % key.length);
        let shift = keyCharCode - 65;
        let newCharCode = ((currentCharCode - 65 + shift) % 26) + 65;
        encryptedMessage += String.fromCharCode(newCharCode);
        j++;
      } else {
        encryptedMessage += message.charAt(i);
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = "";
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let currentCharCode = encryptedMessage.charCodeAt(i);

      if (currentCharCode >= 65 && currentCharCode <= 90) {
        let keyCharCode = key.charCodeAt(j % key.length);
        let shift = keyCharCode - 65;
        let newCharCode = ((currentCharCode - 65 - shift + 26) % 26) + 65;
        decryptedMessage += String.fromCharCode(newCharCode);
        j++;
      } else {
        decryptedMessage += encryptedMessage.charAt(i);
      }
    }

    return this.direct ? decryptedMessage : decryptedMessage.split("").reverse().join("");
  }
}


module.exports = {
  VigenereCipheringMachine
};
