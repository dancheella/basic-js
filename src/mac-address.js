const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) { // объявление функции с именем isMAC48Address и одним параметром inputString
  const regex = /^([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}$/; // создание регулярного выражения для проверки формата MAC-48 адреса
  return regex.test(inputString); // проверка входной строки на соответствие регулярному выражению и возврат результата проверки
}
module.exports = {
  isMAC48Address
};
