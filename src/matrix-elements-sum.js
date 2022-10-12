const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    if (matrix.length <= 1) return 0;
    let result = matrix[0].reduce((sum, current) => sum + current, 0);
    let indexes = [];

    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) indexes.push(i)
    }

    for (let i = 0; i < matrix[1].length; i++) {
        if (matrix[1][i] === 0) indexes.push(i);
        if (!(indexes.includes(i))) result += matrix[1][i];
    }

    for (let i = 0; i < matrix[2].length; i++) {
        if (matrix[2][i] === 0) indexes.push(i);
        if (!(indexes.includes(i))) result += matrix[2][i];
    }

    return result;
}

module.exports = {
    getMatrixElementsSum
};