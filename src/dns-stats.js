const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // создаем пустой объект для записи статистики DNS
  const dnsStats = {};

  // итерируемся по массиву доменных имен
  domains.forEach((domain) => {
    // разбиваем каждое доменное имя на части по символу "."
    const domainParts = domain.split('.').reverse();
    // создаем переменную, в которую будем добавлять части доменного имени
    let currentDns = '';
    // итерируемся по частям доменного имени, начиная с наиболее общего домена (к примеру, ".com")
    domainParts.forEach((part) => {
      // добавляем очередную часть доменного имени к переменной currentDns
      currentDns += `.${part}`;
      // если такой DNS уже встречался, увеличиваем его количество на 1, иначе добавляем его в объект со значением 1
      dnsStats[currentDns] = (dnsStats[currentDns] || 0) + 1;
    });
  });

  return dnsStats;
}

module.exports = {
  getDNSStats
};
