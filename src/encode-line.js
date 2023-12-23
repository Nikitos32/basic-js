const {NotImplementedError} = require('../extensions/index.js');

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
    let amount = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            str = str.replace(str[i + 1], '');
            amount++;
            i--;
        }
        else {
            if (amount !== 1) {
                str = str.replace(str[i], amount + str[i])
                i++
                amount = 1;
            }
            else str = str.replace(str[i], str[i])
        }
    }
    return str;
}

encodeLine("abbcca")

module.exports = {
    encodeLine
};
