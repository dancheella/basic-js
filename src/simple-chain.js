const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [], // создаем массив, который будет хранить элементы цепочки
  getLength() { // метод для получения длины цепочки
    return this.chain.length;
  },
  addLink(value = ' ') { // метод для добавления элемента в цепочку
    this.chain.push(`( ${value} )`); // добавляем элемент в массив в виде строки
    return this; // возвращаем сам объект, чтобы можно было вызывать методы цепочкой
  },
  removeLink( position ) { // метод для удаления элемента из цепочки по указанной позиции
    if (typeof position !== 'number' || position < 1 || position > this.chain.length || position % 1) { // проверяем корректность позиции
      this.chain = []; // если позиция некорректна, очищаем массив
      throw Error("You can't remove incorrect link!"); // и выбрасываем исключение с сообщением об ошибке
    }
    this.chain.splice(position-1, 1) // удаляем элемент из массива
    return this; // возвращаем сам объект, чтобы можно было вызывать методы цепочкой
  },
  reverseChain() { // метод для разворота цепочки
    this.chain.reverse(); // разворачиваем массив
    return this; // возвращаем сам объект, чтобы можно было вызывать методы цепочкой
  },
  finishChain() { // метод для завершения работы с цепочкой
    const res = this.chain.join('~~'); // создаем строку из массива элементов, разделенных '~~'
    this.chain = []; // очищаем массив
    return res; // возвращаем итоговую строку
  }
};

module.exports = {
  chainMaker
};
