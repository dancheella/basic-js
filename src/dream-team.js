const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // проверяем, является ли members массивом
  if (!Array.isArray(members)) {
    return false;
  }

  // фильтруем массив members, оставляя только элементы, являющиеся строками
  const validNames = members.filter(name => typeof name === 'string');

  // создаём новый массив firstLetters, состоящий из первых букв каждого имени
  // (после удаления начальных и конечных пробелов) в верхнем регистре
  const firstLetters = validNames.map(name => name.trim()[0].toUpperCase());

  // сортируем массив firstLetters в алфавитном порядке и объединяем его элементы в строку
  return firstLetters.sort().join('');
}


module.exports = {
  createDreamTeam
};
