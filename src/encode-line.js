const { NotImplementedError } = require('../extensions/index.js');

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
  // создаем пустую строку, в которую будем добавлять закодированную строку
  let result = "";
  // создаем счетчик для подсчета количества последовательно повторяющихся символов
  let count = 1;

  // итерируемся по символам входной строки
  for (let i = 0; i < str.length; i++) {
    // если текущий символ равен следующему, увеличиваем счетчик
    if (str[i] === str[i+1]) {
      count++;
    } else {
      // добавляем в результат закодированную версию предыдущего символа и его количества (если оно больше 1)
      result += count === 1 ? "" : count; // если количество повторов равно 1, добавляем только символ
      result += str[i];
      // сбрасываем счетчик
      count = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
