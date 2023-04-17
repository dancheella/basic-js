const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // проходим по каждой строке в матрице
  return matrix.map((arr, row) => {
    // проходим по каждому элементу в строке
    return arr.map((el, column) => {
      // инициализируем счетчик числа соседних мин
      let counter = 0;
      // проходим по всем соседним ячейкам, включая текущую ячейку
      for (let r = row - 1 >= 0 ? row - 1 : row; r < row + 2 && r < matrix.length; r++) {
        for (let col = column - 1 >= 0 ? column - 1 : column; col < column + 2 && col < arr.length; col++) {
          // если соседняя ячейка является миной, увеличиваем счетчик
          if (matrix[r][col] === true && !(r === row && col === column)) {
            counter += 1;
          }
        }
      }
      // возвращаем окончательный подсчет для текущей ячейки
      return counter;
    });
  });
}


module.exports = {
  minesweeper
};
