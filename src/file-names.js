const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // создаем объект "counts", который будет хранить количество вхождений каждого имени в массиве "names"
  const counts = {};
  // создаем пустой массив "result", в который будут записываться окончательные имена файлов
  const result = [];

  // циклом проходим по каждому имени файла в массиве "names"
  for (const name of names) {
    // создаем переменную "newName" и присваиваем ей текущее имя файла
    let newName = name;

    // если текущее имя файла уже встречалось ранее, то добавляем к имени суффикс "(k)"
    if (counts[name]) {
      const suffix = `(${counts[name]})`;
      newName = `${name}${suffix}`;
      // увеличиваем количество вхождений текущего имени на 1
      counts[name]++;
    }

    // добавляем имя файла (новое или измененное) в массив "result"
    result.push(newName);
    // записываем количество вхождений данного имени в объект "counts"
    counts[newName] = 1;
  }

  // возвращаем массив с окончательными именами файлов
  return result;
}

module.exports = {
  renameFiles
};
