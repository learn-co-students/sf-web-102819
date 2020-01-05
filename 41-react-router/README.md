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

# React Router
## Client-side routing vs server side routing
- Server side routing: Rails, making `GET` requests
- Client-side routing: React doesn’t make `GET` requests (to get an html page)

## Why do we even need routes?
- The user can use forward/back to navigate your app
- The user can navigate via urls
- We can make urls describe the action that the user might be taking (REST - Representational State Transfer)

## What are the drawbacks to client-side routing?
- We’re loading all of our frontend at once, so it might add to the initial load time
- We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

## But what does React Router Actually Do?
- You can use vanilla JS to change the route in the console (mimic routing client side)
- React router simply wraps this functionality up in a package

```js
window.history.pushState({}, null, "page");
window.history.back();
```

## Setup & Components
- To install run `yarn add react-router-dom` & import
```js
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
```

### React Router Components:
- Router
	- Use this in one place only (top level) - listening for when route changes & making that info accessible
- Route
	- Conditionally render a certain component based on what the route looks like.
- Link
	- Changes the url we see in the browser, must have a ‘to’ prop.
- Switch
	- Pick one of the following routes (the first that matches), don’t look at the others (like an if/ else if/ else if).
- Redirect
	- Forces a redirect to a particular route. We won’t use this here.

## Using the Router Components
- Wrap your top-level app in the router in `index.js`:
```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

- Update navbar with links that go towards specific paths.
```jsx
<Link to="/paintings" className="item">
  Paintings
</Link>
```

- The Link changes our URL but we need some conditional logic that determines what happens if the route changes (**Route**)
- In `App.js`, add something that looks like this (without exact):
```jsx
<Route exact={true} path="/" component={About} />
<Route path="/login" component={Login} />
<Route path="/paintings/new" component={PaintingsNew} />
<Route path="/paintings" component={PaintingsContainer} />
```

- add `exact` to “/“
- use Switch component to pick the first one that matches
```jsx
<Switch>
  <Route path="/paintings/new" component={PaintingsNew} />
  <Route path="/paintings" component={PaintingsContainer} />
  <Route path="/login" component={Login} />
  <Route path="/" component={About} />
</Switch>
```

### Nested Routes/Dynamic Routes
```jsx
<Route exact path="/" component={About} />
<Route path="/login" component={Login} />
<Switch>
  <Route path="/paintings/new" component={PaintingsNew} />
  <Route path="/paintings/:slug" render={(props) => {
    return <PaintingShow painting={p} />
  }} />
  <Route path="/paintings" component={PaintingsContainer} />
</Switch>
```

- because the painting we want to pass in is reliant on all paintings, we need to move this switch statement to **PaintingsContainer**
- also, we need to be able to pass along methods, so refactor this route:
```jsx
<Route
  path="/paintings"
  render={() => {
    return (
      <PaintingsList
        handleDelete={this.handleDelete}
        handleVote={this.handleVote}
        paintings={this.state.paintings}
      />
    );
  }}
/>
```

- hook up link for More info in Painting component
```js
<Link to={`/paintings/${props.painting.slug}`}>More Info</Link>
```

- You can have `Switch` anywhere, including inside a component. Here, you can catch specific paintings with a slug via:
```jsx
<Route
  path="/paintings/:slug"
  render={props => {
    const painting = this.state.paintings.find(
      p => p.slug === props.match.params.slug
    );

    return <PaintingShow painting={painting} />;

    // return painting ? (
    //   <PaintingShow painting={painting} />
    // ) : (
    //   <h1>Loading...</h1>
    // );
  }}
/>
```

- add ternary to make sure we have a painting
