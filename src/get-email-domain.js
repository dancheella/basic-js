const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) { // объявляем функцию getEmailDomain с одним аргументом email
  const atIndex = email.lastIndexOf('@'); // находим индекс последнего символа @ в строке email
  return email.slice(atIndex + 1); // возвращаем подстроку строки email, начиная с символа, следующего после @, до конца строки
}

module.exports = {
  getEmailDomain
};
