const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

    newArr = arr.slice();
    if (newArr[0] === '--discard-prev' || newArr[0] === '--double-prev') newArr.splice(0, 1);
    if (newArr[newArr.length - 1] === '--discard-next' || newArr[newArr.length - 1] === '--double-next') newArr.splice(newArr.length - 1, 1);


    for (let i = 0; i < arr.length; i++) {
        if (newArr[i] === '--discard-next' && i != newArr.length - 1) {
            newArr[i + 2] === '--double-prev' || newArr[i + 2] === '--discard-prev' ? newArr.splice(i + 1, 2) : newArr.splice(i + 1, 1);
            newArr.splice(i, 1);
        }
        if (newArr[i] === '--discard-prev' && i != 0) {
            newArr.splice(i - 1, 1);
            newArr.splice(i - 1, 1);
        }
        if (newArr[i] === '--double-next' && i != newArr.length - 1) {
            newArr.splice(i + 1, 0, newArr[i + 1]);
            newArr.splice(i, 1);
        }
        if (newArr[i] === '--double-prev' && i != 0) {
            newArr.splice(i, 1);
            newArr.splice(i, 0, newArr[i - 1]);
        }
    }

    return newArr;
}


module.exports = {
    transform
};