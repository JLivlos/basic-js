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
    constructor(mode) {
        this.mode = mode;
    }
    encrypt(m, k) {
        if (m === undefined || k === undefined) throw new Error('Incorrect arguments!');
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let kf = Math.ceil(m.length / k.length);
        let key = (k.repeat(kf)).toUpperCase();
        let message = m.toUpperCase();

        let current = [];
        for (let i = 0; i < message.length; i++) {
            a.includes(message[i]) ? current.push(a.indexOf(message[i], 0)) : current.push(message[i]);
        };

        let keys = [];
        for (let i = 0; i < key.length; i++) {
            keys.push(a.indexOf(key[i], 0));
        };

        let sums = [];
        for (let i = 0, j = 0; i < message.length; i++, j++) {
            if (a.includes(message[i])) {
                sums.push((current[i] + keys[j]) % 26);
            } else {
                sums.push(message[i]);
                j--;

            };
        };
        let encryptedMessage = [];
        for (let i = 0; i < sums.length; i++) {
            typeof sums[i] === 'number' ? encryptedMessage.push(a[sums[i]]) : encryptedMessage.push(message[i]);
        };

        return this.mode === false ? encryptedMessage.reverse().join('') : encryptedMessage.join('');
    }
    decrypt(encryptedMessage, k) {
        if (encryptedMessage === undefined || k === undefined) throw new Error('Incorrect arguments!')
        const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let kf = Math.ceil(encryptedMessage.length / k.length);
        let key = (k.repeat(kf)).toUpperCase();
        let message = encryptedMessage;

        let current = [];
        for (let i = 0; i < message.length; i++) {
            a.includes(message[i]) ? current.push(a.indexOf(message[i], 0)) : current.push(message[i]);
        };

        let keys = [];
        for (let i = 0; i < key.length; i++) {
            keys.push(a.indexOf(key[i], 0));
        };

        let idx = [];
        for (let i = 0, j = 0; i < message.length; i++, j++) {
            if (a.includes(message[i])) {
                current[i] - keys[j] < 0 ? idx.push(current[i] - keys[j] + 26) : idx.push(current[i] - keys[j]);
            } else {
                idx.push(message[i]);
                j--;
            };
        };

        let decryptedMessage = [];
        for (let i = 0; i < idx.length; i++) {
            typeof idx[i] === 'number' ? decryptedMessage.push(a[idx[i]]) : decryptedMessage.push(message[i]);
        };
        return this.mode === false ? decryptedMessage.reverse().join('') : decryptedMessage.join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};