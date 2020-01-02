# React Router
## Content
- Client-side routing
- Why do we even need routes?
- What are the drawbacks to client-side routing?
- But what does React Router Actually Do?
- Setup and Components
  - Router
  - Route
  - Link
  - Switch
  - Redirect

## Client-side routing

Now that the React stack is handling routing, that means none of our routes require a new `GET` request to the backend to get that page's HTML. This allows us to enforce the "Single Page App", since we can render the new route's page without refreshing.

## Why do we even need routes?

* The user can use forward/back to navigate your app
* The user can navigate via urls
* We can make urls describe the action that the user might be taking

## What are the drawbacks to client-side routing?

* We're loading all of our frontend at once, so it might add to the initial load time
* We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

## But what does React Router Actually Do?

Ultimately, we're still in a Single-Page application. Show that you can use vanilla JS to change the route in the terminal using the following commands.

```js
window.history.pushState({}, null, 'page');
```

```js
window.history.back();
```

All router does is wrap this functionality in components that make it easy to transform the browser's URL.

## Setup and Components

You can use `create-react-app` in conjunction with `react-router`, just install with `npm install react-router-dom`.

Now, we can add the requisite components with

```js
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
```

Here are the components we use:

### Router

We'll use this in one place in our application (and one place only). Very top level, essentially listening for when the route changes, and making that info accessible.

### Route

Conditionally render a certain component based on what the route looks like.

### Link

Changes the url we see in the browser, must have a 'to' prop.

### Switch

Pick one of the following routes (the first that matches), don't look at the others (like an if/ else if/ else if).

### Redirect

Forces a redirect to a particular route. We won't use this here.
