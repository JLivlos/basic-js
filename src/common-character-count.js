const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const min = s1.length - s2.length >= 0 ? Array.from(s2) : Array.from(s1);
    const max = s1.length - s2.length >= 0 ? Array.from(s1) : Array.from(s2);
    let result = 0;
    for (let i = 0; i < min.length; i++) {
        let index = max.indexOf(min[i]);
        if (index >= 0) {
            result += 1;
            max.splice(index, 1);
        }
    }
    return result;
}

module.exports = {
    getCommonCharacterCount
};