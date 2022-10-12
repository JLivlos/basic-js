const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

    if (str === '') return str;
    let result = '';
    let count = 1;
    let value = str[0];
    for (let i = 1; i < str.length; i++) {
        var current = str[i];
        if (current == value) {
            count += 1;
        } else {
            result += count === 1 ? value : count + value;
            count = 1;
            value = current;
        }
    };
    return result += count === 1 ? value : count + value;
}

module.exports = {
    encodeLine
};