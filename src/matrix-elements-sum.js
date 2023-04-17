const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) { // объявляем функцию с одним параметром matrix
  let sum = 0; // объявляем переменную sum и присваиваем ей начальное значение 0
  const rows = matrix.length; // объявляем переменную rows и присваиваем ей количество строк в матрице
  const cols = matrix[0].length; // объявляем переменную cols и присваиваем ей количество столбцов в матрице

  for (let j = 0; j < cols; j++) { // начинаем внешний цикл, перебирая все столбцы матрицы по порядку
    for (let i = 0; i < rows; i++) { // начинаем внутренний цикл, перебирая все строки матрицы по порядку
      if (matrix[i][j] === 0) { // если текущий элемент равен 0
        break; // прерываем цикл, так как далее все элементы находятся ниже 0
      } else { // иначе, если текущий элемент не равен 0
        sum += matrix[i][j]; // добавляем его значение к переменной sum
      }
    }
  }

  return sum; // возвращаем сумму всех элементов, которые находятся выше каждого 0 в матрице
}

module.exports = {
  getMatrixElementsSum
};
