const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    if (names.length <= 1) return names;
    let set = Array.from(new Set(names));

    set.forEach(elem => {
        let count = 0;
        for (let i = 0; i < names.length; i++) {
            if (elem === names[i]) {
                if (count > 0) {
                    names.splice(i, 1, `${elem}(${count})`)
                }
                count += 1;
            }
        }
    })
    return names;
}

module.exports = {
    renameFiles
};