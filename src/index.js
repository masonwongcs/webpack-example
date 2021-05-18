/**
 * Webpack will transpile ES6 to lower ES5 code,
 * For example Class is not allowed in older browser,
 * we need to use babel to transpile Es6 to ES5 in order to let the older browser to load the script
 * But it will be troublesome if we use babel separately, that's why we need webpack
 */

class SomeClass {
  name;
  age;
  constructor() {
    this.name = "John";
    this.age = 99;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

function component() {
  const element = document.createElement("div");

  const someClass = new SomeClass();
  someClass.setName("Im not John anymore")
  console.log(someClass.getName())

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello WebPack"

  return element;
}

document.body.appendChild(component());
