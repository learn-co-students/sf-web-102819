# 🏗 JS Basics: DOM Manipulation

## 🏃🏼‍♀️ Goals

- [ ] Review basic JavaScript syntax 📖
- [ ] Discuss the connection between HTML, JS, and the browser ⛓
- [ ] Practice using the Chrome developer tools to debug 🐛
- [ ] Define the DOM 🏢
- [ ] Manipulate the DOM with JS 🏗

## 📖 Basic JavaScript

### 📚 Some History

- _"How do we make the web interactive?"_
- Created by Brendan Eich and co. at Netscape in 1995
- JS borrowed syntax from Java
- Netscape + Sun alliance against Microsoft in browser race
- Started as Mocha, then LiveScript, then JavaScript (for marketing reasons)
- Microsoft tried to copy it as JScript
- 1996 found ECMA (European Computer Manufacturers Association) organizing committee to standardize JS
- 2005 brought AJAX, JS-based technologies to create web apps where data could be loaded in the background
- 2009 was the year the browser wars cooled and JS became fully accepted
- Explosion of libraries and frameworks since!

### 🤔 How to Learn a New Language

_**All**_ programming languages have 3 basic things:

1. Syntax (how code must be written)
2. Programmatic thinking (what processes make code work)
3. Design patterns (how code is best structured)

### ⚙️ How JavaScript Works

- JS is a scripting language for the web
- 🤔 _How is JS loaded in a webpage?_
- 🤓 JS is loaded, interpreted, and executed the browser
  - Loaded: `.js` files referenced with `<script>` tag in `.html` file
  - Interpreted: Technically _just-in-time compiled_. Code gets compiled at run time. Scripts are run in order, from top to bottom.
  - Executed: Browser JS engine executes interpreted code after HTML and CSS have been assembled into a web page
- Similarities and differences with Ruby
  - Data Types
    - 🤔 _What are the data types of Ruby? JavaScript?_
    - 🤓 Primitive
      - Ruby: None, technically (everything's an Object)
      - JS: Number, BigInt, String, Symbol, Boolean, Undefined, Null
    - 🤓 Other
      - Ruby: Number, String, Symbol, Boolean, Array, Hash
      - JS: Object
  - Building objects
    - Ruby: Do just about anything!
    - JavaScript: `{}`
  - Functions and methods
    - Function: A piece of code called by name
    - Method: A piece of code called by name that belongs to an object
    - JS: Function declarations and expressions
      - Declare a function with `function` keyword that are _hoisted_ available in the global scope
      - A function expression creates _anonymous functions_ which are not hoisted (and not available in global scope)
- Multi-paradigm language
  - Can be written in different ways (object-oriented _and/or_ functional)
  - TBC
- Scope
  - Scope: Where functions, variables, and such are visible
  - Declaration vs. Assignment
  - Global/lexical/block scopes
  - Constants
  - Functions
- Comparison and  Logical Operators
- Control Flow (`if`, `switch`, loops)
  - Looping over  arrays (`for`, `for...in`, `for...of`)
  - Looping over objects (`for`, `for...in`, `for...of`)
- Errors

### 🖋 Syntax

- Variables (`var`, `const`, `let`)
  - `var` is O.G., `const` and `let` came about with ES6
  - `var` and `let` can be reassigned, `const` can't
  - Scope: where variables are visible
    - Determined by declaration location and initialization keyword
    - Global scope: outside all curly braces `{}`
    - Local scope: inside function curly braces
    - Block scope: inside condition and loop curlies
    - `var` ignores block scope
    - `let` and `const` honors all scopes
- `;` optional, but useful, line termination
- Comments

  ```JavaScript
  // Single line comment

  /*
  Multiline comment
  */
  ```

- Functions (watch for the `return` keyword!)
  - Declarations

  ```javascript
  function add(a, b) {
    return a + b;
  };

  add(2, 3);
  ```

  - Expressions

  ```javascript
  let add = function(a, b) {
    return a + b;
  };
  ```

- Lexical operators (`+`, `-`, `*`, `/`, `=`, `===`, `!==`, `==`, `!=`)
  - `==`: equality operator, converts operands of they're not of the same type
  - `===`: strict equality operator with no type conversion
- Truthiness and Falsiness
  - Truthy: Everything except...
  - Falsey: `false`, `0`, `0n`, `null`, `undefined`, `NaN`
- Conditionals

  ```JavaScript
  let name = "Bob";
  if (name === "Bob") {
    alert("Hi, Bob!");
  } else {
    alert("Hi, Stranger...");
  };
  ```

- 🤔 _What questions do you have about JavaScript?_

## 🕵🏼‍♀️ Smart Searching

- `apple "pie"`: only return results with "pie"
- `apple -pie`: exclude results with "pie"
- `apple pie site:stackexchange.com`: only return results from stackexchange.com
- `apple * and * cream`: return fuzzy results with missing words in *

## 🧟‍♂️ Break

## ⛓ HTML, JS, and the Browser

- The script tag `<script>`
  - Inline JS can be written between tags with the `type="text/javascript"` attribute
  - External JS can be imported with the `src` attribute: `<script src=“main.js”></script>` (placement matters!)
  - Order of `<script>` elements matters
- [How Browsers Load and Process JavaScript](https://www.innoq.com/en/blog/loading-javascript/)

## 🐛 Debugging with Dev Tools

- Browser console
- `console.log('Hello World')`
- `debugger` &  breakpoints

## 🏢 The Document Object Model

>The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

[Introduction to the DOM - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

- A Web page is a document that can be displayed:
  1. In the browser window.
  2. As the HTML source.
- The DOM is a manipulable, object-oriented representation of the document!
- Look at the _Elements_ tab of your dev tools to see it!
- API = DOM + JavaScript

## 🏗 DOM Manipulation

### 🚪 Accessing the DOM

- `window` is the JavaScript interface to the DOM container
  - `window.scrollY`
  - `window.alert("Make sure you floss daily!")`
- `document` is the JavaScript interface to the DOM
  - `addEventListener()` "sets up a function that will be called whenever the specified event is delivered to the target."
  - `getElementById` "returns an Element object representing the element whose id property matches the specified string."
- 🤔 _What are other `window` or `document` methods?_ Use dev console and MDN to explore.

### 🐒 Grabbing Elements

- By ID
  - `document.querySelector(‘#unique-element')`
  - `document.getElementById('my-id')`
- By Class
  - `document.querySelectorAll('.some-shared-class')`
  - `document.getElementsByClassName('some-shared-class')`
- By Tag
  - `document.getElementsByTagName('body')[0]`
  - `document.getElementById('unique-element')`
- `get` has wider support and maybe better performance than `query`, but is not as versatile
- Think of adjustable wrench vs. fixed spanner!

### 🛠 Modifying HTML and CSS

- `document.createElement`
- `Element.textContent`
- `Element.append`
- And more!!
- 🆚 _How can we have our webpage load with a random background color_ Hint: chain methods on `document` to set color.
- 🆚 _How can we add a list of SpongeBob Squarepants characters to page?_ Hint: get parent element, create and append children.
