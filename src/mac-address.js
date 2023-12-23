const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  let string = inputString.split('-')
  let regex = /([G-Z])/
  for (let i = 0; i < string.length; i++){
    if(string[i].match(regex)){
      return false
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
