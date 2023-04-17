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
  let sum = 0; // инициализируем переменную sum нулём
  while (n > 0) { // пока число n больше нуля
    sum += n % 10; // добавляем к sum последнюю цифру числа n
    n = Math.floor(n / 10); // убираем последнюю цифру числа n
  }
  if (sum >= 10) { // если сумма цифр больше или равна 10
    return getSumOfDigits(sum); // рекурсивно вызываем эту же функцию для суммы цифр
  }
  return sum;
}

module.exports = {
  getSumOfDigits
};
