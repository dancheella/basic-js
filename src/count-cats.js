const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) { // объявляем функцию с именем countCats и одним параметром backyard
  let count = 0;
  for (let i = 0; i < backyard.length; i++) { // начало цикла по первому измерению массива backyard
    for (let j = 0; j < backyard[i].length; j++) { // начало цикла по второму измерению массива backyard
      if (backyard[i][j] === '^^') { // если элемент массива равен строке '^^', выполнить следующую строку кода
        count++; // увеличиваем значение переменной count на 1
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
