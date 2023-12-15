const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],

  // метод для получения длины цепочки
  getLength() {
    return this.chain.length;
  },

  // метод для добавления элемента в цепочку
  addLink(value = ' ') {
    this.chain.push(`( ${value} )`); // добавляем элемент в массив в виде строки
    return this;
  },

  // метод для удаления элемента из цепочки по указанной позиции
  removeLink( position ) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length || position % 1) { // проверяем корректность позиции
      this.chain = []; // если позиция некорректна, очищаем массив
      throw Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1) // удаляем элемент из массива
    return this;
  },

  // метод для разворота цепочки
  reverseChain() {
    this.chain.reverse(); // разворачиваем массив
    return this;
  },

  // метод для завершения работы с цепочкой
  finishChain() {
    const result = this.chain.join('~~'); // создаем строку из массива элементов, разделенных '~~'
    this.chain = []; // очищаем массив
    return result;
  }
};

module.exports = {
  chainMaker
};
