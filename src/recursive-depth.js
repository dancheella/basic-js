const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // определяем метод calculateDepth внутри класса DepthCalculator
  calculateDepth(arr, depth = 1) {
    // функция принимает массив и глубину (если не задана, по умолчанию она равна 1)
    if (!Array.isArray(arr)) {
      // если аргумент arr не является массивом, возвращаем 0 (глубина невалидна)
      return 0;
    }
    let maxDepth = depth;
    // инициализируем переменную maxDepth текущей глубиной
    for (let i = 0; i < arr.length; i++) {
      // проходим по каждому элементу массива
      if (Array.isArray(arr[i])) {
        // если элемент является массивом, то вызываем метод calculateDepth рекурсивно, увеличивая глубину на 1
        const currentDepth = this.calculateDepth(arr[i], depth + 1);
        // получаем глубину текущего элемента и сохраняем её в переменной currentDepth
        maxDepth = Math.max(maxDepth, currentDepth);
        // обновляем максимальную глубину, если текущая глубина больше
      }
    }
    return maxDepth;
    // возвращаем максимальную глубину
  }
}

module.exports = {
  DepthCalculator
};
