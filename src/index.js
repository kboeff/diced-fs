/**
 * index.js
 */

const { add, substract } = require('./module');

const resultA = add(2, 3);
const resultB = substract(5, 2);

console.log(resultA, resultB);