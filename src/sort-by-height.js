const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // новый массив, исключая из него все -1
  const nonNegatives = arr.filter(item => item !== -1);

  // сортировка полученного массива по возрастанию
  nonNegatives.sort((a, b) => a - b);

  // новый массив, вставляя отсортированные положительные числа на место соответствующих -1
  return arr.map(item => (item !== -1 ? nonNegatives.shift() : -1));
}

module.exports = {
  sortByHeight
};
