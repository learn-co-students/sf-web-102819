# Object Orientation in JavaScript

## Overview

- OO Ruby vs JS
- OO JS Class Inheritance
- Static (class) methods in JS
- `.call`, `.apply`, `.bind`
- OO JS & the DOM

---

## Objects in JavaScript

- Objects in JavaScript are essentially key-value pairs
- Objects properties and methods can be added using dot notation

```javascript
let pokemon = {};
pokemon.name = 'Ponyta';
pokemon.hp = 50;

pokemon.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.hp += amount;
};

pokemon.sleep = function (length) {
  console.log(`${this.name} is sleeping.`);
  this.hp += length;
};

pokemon.play = function (length) {
  console.log(`${this.name} is playing.`);
  this.hp -= length;
};
```

- To create more than one object with the same properties and methods, use _functional instantiation_

```javascript
function Pokemon (name, energy) {
  // Encapsulate the object statements above in here!
  return pokemon;
};
```

## Compare JS Class to Ruby Class

```javascript
class Rectangle {    constructor(height, width){        this.height = height        this.width = width    }    area(){        return this.height * this.width    }}let rectangle1 = new Rectangle(5, 10) let rectangle2 = new Rectangle(20, 25)
```

```ruby
class Rectangle    attr_accessor :height, :width    def initialize(height, width)        @height = height        @width = width    end    def area        height * width    endendRectangle.new(5, 10)Rectangle.new(20, 25)
```

## OO JS Class Inheritance

```javascript
class Rectangle {    constructor(height, width){        this.height = height        this.width = width    }    area(){        return this.height * this.width    }}class Square extends Rectangle {    constructor(length){          super()        this.height = length        this.width = length    }}let rectangle1 = new Rectangle(5, 10) let rectangle2 = new Rectangle(20, 25)let square1 = new Square(5)
```

## Class (static) method in JS

```javascript
class Rectangle {    constructor(height, width){        this.height = height        this.width = width    }    area() {        return this.height * this.width          setTimeout(function(){            // no this          },100)    }    static largestOf(rectangles){        let largest = rectangles[0]        rectangles.forEach( rectangle => {            if(largest.area() < rectangle.area()){                largest = rectangle            }        })        return largest    }}
```

## Bind & Call & Apply

-   Implicit binding
    
    ```javascript
    function ask(question) {  console.log(this.teacher, question)}
    ```
    

var lecture1 = {
 teacher: "Amelie",
 ask: ask
}

var lecture2 = {
 teacher: "Levi",
 ask: ask
}

lecture.ask("What is implicit binding?")
lecture.ask("What is implicit binding?")

// The `this` is set based on what object we call this method on
// We only have to have one ask funciton but can invoke it in two different contexts

```

- `.call` & `.apply````javascript// First argument is the `this`ask.call(lecture1, "What is implicit binding?")ask.call(lecture2, "What is implicit binding?")// We are explicitly sharing the ask funciton (whereever that funciton comes from, invoke it within the particular context that I specify)ask.apply(lecture1, ["What is implicit binding?"])
```

-   `.bind`
    
    ```javascript
    class Rectangle {  constructor(height, width){      this.height = height      this.width = width        this.myFunction = this.myFunction.bind(this)  }    myFunction() {        console.log(this)    }  area() {        setTimeout(this.myFunction,100)  }  static largestOf(rectangles){      let largest = rectangles[0]      rectangles.forEach( rectangle => {          if(largest.area() < rectangle.area()){              largest = rectangle          }      })      return largest  }}
    ```
    

## OO and DOM

```javascript
class Rectangle {  constructor(height, width) {    this.height = height;    this.width = width;    this.element = document.createElement("div");    this.element.addEventListener("click", () => {      console.log(this);      this.height = this.height * 2;      this.width = this.width * 2;      this.render();    });  }  area() {    return this.height * this.width;  }  render() {    this.element.style.height = `${this.height}px`;    this.element.style.width = `${this.width}px`;    this.element.style.marginBottom = "10px";    this.element.style.borderStyle = "solid";    return this.element;  }  static largestOf(rectangles) {    let largest = rectangles[0];    rectangles.forEach(rectangle => {      if (largest.area() < rectangle.area()) {        largest = rectangle;      }    });    return largest;  }}class Square extends Rectangle {  constructor(length) {    super();    this.height = length;    this.width = length;  }}
```


---

## Takeaways

## Resources

- [Tyler McGinnis: A Beginner's Guide to JavaScript's Prototype](https://tylermcginnis.com/beginners-guide-to-javascript-prototype/)
- [Tyler McGinnis: JavaScript Private and Public Class Fields](https://tylermcginnis.com/javascript-private-and-public-class-fields/)
- [Tyler McGinnis: JavaScript Inheritance and the Prototype Chain](https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/)
