const { NotImplementedError } = require('../extensions/index.js');

// Задаем константы для активности современного образца и периода полураспада
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  // проверяем, что параметр является строкой, не пустой, и содержит число
  if (typeof sampleActivity !== 'string' || !sampleActivity || isNaN(parseFloat(sampleActivity))) {
    return false;
  }

  // преобразуем значение активности в число
  const activity = parseFloat(sampleActivity);

  // проверяем, что значение активности в допустимом диапазоне
  if (activity <= 0 || activity >= MODERN_ACTIVITY) {
    return false;
  }

  // рассчитываем возраст образца по формуле, округляем до ближайшего целого числа и возвращаем результат
  return Math.ceil(-Math.log(activity / MODERN_ACTIVITY) * HALF_LIFE_PERIOD / 0.693);
}

module.exports = {
  dateSample
};
