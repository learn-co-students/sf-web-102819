# React Router 🌍

## Content

- [ ] Define client-side routing and its use in a SPA 📖
- [ ] Create a React applet with routes 🕹

---

## Motivation

### Client-side routing vs server side routing

- Server-side routing (old school): Making `GET` requests for each HTML page
- Client-side routing (new school): _Not_ making `GET` requests for HTML pages

### Why

- The user can use forward/back to navigate your app
- The user can navigate via URLs
- We can make urls describe the action that the user might be taking (REST - Representational State Transfer)

### Drawbacks

- Loading _all_ of front end at once, so it might add to the initial load time
- Routes coupled with our component structure (can be a good thing long-term)

### What It Do

- Can use vanilla JS to change the route in the console (mimic routing client side)

```js
window.history.pushState({}, null, "page");
```

```js
window.history.back();
```

- React Router simply wraps this functionality up in a package

## Setup & Components

- To install, `npm install react-router-dom` or `yarn add react-router-dom`
- Then, import!

```js
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
```

### React Router Components

- Router
  - In one place only (top level)
  - Listens for when route changes & makes that info accessible
- Route
  - Conditionally render sa certain component based on what the route looks like
- Link
  - Changes the url we see in the browser, must have `to` prop
- Switch
  - Picks one of the following routes (the first that matches)
  - _Doesn't_ look at the others (like an if/ else if/ else if or switch/case)
- Redirect
  - Forces a redirect to a particular route
  - We won’t use this here

### Using Router Components

- Wrap top-level app in `<BrowserRouter />` in `index.js`

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

- Update navbar with links going toward specific paths

```jsx
<Link to="/paintings" className="item">
  Paintings
</Link>
```

- The Link changes our URL, _but_ we still need some conditional logic that determines what happens if the route changes (**Route**)
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

---

## Takeaways

-[x] Client-side routing helps us SPA by preventing page refreshes
-[x] React Router handles client-side routing with special components
-[x] The building blocks of React Router are `<Router>`, `<Route>`, `<Link>`, `<Switch>`, and `<Redirect>`

## Resources

- [React Router Official Quick Start Guide](https://reacttraining.com/react-router/web/guides/quick-start)
- [Tyler McGinnis: Build your own React Router v4](https://tylermcginnis.com/build-your-own-react-router-v4/)
- [Medium: A Brief Overview of React Router and Client-Side Routing](https://medium.com/@marcellamaki/a-brief-overview-of-react-router-and-client-side-routing-70eb420e8cde)
- [Tyler McGinnis: Pass props to a component rendered by React Router](https://tylermcginnis.com/react-router-pass-props-to-components/)
- [React Router Docs: `<Switch>`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md)
- [React Router Docs: `<Redirect>`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md)
