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
function sortByHeight(arr) {  //объявление функции sortByHeight, которая принимает массив arr в качестве аргумента
  const nonNegatives = arr.filter(x => x !== -1).sort((a, b) => a - b); // создание нового массива nonNegatives путем фильтрации всех элементов массива arr, которые не равны -1, с последующей сортировкой по возрастанию
  return arr.map(x => x !== -1 ? nonNegatives.shift() : x); // применение метода map к каждому элементу массива arr: если элемент не равен -1, заменяем его на первый элемент nonNegatives и удаляем его из nonNegatives, иначе оставляем элемент без изменений
}

module.exports = {
  sortByHeight
};
