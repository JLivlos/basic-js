const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    if (domains.length === 0) return {};
    let arr = [];
    for (let i = 0; i < domains.length; i++) {
        arr.push(domains[i].split('.').reverse())
    }
    arr.sort((a, b) => b.length - a.length)

    let result = {};

    let i = 1;
    while (i <= arr[0].length) {
        result[`.${arr[0][0]}`] = 1;
        for (let i = 1; i < arr.length; i++) {
            if (arr[1].includes(arr[0][0])) result[`.${arr[0][0]}`] += 1;
        };
        arr.forEach((elem) => {
            elem.unshift(`${elem[0]}.${elem[1]}`);
            elem.splice(1, 2)
        })
        i++;
    }
    result[[`.${arr[0][0]}`]] = 1;
    return result;
}

module.exports = {
    getDNSStats
};