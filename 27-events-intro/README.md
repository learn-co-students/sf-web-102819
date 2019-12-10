# Browser Events 🎟

## Goals 🦧

- [ ] Define a Web Event 🎞
- [ ] Listen and Respond to Events 🦻🏼
- [ ] Handle Forms in JavaScript 💼
- [ ] Visualize Event Bubbling and Delegation 🧼
- [ ] BONUS: Distinguish between types of functions 🌈

---

## What are Web Events? 🎞

> "In the case of the Web, events are fired inside the _browser window_, and tend to be attached to a specific item that resides in it — this might be a single HTML element, set of HTML elements, the HTML document loaded in the current tab, or the entire browser window.

- Types of events
  - User clicks mouse on element or hovers cursor over element.
  - User presses a key on the keyboard.
  - User resizes or closes browser window.
  - Web page finishes loading.
  - **Form submitted.**
  - Video is played, or paused, or finishes playing.
  - An error occurrs.
- [There are a lot of events that can be responded to.](https://developer.mozilla.org/en-US/docs/Web/Events)

> "Each available event has an **event handler**, which is a block of code (usually a user-defined **JavaScript function**) that will be run when the event fires. When such a block of code is defined to be run in response to an event firing, we say we are **registering an event handler**. Note that event handlers are sometimes called **event listeners** — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener **listens** out for the event happening, and the handler is the code that is run in response to it happening." - [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

- We can tell JavaScript to listen for a certain event and invoke a **callback** function when event occurs:

```js
const firstBtnOnPage = document.querySelector('button');

firstBtnOnPage.addEventListener('click', function() {
  console.log('BUTTON WAS CLICKED');
});
```

> 🤔 _What do these four lines of code code?_
> 🤓 Here, we tell `addEventListener` to invoke the **anonymous function** passed as the second argument **_when_** the event fires; we're waiting for something to happen then **responding** to this event.

## Listening for Events 🦻🏼

- JavaScript allows us to [traverse the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) and find elements.
- Assuming our HTML looks like this:

```html
<div id="comments">
  <h3>Comments</h3>
  <form id="comment-form">
    <div class="field">
      <input id="new-comment" type="text" placeholder="New Comment" />
      <input type="submit" class="btn" value="Submit" />
    </div>
  </form>
  <div id="commentsContainer">
  </div>
</div>
```

> 🤔 _How can we grab the `comment-form` and listen for events on it?_
>🤓 We can grab the `comment-form` and listen for events on it like so:

```javascript
const commentForm = document.getElementById('comment-form');
// OR querySelector
// const commentForm = document.querySelector('#comment-form');
```

- Something to look out for. 
  - If we are loading our js files in the `head` tag of our HTML, there is a chance that the JavaScript code we have written will start executing **before our HTML has been loaded and parsed by the browser**. 
  - This might cause some element selectors to return `null`. As a precaution, we can listen for the `DOMContentLoaded` event.
  - "The `DOMContentLoaded` event is fired when the initial HTML document has been completely loaded and parsed" - [MDN DOMContentLoaded Reference](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded). Let's add this to our code:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form')

})
```

> 🤔 _What do these 3 lines of code mean?_
> 🤓 In the snippet above, we are adding an **event listener** to the document and listening for the `DOMContentLoaded` event. When that event is fired, the anonymous function passed to `addEventListener` will be invoked.

- "`addEventListener()` sets up a function that will be called whenever the specified `event` is delivered to the target. Common targets are HTML `Element`, `Document`, and `Window`" - [MDN `addEventListener` Reference](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

- Now that we're waiting for our DOM content to load, let's listen for a `submit` event on our form:
  - "The `submit` event is fired when a form is submitted.... Note that `submit` is fired **only** on the form element, not the button or submit input. (Forms are submitted, not buttons.)" - [MDN Article on the `submit` event](https://developer.mozilla.org/en-US/docs/Web/Events/submit)

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', function(event) {
    console.log(event);
  });
});
```

- If we try adding something to the form and clicking submit, we'll see our `console.log` for a second then it will disappear.

