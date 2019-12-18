# Object-Oriented Programming in JavaScript 🧱

## Goals 🏰

- [ ] Review object-oriented programming 🤔
- [ ] Create objects with constructor functions 🏗
- [ ] Create objects with `Object.create` 🚜
- [ ] Identify the role of prototypes in JS objects 👽
- [ ] Use the `new` keyword to simplify constructor function ✨
- [ ] Create objects with `class` 🚀
- [ ] Compare objects in Ruby to objects in JS 🔬
- [ ] Compare prototypal inheritance to class-based inheritance ⚖️
- [ ] Static (class) methods in JS
- [ ] `.call`, `.apply`, `.bind`
- [ ] OO JS & the DOM

---

## Why _Object_ Orientation? 🤔

> The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs...

> Objects can contain related data and code... and functionality or behavior that you want it to have.

## Objects in JavaScript 📦

- Objects in JS are essentially containers for key-value pairs
- Objects properties and methods can be added using dot notation

```javascript
let pokemon = {};
pokemon.name = 'Ponyta';
pokemon.hp = 50;

pokemon.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.hp += amount;
};

pokemon.fight = function (length) {
  console.log(`${this.name} is fighting.`);
  this.hp -= length;
};
```

## Creating Objects with Function Constructors 🏗

> JavaScript uses special functions called constructor functions to define and initialize objects and their features.

- To create more than one object with the same properties and methods, use _functional instantiation_
- A constructor function name usually starts with a capital letter

```javascript
function Pokemon (name, hp) {
  // Encapsulate the object statements above in here!
  return pokemon;
};

const ditto = Pokemon("ditto", 48);
const rapidash = Pokemon("rapidash", 65);
```

- Calling the `Pokemon` function creates a new Pokemon!
- Let's factor out generic methods

```javascript
const pokemonMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.hp += amount;
  },
  fight(length) {
    console.log(`${this.name} is fighting.`);
    this.hp -= length;
  }
};

function Pokemon(name, hp) {
  let pokemon = {};
  pokemon.name = name;
  pokemon.hp = hp;
  pokemon.eat = pokemonMethods.eat;
  pokemon.sleep = pokemonMethods.fight;
  return pokemon;
};
```

- By referencing one object instead of duplicating methods, we save memory

### Creating Objects with `Object.create` 🚜

> The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

- Create an object with a lookup link to another object

```javascript
const newCar = {
  make: 'Chevrolet',
  model: 'Astro'
};

const usedCar = Object.create(newCar);
usedCar.miles = 789,125;
usedCar.name = "The Mothership";
```

- Applied to our Pokemon:

```javascript
const pokemonMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.hp += amount;
  },
  fight(length) {
    console.log(`${this.name} is fighting.`);
    this.hp -= length;
  }
};

function Pokemon(name, hp) {
  let pokemon = Object.create(pokemonMethods);
  pokemon.name = name;
  pokemon.hp = hp;
  return pokemon;
};
```

### `prototype` 👽

> Prototypes are the mechanism by which JavaScript objects inherit features from one another.

> JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from. An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

- Every function has a prototype that references an object
- Prototypes allow us to share methods across instances of a function

```javascript
function Pokemon(name, hp) {
  let pokemon = Object.create(Pokemon.prototype);
  pokemon.name = name;
  pokemon.hp = hp;
  return pokemon;
};

Pokemon.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.hp += amount;
};

Pokemon.prototype.fight = function(length) {
  console.log(`${this.name} is fighting.`);
  this.hp -= amount;
};

const ditto = Pokemon("ditto", 48);
```

- Now we know:
  - How to create a constructor function
  - How to add methods to the function's prototype
  - How to use `Object.create` to delegate failed lookups to function's prototype

### The `new` operator

- The `new` keyword does the following things:
  1. Creates a blank, plain JavaScript object;
  2. Links (sets the constructor of) this object to another object;
  3. Passes the newly created object from Step 1 as the `this` context;
  4. Returns this if the function doesn't return its own object.
- `this`
  - Refers to the global object in the global execution context
  - Refers to the object being called or contructed

> A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

```javascript
function Pokemon(name, hp) {
  // const this = Object.create(Pokemon.prototype);
  this.name = name;
  this.hp = hp;
  // return pokemon;
};

Pokemon.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.hp += amount;
};

Pokemon.prototype.fight = function(length) {
  console.log(`${this.name} is fighting.`);
  this.hp -= amount;
};

const ditto = new Pokemon("ditto", 48);
const rapidash = new Pokemon("rapidash", 65);
```

### The `class` keyword 🚀

- `class`, introduced with ES6, will do all of the above for us
- `construcor` method creates and initializes object from `class`

```javascript
class Pokemon {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  };
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.hp += amount;
  };
  fight(length) {
    console.log(`${this.name} is fighting.`);
    this.hp -= length;
  };
};

const ditto = new Pokemon("ditto", 48);
const rapidash = new Pokemon("rapidash", 65);
```

### More examples 🎈

- Arrays
  - `const chocolateArray = []` === `const vanillaArray = new Array()`
  - Array methods lives on `Array.prototype`

## Comparing JS "Classes" to Ruby Classes 🔬

```javascript
class Rectangle {
  constructor(height, width){
    this.height = height
    this.width = width
  };

  area(){
    return this.height * this.width;
  };
};

let rectangle1 = new Rectangle(5, 10);
let rectangle2 = new Rectangle(20, 25);
```

