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
  const counts = {};
  const result = [];

  for (const name of names) {
    let newName = name;

    // если текущее имя файла уже встречалось ранее, то добавляем к имени суффикс "(k)"
    if (counts[name]) {
      const suffix = `(${counts[name]})`;
      newName = `${name}${suffix}`;
      counts[name]++;
    }

    // добавляем имя файла
    result.push(newName);
    // записываем количество вхождений данного имени
    counts[newName] = 1;
  }

  return result;
}

module.exports = {
  renameFiles
};