![](https://media.giphy.com/media/1L5YuA6wpKkNO/giphy.gif)

---

## Functions: Declarations, Expressions, and More 🌈

> 🤔 What is a function?
> 🤓 A function is a block of code that can be called by name.

- Three things you can do with variables:
  - Declare: create a variable and establish its type
  - Assign: establish the value of a variable
  - Initialize: create a variable and assign its value
- Declaration in programming: introducing a name (sometimes with meaning)

### Function Declarations 📜

```javascript
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  };
};
```

- Function declarations == definitions == statements
- Reminder: Statements and Expressions
  - Statements are anything that can make up a line of code.
  - Statements do something.
  - Expressions lines of code that can be reduced to some value.
  - Expressions produce values.
  - The line can be blurry.
- Function declaration = `function` + name + list of params + statements
- Function declarations are _hoisted_ to the top of the enclosing function or global scope.

```slack
> Which of the following code snippets feature a correct JavaScript initialization?
:apple: `num = 6;`
:banana: `let num = 6;`
:tangerine: `let num;`
:kiwifruit: `num;`
```

### Quick Note on Hoisting 🏗

- Hoisting: a _way of thinking_ about how JavaScript is run (not reality)
- Reality: variable and function declarations are stored in memory during compile phase (before execution phase)
- Hoisting: variable and function declarations are "moved" to the top of your code
  - **Only declarations are hoisted**_, not initializations..._

```slack
> Which code snippet will return a value that's not undefined?
:mountain:
```
console.log(num);
var num;
num = 6;
```
:beach_with_umbrella:
```
num = 6;
console.log(num);
var num;
```
```

### Function Expressions 📺

```javascript
const isEven = function(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  };
};
```

- Assigning a variable the value of a function
- All function expressions are anonymous (they have no name)
- Function expressions can be immediately executed (useful for callback functions)
- Function expressions can be passed as arguments to other functions

### Callback Function ☎️

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', function(event) {
    console.log(event);
  });
});
```

- A way to make sure certain code doesn't execute until other code is finished
- Functions that are passed to other functions as arguments

### Arrow Function (Expression)s ➡️

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', (event) => {
    console.log(event);
  });
});
```

- New with ES6 (2015)!
- Shorter!
- `this` (think `self`) has the value of the enclosing lexical scope
- Other details to be covered later!

Go from:

```javascript
elements.map(function(element) {
  return element.length;
});
```

to:

```javascript
elements.map(element => element.length);
```

- Concise body with implicit return
- Block body with explicit return

### Functions On the Go 🏃🏿‍♂️

- [x] Function declarations are hoisted to the top of their scope
- [x] Function expressions are anonymous and can be immediately executed, but they are not hoisted
- [x] Callback functions are functions passed as arguments to other functions that to be executed with/after the higher-order functions' code
- [x] Arrow functions are a sugary syntax for function expressions that have fewer features and a `this` value of the enclosing lexical scope

---

## Break 🧟‍♀️

## Dealing with Forms 💼

