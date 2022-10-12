const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    str += '';
    if (!options.repeatTimes) options.repeatTimes = 1;
    if (!options.separator) options.separator = '+';
    if (!options.addition && typeof options.addition != 'boolean' && typeof options.addition != 'object') options.addition = '';
    if (options.addition) options.addition;
    if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
    if (!options.additionSeparator) options.additionSeparator = '|';


    let addItem = `${str + options.addition}`;
    for (let i = 1; i < options.additionRepeatTimes; i++) {
        addItem += options.additionSeparator + options.addition;
    }

    let result = `${addItem}`;
    if (options.repeatTimes === 1) {
        return result;
    } else {
        for (let i = 1; i < options.repeatTimes; i++) {
            result += options.separator + addItem;
        }
    }
    return result;
}

module.exports = {
    repeater
};