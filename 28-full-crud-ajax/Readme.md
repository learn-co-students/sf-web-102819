# Full CRUD with AJAX, Part One 💣

## Goals 🦁

- [ ] Use `fetch` to retrieve data from a server 🐕
- [ ] Display `fetch` result in DOM 🐶
- [ ] Use `fetch` to send data to a server 🦅
- [ ] Identify `Promise` return value of `fetch` 🦉
- [ ] Build client-side application which interacts with database via API ☎️
- [ ] Identify client-side state vs. server-side data 🧾
- [ ] Explain use cases for server-side vs. client-side rendering ⚖️

---

## The Big Picture 🏞

> 🤔 What are some examples of web apps that load or save data asynchronously (without a page refresh)?
> 🤓 Ex: Google Maps, Salesforce CRM, Twitter

- We're trying to building Single-Page Applications (SPAs)
  - Dynamically rewrite current page; no page reloading
  - Avoid user interruptions; send data instead of HTML
  - Rely on the client
- Pros of SPAs
  - Speed
    - Server doesn't have to reload all resources
    - Only new data exchanged instead of markup + data
    - Only particular parts of page altered
    - Data stored locally
  - Adaptability
    - Separate back end can be interfaced with different front ends
    - Emulate desktop application across platforms
  - Separation of concerns
    - Data and interface developed separately
    - Side effect: easier to manage and debug
  - Any others?
- Cons of SPAs
  - Resource-intensive because of event listeners (see MacBook battery)
  - Can be slow to initially load due to frameworks
  - Harder for search engines to crawl
  - Totally dependent on JavaScript

## Fetching with `fetch` 🐕

- An API that enables JavaScript interface with HTTP pipeline (make requests)
- Facilitates SPA by making requests in the background
- Takes in resource path, returns `Promise` resolving to `Response`
  - Optional options objects as second argument
  - `Promise` must be resolved with `.then()` method

```javascript
const response = await fetch(')
```

- Back in the day... `XMLHttpRequest`
- Try using `fetch` with a free, open API

## Promises 🦉

> A Promise is an object representing the eventual completion or failure of an asynchronous operation. ... A Promise is an object representing the eventual completion or failure of an asynchronous operation.

- Asynchronicity in JavaScript

```slack
> What will the log order of the following code be?
```javascript
console.log("A");
fetch(url)
  .then(res => {
    console.log("B");
    return res.json();
  })
  .then(data => console.log("C"));
console.log("D");
```
:taco: A, B, C, D
:hamburger: A, B, D, C
:pizza: A, D, B, C
:salad: B, C, A, D
```

- A `Promise` can be pending, fulfilled, or rejected
- `.then()` makes sure a callback function will be called _after_ completion of script
- Multiple `.then()` are known as a promise chain

Compare nested callbacks...

```javascript
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

... to chained promises!

```javascript
doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
```

- Terminate promise chain with `.catch` to catch errors

## Using Results of `fetch` 🐶

- Since `fetch` returns `Promise`, resolve with `.then()`

```javascript
fetch('http://localhost:3000/pokemon').then(response => console.log(response));
```

- To extract JSON from `Response` body, call `.json()` method on `Response`
- `.json()` returns `Promise` as it takes extra time for body to completely load

```javascript
fetch('http://localhost:3000/pokemon')
  .then(response => response.json())
  .then(json => console.log(json));
```

- `fetch().then().then()` is typical chain for making and using requests
- Play around with resulting JSON by assigning to variable
- Use DOM manipulation method and `.map()` and `.join()` to format, insert data

## Break 🦔

## POSTing with `fetch` 🦅

- `fetch` can be used to not just make GET requests, but POST requests as well
- Use optional second argument to pass options object
- See docs for examples

```javascript
fetch(`http://localhost:3000/pokemon`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
```

## Building a SPA with an API ☎️

- 🐙 Let's build out this application by handling:
  - `mouseover`, `mouseout` events that flip the sprite over which mouse moves
  - `click` event on "Delete" button that removes the respective Pokemon
- 🆚 Build out solutions

## Client-side, Server-side ⚖️



---

## Takeaways

- [x] `fetch` allows us to make HTTP requests with JavaScript
- [x] `fetch` returns a `Promise` that resolves asynchronously
- [x] JavaScript can be executed asynchronously
- [x] `.then()` is a method for resolving `Promise`s
- [x] Arrow functions give us a convenient way to write callback functions

---

## Resources

- [What is a Single Page Application?](https://flaviocopes.com/single-page-application/)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN: Using Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Client-side vs. Server-side vs. Pre-rendering for Web Apps](https://www.toptal.com/front-end/client-side-vs-server-side-pre-rendering)

- In order to run the http server (front end server) you can run `python -m SimpleHTTPServer`
- To start our backend server run `json-server --watch db.json` (make sure json-server is installed `npm install -g json-server`)