```ruby
class Rectangle
  attr_accessor :height, :width

  def initialize(height, width)
    @height = height
    @width = width
  end

  def area
    @height * @width
  end
end

Rectangle.new(5, 10)
Rectangle.new(20, 25)
```

- Looks pretty similar, but there is a fundamental difference between JS and Ruby!
- Ruby utilizes class inheritance
  - A class is a blueprint for an object
  - Classes inherit from other classes
  - Class taxonomy is hierarchical: children have a single parent
- JS employs prototypal inheritance
  - A prototype is a working object instance
  - Objects inherit directly from other objects--no distinction between classes and objects

> A prototype-based language has the notion of a prototypical object, an object used as a template from which to get the initial properties for a new object. Any object can specify its own properties, either when you create it or at run time. In addition, any object can be associated as the prototype for another object, allowing the second object to share the first object's properties.

- **Now we are going to mimic class inheritance using prototypes**
- **This is not prototypal inheritance**

## OO JS Class Inheritance

```javascript
class Rectangle {
  constructor(height, width){
    this.height = height;
    this.width = width;
  };

  area(){
    return this.height * this.width
  };
};

class Square extends Rectangle {
  constructor(length){
    super();
    this.height = length;
    this.width = length;
  };
};

let rectangle1 = new Rectangle(5, 10);
let rectangle2 = new Rectangle(20, 25);
let square1 = new Square(5);
```

## Class (`static`) methods in JS

```javascript
class Rectangle {
  constructor(height, width){
    this.height = height;
    this.width = width;
  };

  area() {
    return this.height * this.width;
    setTimeout(function(){
      // no this
    },100);
  };

  static largestOf(rectangles){
    let largest = rectangles[0];
    rectangles.forEach( rectangle => {
      if(largest.area() < rectangle.area()){
        largest = rectangle
      };
    });
    return largest;
  };
};
```

## `bind`, `call`,  `apply`

- `this` allows us to reuse functions with different contexts
- To figure out what `this` is, ask, "Where is this function being called?"

### Implicit binding

> I’d say it’ll tell you what the this keyword is referencing about 80% of the time.

- Look to the left of the dot!

```javascript
function ask(question) {
  console.log(this.teacher, question)
};

const lecture1 = {
 teacher: "Amelie",
 ask: ask
};

const lecture2 = {
 teacher: "Levi",
 ask: ask
};

lecture1.ask("What is implicit binding?");
lecture2.ask("What is implicit binding?");

// The `this` is set based on what object we call this method on
// We only have to have one ask funciton but can invoke it in two different contexts
```

### Explicit binding with `.call` & `.apply`

> The call() method calls a function with a given this value and arguments provided individually.
> The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

```javascript
// First argument is the `this`
ask.call(lecture1, "What is implicit binding?");
ask.call(lecture2, "What is implicit binding?");
// We are explicitly sharing the ask funciton (whereever that funciton comes from, invoke it within the particular context that I specify)
ask.apply(lecture1, ["What is implicit binding?"]);
```

> The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript
class Rectangle {
  constructor(height, width){
    this.height = height
    this.width = width
    this.myFunction = this.myFunction.bind(this)
  };
  myFunction() {
    console.log(this)
  };
  area() {
    setTimeout(this.myFunction,100)
  };
  static largestOf(rectangles){
    let largest = rectangles[0]
    rectangles.forEach( rectangle => {
      if(largest.area() < rectangle.area()){
        largest = rectangle
      };
    });
  return largest
  };
};
```

## OO and DOM

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.element = document.createElement("div");
    this.element.addEventListener("click", () => {
      console.log(this);
      this.height = this.height * 2;
      this.width = this.width * 2;
      this.render();
    });
  };

  area() {
    return this.height * this.width;
  };

  render() {
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.marginBottom = "10px";
    this.element.style.borderStyle = "solid";
    return this.element;
  };

  static largestOf(rectangles) {
    let largest = rectangles[0];
    rectangles.forEach(rectangle => {
      if (largest.area() < rectangle.area()) {
        largest = rectangle;
      }
    });
    return largest;
  };
};

class Square extends Rectangle {
  constructor(length) {
    super();
    this.height = length;
    this.width = length;
  };
};
```

---

## Takeaways

- [x] Object orientation in programming gives us a means of organizing our code.
- [x] Objects can be created in an analogous way as Ruby.
- [x] Prototypal inheritance doesn't distinguish between classes and objects.

## Resources

- [MDN: Object-oriented JavaScript for beginners](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Tyler McGinnis: A Beginner's Guide to JavaScript's Prototype](https://tylermcginnis.com/beginners-guide-to-javascript-prototype/)
- [MDN: Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN: Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN: `new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MDN: Details of the Object Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)
- [Raganwald: Classes vs. Prototypes in JavaScript](https://raganwald.com/2013/02/10/prototypes.html)
- [Medium: What's the Difference between Class & Prototypal Inheritance](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
- [Tyler McGinnis: The this keyword, call, apply, and bind in JavaScript](https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/)
- [Tyler McGinnis: JavaScript Private and Public Class Fields](https://tylermcginnis.com/javascript-private-and-public-class-fields/)
- [Tyler McGinnis: JavaScript Inheritance and the Prototype Chain](https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/)
