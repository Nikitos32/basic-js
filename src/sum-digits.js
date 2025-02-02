const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let count = 0;
  let sumarry = function(number, sum){
    let temp = 0;
    temp += number%10;
    sum += temp;
    number -= temp;
    number = number/10;
    if (number >= 10){
      return sumarry(number, sum);
    }
    else return sum + number;
  }
  sum = sumarry(n, sum);
  while (sum >= 10) sum = sumarry(sum, count);
  return sum;
}

module.exports = {
  getSumOfDigits
};
