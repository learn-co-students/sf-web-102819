# Introduction to Functional Programming

## Table of Contents
- Functions As First Class Objects
- Introduction to Closures
- Functional Programming Paradigms
	- Imperative vs Declarative
	- Pure Functions
    	- Return a value
    	- Avoid side effects
  		- Same Input = Same Output
  - Avoid Shared State & Avoid Mutating State
  - Composition
  - Mutable Data

---

## Benefits of Functional Programming
- Easier to debug
- Consistency
- Easier to test
- Easier to read
- Easier to refactor
- More flexible programs

- Recall that JavaScript is a _multiparadigm_ language; we can solve problems using functional programming and/or object oriented programming principles.
  - The key difference between the two paradigms is that Object-Oriented programming focuses on **what our objects are**. Perhaps we have an `Animal` class and a `Dog` class that inherits from `Animal`. Our classes are concerned with shared functionality and data. For example, each _instance_ of a dog has its own name; all dogs know how to bark.
  - Functional programming on the other hand is primarily concerned with **the behavior of our code**––what should this app do, what is the functionality we need? Instead of creating classes with shared state and functionality, we might instead rely on a series of functions that can be _composed_ together to solve a particular problem. We've already seen this in ES6: `.map`, `.reduce`, `.filter`, `.forEach` for example. These ES6 functions do not know or care about the callback that will be passed as an argument:

```js
[1, 2, 3].forEach(function() {
  console.log('I WANT 2 EAT PANCAKES ALL DAY LONG')
})

// 'I WANT 2 EAT PANCAKES ALL DAY LONG' logged 3 times
```

---

### Functions As First Class Objects

- Functions are **first class objects in JavaScript:**
  - "A programming language is said to have First-class functions when **functions in that language are treated like _any other variable_.** For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable." - [MDN Article on First Class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
  - Functions can be assigned to variables:

```javascript
const eatDoughnut = function() {
  console.log('I love to eat doughnuts!')
}
```

- Functions can be passed to other functions as arguments (Higher-order function):

```javascript
function isCallBackTrue(callbackFn) {
  if (callbackFn()) {
    return 'TRUE!'
  } else {
    return 'FALSE!'
  }
}
```

- Functions can also return other functions (Higher-order function):

```javascript
const outerFn = function() {
  const innerVar = 'I am not a global variable'
  return function() {
    console.log(innerVar)
  }
}

outerFn() //returns a function definition

outerFn()() // 'I am not a global variable'
```

- Notice the `()()` in the example above. Invoking `outerFn` returns a function. In order to execute the return value of `outerFn` I have to use `()` again.

---

### Introduction to Closures

A closure is when a function is able to “remember” (or access) its lexical scope (the variables outside of itself) even when that function is executed outside that lexical scope (in a different scope).

```javascript
// At the time that the `waitASec` function runs, the `ask` function has already finished, and the variable `question` should have gone away, but it didn't because closure preserved it
function ask(question) {
	setTimeout(function waitASec() {
		console.log(question)
	}, 1000)
}

ask("What is closure?")
```

---

### Functional Programming Paradigms

**Functional programming** (often abbreviated FP) is the process of building software by composing **pure functions**, avoiding **shared state**, **mutable data**, and **side-effects**. Functional programming is **declarative** rather than **imperative**.

#### Imperative vs Declarative
- "Functional programming is **declarative** rather than **imperative**, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects." - [Master the JS Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
   - Imperative programming has more to do with **how** to do things; a series of tasks/operations for the computer to perform.
   - Declarative programming has more to do with **what** a program needs to accomplish without specifying how a task should be completed

[Imperative vs. Declarative Programming (in 60 seconds)
](https://www.youtube.com/watch?v=JqvMTwnbhnA)

```javascript
// Imperative
function double(arr) {
	let results = []
	for (let i = 0; i < arr.length; i++) {
		results.push(arr[i] * 2)
	}
	return results
}

// Declarative
function double(arr) {
	return arr.map(item => item * 2)
}

// `map`, for instance will transform an array based on a callback, but we do not need to focus on **how** that task is accomplished
```

---

#### Pure Functions

- **Pure Functions** should:
  - Return a value
  - Have no side effects
  - Given the same input, return the same output

```javascript
// Pure function
function add(a, b) {
	return a + b
}

// Non-pure function
let id = 0
function addNumsToId(a, b) {
	return ++id + a + b
}
```

- "A side effect is any application state change that is observable outside the called function other than its return value. Side effects include:

  - Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
  - Logging to the console
  - Writing to the screen
  - Writing to a file
  - Writing to the network
  - Triggering any external process
  - Calling any other functions with side-effects
  - Side effects are mostly avoided in functional programming, which makes the effects of a program much easier to understand, and much easier to test." - [Master the JS Interview: What is Functional Programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
  
---

#### Avoiding Shared State

- "**Shared state** is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. A shared scope can include global scope or closure scopes. Often, in object oriented programming, objects are shared between scopes by adding properties to other objects." - [Master the JS Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

- In essence, this means we should rely on **immutable data structures** and pure functions. This is very different from Object Oriented programming which relies heavily on shared state. Think of `attr_accessors` in Ruby. The purpose of these methods is to edit and read the _same piece of data_:

```javascript
// SHARED STATE
// With shared state, the order in which function calls are made changes the end result.
let x = 2;

const x1 = () => x += 1;
const x2 = () => x *= 2;

x1();
x2();

console.log(x); // 6


// NOT SHARED STATE
// It doesn't matter how we call our functions, we will always get the same results
const x = 2;

const x1 = y => y + 1;
const x2 = y => y * 2;

x2(x);
x1(x);

console.log(x1(x2(x))); // 5
```

---

### Composition

The process of combining two or more functions in order to produce a new function or perform some computation `f(g(x))`


- [Article on composition in JavaScript](http://blog.ricardofilipe.com/post/javascript-composition-for-dummies)
- [Functional Programming Exercises](https://gist.github.com/alexgriff/97cd3cc946f3047828c1196afd66ac61)

---

#### Mutable Data

"An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created." - [Master the JS Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

```javascript
const a = Object.freeze({
  foo: { greeting: 'Hello' },
  bar: 'world',
  baz: '!'
});

a.bar = 'Bob';
// Error: Cannot assign to read only property 'foo' of object Object

a.foo.greeting = 'Goodbye';
console.log(`${ a.foo.greeting }, ${ a.bar }${a.baz}`);
// There are libraries that you can use that will deep freeze an object
```

To create a copy of an object use `var ourCopy = {...a}` or Object.assign

---

### External Resources

- [MDN Article on First Class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
- [MDN Reference on New JS Featured Introduced by ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla)
- [MDN Article on Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Master the JS Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [`Object.freeze`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
- [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MPJ Video Series on Functional Programming](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
- [A Gentle Introduction to Composition in JavaScript](http://blog.ricardofilipe.com/post/javascript-composition-for-dummies)
