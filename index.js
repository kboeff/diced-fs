/**
 * index.js
 */

const logSomething = options => ({
  ...options,
  anotherOption: 'Hello!',
});

class Bong {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}

const Bongo = new Bong('Bongito', 1);
const options = logSomething({ one: '1', two: '2' });
console.log(options, Bongo);
