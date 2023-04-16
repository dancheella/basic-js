const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // проверяем, передали ли аргумент `date`
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  // проверяем, является ли значение аргумента `date` корректной датой
  if (!Date.parse(date)) {
    throw Error("Invalid date!");
  }

  // проверяем, является ли значение аргумента `date` объектом `Date`
  if (Object.getOwnPropertyNames(date).length !== 0) {
    throw Error("Invalid date!");
  }

  // получаем номер месяца из даты и в зависимости от его значения возвращаем соответствующую строку с временем года
  const month = date.getMonth();
  if (month > 10 || month < 2) {
    return 'winter';
  } else if (month < 5) {
    return 'spring';
  } else if (month < 8) {
    return 'summer';
  } else {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