![request/response cycle](https://developer.mozilla.org/files/4291/client-server.png)

> 🤔 What happens when we submit a form?
> 🤓 [Forms][mdn-forms] will attempt to make an HTTP `POST` request on **submission**. Recall from Mod2 that our forms would send a `POST` request that was then handled by our controller (remember HTTP and the request/response cycle?). If we give our `form` an `action` attribute, it will try to `POST` to the endpoint specified by the `action` attribute:

```html
<form id="comment-form" action="/hotdog">
  <div class="field">
    <input id="new-comment" type="text" placeholder="New Comment" />
    <input type="submit" class="btn" value="Submit" />
  </div>
</form>
```

> 🤓 This form ⬆️ will try to send a `POST` request to `/hotdog`.
> 🤓 If our form **does not have an action attribute** it will attempt to `POST` to the URL we are currently on, making it **appear as though** our page is being refreshed. **Even though it looks like the page is being refreshed, that is not technically what is happening. The form is sending a POST request out into the void...**

- Our JS app is not currently sending data to a server. 
- We need a way to **prevent** this **default** action of submitting the form...

![spongebob and patrick contemplate HTML forms](https://media.giphy.com/media/TPl5N4Ci49ZQY/giphy.gif)

- Let's tell our **event handler**––our callback function––to `preventDefault`:

```js
document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form')
  commentForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING
    console.log(event.target) //form
  })
})
```

- Key points about the `event` object passed to `formSubmitEventHandler` as a parameter:
  - `event.target` refers to the **HTML Element** that dispatched the event. 
    - For example, if I tell my app to listen for `click` events and the user clicks on a `p` tag, `event.target` will be the `p` tag. If the user clicks on a `button` the `event.target` will be the button. 
    - In our case, the `form` is causing the `submit` event to fire.
  - _Strongly recommendation_ **(burn into your memory)**: 
    - HTML forms will attempt to send a POST request. Any **child** of an HTML form such as an `<input/>` or `<button></button>` will **cause the form to submit**. 
    - YOU DO NOT WANT TO LISTEN FOR A CLICK EVENT IN A FORM; YOU SHOULD BE LISTENING FOR THE `submit` EVENT!!! **super important lol**

> "The Event interface represents any event which takes place in the DOM; some are user-generated (such as mouse or keyboard events), while others are generated by APIs (such as events that indicate an animation has finished running, a video has been paused, and so forth). There are many types of events, some of which use other interfaces based on the main Event interface. Event itself contains the properties and methods which are common to all events." - [MDN Article on `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)

![learn to use the internet](https://media.giphy.com/media/SPZFhfUJjsJO0/giphy.gif)

- We need user's _form_ input. 
  - Stored in the `input` tag **inside the form**. 
  - Referring back to `form` we see `input` is **child** of `form` itself:

```html
<form id="comment-form" action="/hotdog">
  <div class="field">
    <input id="new-comment" type="text" placeholder="New Comment" />
    <input type="submit" class="btn" value="Submit" />
  </div>
</form>
```

- Since `event.target` is `comment-form` itself, grab input using `querySelector` or `getElementById`:
- 🆚 _How can we grab the value of the event target, put it in a new paragraph element, and append it to the `div#commentsContainer?`_

```javascript
document.addEventListener('DOMContentLoaded', function() {

  const commentForm = document.getElementById('comment-form')

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING

    const userInputField = event.target.querySelector('#new-comment')
    //OR document.querySelector('#new-comment')

    const userInputString = userInputField.value
  })

})
```

- `userInputField` gives us whole `input` element.
  - We only care about user's new comment.
  - Grab the `value` attribute: whatever comment the user typed into the field. 
  - Refer to the [MDN Docs for `input` tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

- Let's use the info the user typed into the form to add their comment to the page:

```js
document.addEventListener('DOMContentLoaded', function() {
  const commentsContainer = document.getElementById('commentsContainer');
  const commentForm = document.getElementById('comment-form');

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault() //stop form from POSTING

    const userInputField = event.target.querySelector('#new-comment');
    const userInputString = userInputField.value;
    const commentPTag = document.createElement('p');
    commentPTag.textContent = userInputString;
    commentsContainer.appendChild(commentPTag);
  });
});
```

- "In an HTML document, the `document.createElement()` method creates the HTML element specified by `tagName`." - [MDN Article on `createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  - In other words, calling `document.createElement('p')` will create a `p` tag.
  - This tag is an HTML object that we can _manipulate_ using JavaScript. We can change the style, or give it a particular [`textContent`][mdn-text-content] as a string.
- We can then `append` that `p` tag to the DOM by calling `commentsContainer.appendChild(commentPTag)`. 
- Note that `commentsContainer` is declared at the top of our function.

## Event Bubbling and Event Delegation 🧼

- Given a series of buttons deeply nested in some `<div></div>` tags on our page:

```html
<div id="helicopter-parent">
  <div>
    <br>
    <div>
      <br>
      <div>
        <p>HI</p>
        <div>
          <button class="btn" data-name="alert">Alert ME</button>
          <button class="btn" data-name="log">Console Log something</button>
          <button class="btn" data-name="error">Console Error</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

- How might we listen for events on those buttons?
- We **could** find all the buttons, loop over that collection and attach several event listeners for our buttons 😔. There must be a better way!™

![event delegation diagram](https://javascript.info/article/bubbling-and-capturing/eventflow@2x.png)

- The diagram above outlines the flow of JS events from the target all the way up the DOM (tree) to the top-most node, the `Document`
- **Every HTML element will know about everything that happens to its children.**

- Instead of iterating over the buttons and attaching duplicate event handlers, we can create **One** Event Handler to Rule Them All™:

```js
const helicopterNode = document.getElementById('helicopter-parent')

helicopterNode.addEventListener('click', function(event) {
  console.log(event.target) //event target will be whatever node was clicked
})
```

- Now we can introduce some control flow to our click handler and decide what to do based on which button was clicked:

```js
helicopterNode.addEventListener('click', function(event) {
  // i do not need to prevent the click default action
  //event.target is the node that was clicked
  // our buttons have a key of dataset -> { name: 'alert' }
  // i am checking the value of button.dataset.name and deciding what to do based on what i find

  if (event.target.dataset.name === 'alert') {
    window.alert('HI')
  } else if (event.target.dataset.name === 'log') {
    console.log('HI')
  } else if (event.target.dataset.name === 'error') {
    console.error('HI')
  }
})
```

- _nice_

![nice](https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif)

---

## Takeaways 💎

- [x] A
- [x] B
- [x] C

---

## External Resources:

- [MDN Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN DOMContentLoaded Reference](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)
- [MDN `addEventListener` Reference](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Article on Sending Form Data][mdn-forms]
- [MDN Article on `Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [MDN Article on the `submit` event](https://developer.mozilla.org/en-US/docs/Web/Events/submit)
- [MDN Article on `input` tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))
- [MDN Article on `createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN Article on `textContent`][mdn-text-content]
- [MDN Article on Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [JavaScript.info Article on Event Bubbling](https://javascript.info/bubbling-and-capturing)

[mdn-forms]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data
[mdn-text-content]: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
