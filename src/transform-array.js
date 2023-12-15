const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // проверяем, является ли параметр arr массивом
  if (!(arr instanceof Array)) throw Error("'arr' parameter must be an instance of the Array!");
  // создаем пустой массив, в который будут добавляться элементы после применения контрольных последовательностей
  let resultArray = [];
  if (arr.length > 0) {
    // проходимся по каждому элементу массива arr
    arr.forEach((element, i) => {
      if (element === '--double-prev') resultArray.push(resultArray[i-1]);
      else if (element === '--double-next') resultArray.push(arr[i+1]);
      else if (element === '--discard-prev') {
        resultArray[i-1] = undefined;
        resultArray.push(undefined);
      }
      else if (element === '--discard-next') {
        resultArray.push(undefined);
      }
      else if (arr[i-1] === '--discard-next') {
        resultArray.push(undefined);
      }
      else resultArray.push(element);
    });
  }
  // фильтруем массив resultArray, удаляя из него все элементы со значением undefined
  return resultArray.filter(element => typeof element !== 'undefined');
}

module.exports = {
  transform
};
