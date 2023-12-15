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
  return matrix.map((rowArray, rowIndex) => {
    // проходим по каждому элементу в строке
    return rowArray.map((cell, columnIndex) => {
      let mineCount = 0;

      // проверяем каждую соседнюю ячейку, включая текущую
      for (let row = Math.max(0, rowIndex - 1); row <= Math.min(rowIndex + 1, matrix.length - 1); row++) {
        for (let col = Math.max(0, columnIndex - 1); col <= Math.min(columnIndex + 1, rowArray.length - 1); col++) {
          // если соседняя ячейка является миной и не является текущей ячейкой, увеличиваем счетчик
          if (matrix[row][col] && !(row === rowIndex && col === columnIndex)) {
            mineCount += 1;
          }
        }
      }

      return mineCount;
    });
  });
}


module.exports = {
  minesweeper
};
