const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // установка значений по умолчанию для параметров options
  const repeatTimes = options.repeatTimes || 1; // количество повторений str, по умолчанию 1
  const separator = options.separator || '+'; // разделитель между повторениями str, по умолчанию '+'
  const addition = options.addition === undefined ? '' : options.addition; // дополнительная строка, добавляемая к каждому повторению str
  const additionRepeatTimes = options.additionRepeatTimes || 1; // количество повторений addition, по умолчанию 1
  const additionSeparator = options.additionSeparator || '|'; // разделитель между повторениями addition

  // приводим str и addition к строковому типу
  const strStr = String(str);
  const additionStr = String(addition);

  // создаем строки с повторением дополнительной строки
  const repeatedAdditionStr = new Array(additionRepeatTimes)
      .fill(additionStr) // заполняем массив дополнительной строкой
      .join(additionSeparator); // объединяем элементы массива с помощью разделителя

  // создаем итоговые строки с повторением str и дополнительной строки
  return new Array(repeatTimes)
      .fill(strStr + repeatedAdditionStr) // заполняем массив строкой str и повторенной дополнительной строкой
      .join(separator); // объединяем элементы массива с помощью разделителя
}

module.exports = {
  repeater
};
