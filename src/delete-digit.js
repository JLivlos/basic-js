const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = (n.toString().split(''));
    let currentArr;
    let currentNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        let newArr = arr.concat();
        newArr.splice(i, 1);
        let number = newArr.reduce((acc, current) => acc + current, '');
        if (number > currentNumber) {
            currentNumber = +number;
            currentArr = newArr;
        };
    };
    return +(currentArr.join(''));
}

module.exports = {
    deleteDigit
};