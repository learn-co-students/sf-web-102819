# Shiny JS (ES6 Features & More)

## Outline

- Functions
  - Anonymous Functions vs. Named Functions
  - Function Expressions vs. Function Declarations
  - Callback Functions & ES6 Iterators
- Scope
- Hoisting
- Class Syntax & `this`
- Destructuring & Dynamic Object Keys
- Key Value Assignment Shortcut
- Spread Operator





## Functions

### Anonymous Functions vs. Named Functions

```javascript
// Named Function
function iHaveAName() {
  console.log('Hi')
}

// Anonymous Function
const myFunc = function(){}
const myOtherFunc = () => {console.log('hi')}

// Anonymous Function within .map
[1, 2, 3].map(function(num) {
	return num + 1
})
```

### Function Expressions vs. Function Declarations

```javascript
// Function Expression
const myFunction = () => console.log('hi')

// Function Declaration **always starts with the function keyword**
function myFunctionName() {
  console.log('hi from inside the function declaration')
}
```


### Passing Functions Around as Arguments (Callbacks) & ES6 Iterators (map, forEach, find)

```javascript
const names = ['dracular', 'voldemort', 'the hash slinging slasher'];

names.map(name => name.toUpperCase()); // ["DRACULAR", "VOLDEMORT", "THE HASH SLINGING SLASHER"]
names.map(function(name) {
  return name.toUpperCase()
})

names.forEach(name => console.log(name)); // logs each name
names.find(name => name.includes('volde')); // "voldemort"
```








## Scope
- Each function, when invoked, creates a new scope
- Block statements: Contrary to the `var` keyword, the `let` and `const` keywords support the declaration of local scope inside block statements.

```javascript
// Global scope
function someFunction() {
  // Local scope #1
  const anotherVar = "hi"

  function someOtherFunction() {
    // Local scope #2
    const myVar = "hi"
  }
}
// Global scope

function anotherFunction() {
  // Local scope #3
}

// Global scope

let tryAccessingMe

if (true) {
  tryAccessingMe = "Now I'm a string"
  var youCanAccessMeOutside = 'Hi from within the block';
  let dontTryToAccessMeOutside = "This won't work";
  const iAlsoStayWithinTheBlock = 'Staying here';
}

youCanAccessMeOutside;
dontTryToAccessMeOutside;
iAlsoStayWithinTheBlock;
```


## Hoisting
- Declarations are hoisted (functions & var variables)
- Neither `let`, `const` nor function expressions are hoisted

```javascript
hoistMe();

function hoistMe() {
  console.log('Hi from the function');
}

cantHoistMe()
const cantHoistMe = () => console.log('this wont work')

// This ↓ is the assignment which does not get hoisted
meToo = 'Hi from the variable';
console.log(meToo); // 'Hi from the variable'
// This ↓ is the declaration, that's why it's ok to put it at the bottom
var meToo;

// THIS ↓ WILL NOT WORK (variable declaration is hoisted but assignment is not)
console.log(anotherOne)
var anotherOne = "hi"

// 'let' and 'const' variables are not hoisted in the same way that 'var' variables are
// Function expressions are also NOT hoisted
```






## Class Syntax & `this`

_If a function belongs to an object, it’s called a method_
_context is what the value of `this` is_

- Every class can have attributes (properties/variables) and abilities (methods)
- `this` & functions 
  - Every function DECLARATION is given it’s own context of `this`
  - With an arrow function the `this` gets bound to whatever the outer `this` is (arrow functions don’t have an own internal `this`)
  - `this` references the object that is executing the current function
  - If the function (in this case called a method) is part of an object, `this` references the object itself
  - If the function is a regular function (not part of an object), it references the global object which in browsers is the window object (or is `undefined` in strict mode)

```javascript
// method -> obj
// function -> global window

function whatIsThis() {
  // `this` refers to the global window object
  console.log(this);
}

class Person {
  constructor() {
    this.age = 100;
    this.hobbies = ['swim', 'dance', 'take walks'];
	}
	
  sayHi() {
    // `this` refers to the object (instance) itself
    this.hobbies.forEach(function(hobby) {
      // in here `this`  is the window object (or `undefined` because of strict mode)
      console.log(`I like to ${hobby} at ${this.age}.`);
		});
		
		this.hobbies.forEach(hobby => {
			// with an arrow function, the `this` gets bound to the outer `this` 
      console.log(`I like to ${hobby} at ${this.age}.`);
    });
  }
}

var bob = new Person();
bob.sayHi();
```


## Destructuring & Dynamic Object Keys
```javascript
const spaceship = {
  pilot: 'elon musk',
  guidance: 'marc zucc',
  chef: 'gordon ramsay'
}

// How can we access the pilot inside the spaceship?
// 1. Dot notation
const pilot = spaceship.pilot

// 2. Bracket notation
const pilot = spaceship["pilot"]

// 3. Destructuring
const { pilot, guidance, chef } = spaceship


console.log(pilot) // 'elon musk'
console.log(chef) // 'gordon ramsay'

// More about braket notation (dynamic object keys)
// If we need to use a variable as a key we have to use braket notation to retrieve the value
const pilot = 'pilot'
spaceship[pilot]

const jobs = ['pilot', 'guidance', 'chef']
jobs.forEach(job => console.log(spaceship[job]))
```

## Key Value Assignment Shortcut
- If the name of the key is the same as the name of the variable we want to assign to that key we can use this shortcut

```JavaScript
const pizza = 'pepperoni'
const restaurant = 'Awesome SF Pizza'

// The long way
const pizzaObj = {
  pizza: pizza,
  restaurant: restaurant
}

// Shortcut
const pizzaObj2 = { pizza, restaurant }
```


## Spread Operator
```javascript
// Spread operator with arrays
const nums = [1, 2, 3];

const mergedArray = [...nums, 4, 5]; // [1, 2, 3, 4, 5]
// If we don't use the spread operator we end up with a nested array
const nestedArray = [nums, 4, 5]; // [[1, 2, 3], 4, 5]

// Spread operator with objects
const pepperoni = { toping: 'Pepperoni' };
const pizza = {
  ...pepperoni,
  price: '$8',
  size: 'medium'
};
```
