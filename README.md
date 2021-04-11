# Circular Dependencies Injection In NodeJs

While developing application with NodeJs, you may face a problem of circular dependencies, eg

```js
// a.js
const functionB = require('b.js');
function logicA() {
    fuinctionB(); // undefined functionB
}


// b.js
const functionA = require('a.js');
function logicB() {
    functionA(); // undefined functionA
}
```

So in this repo I will demonstrate how to resolve problem of circular dependencies by using DI (Dependencies Injection) design pattern