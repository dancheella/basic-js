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
  let count = 0; // Инициализируем переменную, которая будет считать количество общих символов
  let s1Chars = s1.split(''); // Преобразуем первую строку в массив символов
  let s2Chars = s2.split(''); // Преобразуем вторую строку в массив символов
  let s1CharCount = {}; // Создаем объект, чтобы считать, сколько раз каждый символ встречается в первой строке

  // Считаем количество вхождений каждого символа в первую строку и записываем это в объект s1CharCount
  s1Chars.forEach(function(char) {
    s1CharCount[char] = s1CharCount[char] ? s1CharCount[char] + 1 : 1;
  });

  // Идем по символам второй строки и считаем количество общих символов
  s2Chars.forEach(function(char) {
    if (s1CharCount[char] && s1CharCount[char] > 0) { // Проверяем, есть ли символ в объекте s1CharCount и сколько раз он там встречается
      count++; // Увеличиваем счетчик общих символов
      s1CharCount[char]--; // Уменьшаем количество оставшихся вхождений символа в первой строке
    }
  });

  return count; // Возвращаем количество общих символов
}

module.exports = {
  getCommonCharacterCount
};
