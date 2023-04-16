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
  let res = [];
  if (arr.length > 0) {
    // проходимся по каждому элементу массива arr
    arr.forEach((el, i) => {
      if (el === '--double-prev') res.push(res[i-1]);
      else if (el === '--double-next') res.push(arr[i+1]);
      else if (el === '--discard-prev') {
        res[i-1] = undefined;
        res.push(undefined);
      }
      else if (el === '--discard-next') {
        res.push(undefined);
      }
      else if (arr[i-1] === '--discard-next') {
        res.push(undefined);
      }
      else res.push(el);
    });
  }
  // фильтруем массив res, удаляя из него все элементы со значением undefined
  return res.filter(el => typeof el !== 'undefined');
}

module.exports = {
  transform
};
