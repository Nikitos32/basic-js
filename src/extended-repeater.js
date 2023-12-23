const {NotImplementedError} = require('../extensions/index.js');

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
    let additionString;
    let firstString;

    if (options.additionSeparator === undefined) {
        additionString = options.addition + '|';
        additionString = additionString.repeat(options.additionRepeatTimes - 1);
        additionString += options.addition;
    }
    else {
        additionString = options.addition + options.additionSeparator;
        additionString = additionString.repeat(options.additionRepeatTimes - 1);
        additionString += options.addition;
    }

    if (options.separator === undefined) {
        if (additionString === 'undefined') {
            firstString = str + '+';
            firstString = firstString.repeat(options.repeatTimes - 1);
            firstString += str;
        }
        else {
            firstString = str + additionString + '+';
            firstString = firstString.repeat(options.repeatTimes - 1);
            firstString += str + additionString;

        }
    }
    else {
        if (additionString === 'undefined') {
            firstString = str + options.separator;
            firstString = firstString.repeat(options.repeatTimes - 1);
            firstString += str;
        }
       else {
            firstString = str + additionString + options.separator;
            firstString = firstString.repeat(options.repeatTimes - 1);
            firstString += str + additionString;
        }
    }
    return firstString;
}

repeater('la', { repeatTimes: 3 })

module.exports = {
    repeater
};
