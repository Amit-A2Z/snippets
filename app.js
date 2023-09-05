//app.js similar to index.js...just a refactoring of code
const Singleton = require('./singleton');



const singletonInstance1 = new Singleton();
const singletonInstance2 = new Singleton();
console.log(singletonInstance1 === singletonInstance2); // true
