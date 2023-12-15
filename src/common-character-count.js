const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let s1Chars = s1.split('');
  let s2Chars = s2.split('');
  let s1CharCount = {};

  s1Chars.forEach(function(char) {
    s1CharCount[char] = s1CharCount[char] ? s1CharCount[char] + 1 : 1;
  });

  s2Chars.forEach(function(char) {
    if (s1CharCount[char] && s1CharCount[char] > 0) {
      count++;
      s1CharCount[char]--;
    }
  });

  return count;
}

module.exports = {
  getCommonCharacterCount
};
