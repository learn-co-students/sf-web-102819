# React State, Events, and Forms 🏎

## Goals 🤼‍♂️

- [ ] Compare and Contrast Presentational vs Container Components 🥓
- [ ] Introduce and Use State 🗾
- [ ] Render Conditionally 🤔
- [ ] React Synthetic Events and Event Handlers 🏗
- [ ] Control Forms 🏢

---

## Sidenote: Exporting and Importing

- `export default` lets us export something and import it with any name we want
- We can destructure imports to grab particular classes
- If we export different things, have to import them with the same name.

```js
export default NameOfThing;
...
import AnyNameYouWant from "./JSFile";
// or...
export NameOfThing;
...
import {NameOfThing} from "./JSFile";
```

## Presentational vs Container Components 🥓

_🤔 How else can we write functional components and components in general?_
_🤓 Function declarations and function expressions! Classes that inherit/extend `React.Component`!_

```js
import React, {Component} from "react";
// ...
class App extends Component {
// ...
```

- 2 ways to distinguish components
  - Mostly overlapping
  - (But slightly different)
- Class versus Functional Components
  - This difference is focused more on syntax
  - Class components use class syntax
  - Functional components are just functions that return JSX
- Container (Smart) versus Presentational (Dumb) Components
  - Containers contain most of the programming logic and/or are used to manage state
    - Containers are usually class components as they often need state and component lifecycle methods
    - Entirely possible to write container component as functional component
      - In cases where the container needs a lot of logic
      - _But_ makes no use of state (if it makes use of state, needs Hooks)
  - Presentational components contain little-to-no logic
    - Typically almost entirely dependent on their parent components for data
- Information trickles down from parent to child in a component hierarchy via props
- Fewer, more centralized sources of data and functionality are more manageable at scale

_🤔 What method always needs to be inside class component?_
_🤓 `render`! That's it._

**If we're inheriting from another class, we need to call `super()` in the `constructor()`!**

_🤔 What's the difference between a presentational component and a container component?_
_🤓 Container components. They manage state._

_🤔 Where would we store a list of recipes?_
_🤓 Container!_

_🤔 Where would we display a recipe?_
_🤓 Presentational!_

```js
import React from "react";

const Recipe = props => {
  return <li>{props.recipeName}</li>
};

export default Recipe;
```

- Why even care about presentational components?
  - They're light-weight and reusable!
  - See: buttons

## State 🗾

### Introducing: State 🎎

- `App` will be container component, `Recipes` and `Recipe` will be presentational

_🤔 How do children components get information from their parent components?_
_🤓 Props!_

```js
// App.js
  ...
  render() {
    const recipes = ["Salami Pizza", "Tacos", "Banana Pancakes"]
    return (
      <div>
        <h1>Recipe List</h1>
        <Recipes recipes={recipes} />
      </div>
    );
  };
```

- We may want to _change_ `recipes`, so it makes more sense to make it part of `state`

```js
// App.js
class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: ["Salami Pizza", "Tacos", "Banana Pancakes"]
    }
  }
  ...
```

- What's cool about state?
  - It can be our single source of truth for our application!
  - It's a good idea to have a single source of truth to avoid bugs
- State is special attribute of an instance of a component
  - Typically accessed inside of a class component with `this.state`
  - Other attributes can be created for a component (e.g. `this.beef = "steak"`), but the name `state` is special
- State is _just an object_ containing key-value pairs
- Component **must be a class component** in order to make use of state
- `state` is reflection of the current "state" of a component. For example:
  - _Is this card currently flipped?_
  - _Should I render component X or component Y?_
  - _What data am I currently carrying?_
- Can be initialized in and out of `constructor`

```jsx
class MyComp extends React.Component {
  constructor(){
    super()
    this.state = {
      color: "red"
    }
  }

  // Or simply in the body of the class...
  state = {
    color: "red"
  }

  render(){
    return <div style={{color: this.state.color}}>The colors Duke, the colors!</div>
  }
}
```

### Using State 🔨

- Create `RecipeForm` component
- How?! Walk us through it...
  - If we want state, what kind of component?
  - What if we don't want to write `React.Component`?
  - What method do we have to have!
  - How do we make it appear below our recipes? Why?
    - If goal is to make new recipes, we need access to recipes array
  - What JSX elements do we need?
    - `htmlFor` same as HTML `for` (`for` reserved keyword in JS)

```js
import React from 'react';

class RecipeForm extends React.Component {
  render() {
    return (
      <form>
        <h2>Create a New Recipe</h2>
        <label htmlFor="recipe-name">Recipe Name</label>
        <input id="recipe-name" name="recipeName" type="text" />
        <input type="submit" value="Create Recipe" />
      </form>
    )
  }
};

export default RecipeForm;

```

- State represents paradigm shift of moving from imperative to declarative programming
- Now our form doesn't really do anything (except refresh the page)
- How do we stop this!?

```js
// RecipeForm.js
handleFormSubmit = (event) => {
  event.preventDefault();
  console.log(e.target.recipeName.value);
}
// ...
<form onSubmit={this.handleFormSubmit}>
// ...
```

- Preferrable to keep track of changes in form as they happen

```js
// RecipeForm.js
handleFormSubmit = (event) => {
  event.preventDefault();
  console.log(e.target.recipeName.value);
}
handleFormChange = (event) => {
  console.log(event.target.value)
  this.setState({recipeName: event.target.value})
}
// ...
<form onSubmit={this.handleFormSubmit} onChange={this.handleFormChange}>
// ...
```

- React is great at keeping track of small changes in state!
- Forms are a good place to keep track of state, too
- Also check out React developer tools to note changes in state and props!
  
> Whenever a problem requires some sort of DOM manipulation, the thought process should shift from obtaining/creating DOM elements to manipulating state and making your template (the JSX in `render`) depend on the values of state.

- `setState`
  - Changing `state` object by ordinary assignment does nothing
    - Mutating state directly _will_ change object’s values
    - **But** problem is that `render` function of our component is not called
    - DOM will not respond to these changes
  - We use `setState`
    - Changes `state` object
    - Calls `render` function with the newly updated state values
  - **_Gotchas_**
    - **Changing state is asynchronous**
      - Ex: `console.log` `state` value that was supposed to be set below `setState`
    - `setState` takes 2 arguments:
      1. Either object or callback that accepts a parameter of the previous state and returns an object
      2. Callback that can be called whenever `setState` finished updating state and rerendering
    - `setState` does shallow comparison
      - Even without spreading or copying state, only properties specified in object received by `setState` are changed while others remain intact
      - **Only true for that first layer of properties**: nested objects will have their values overwritten
- Simple example: Write a ternary in `render` that depends on boolean and switches between two texts: “off” and “on”

```jsx
class MyComp extends React.Component {
  state = {
    on: true
  }

  handleClick = (event) => {
    this.setState({
      on: !this.state.on
    })
  }

  render(){
    return <p onClick={this.handleClick}>{this.state.on ? "on" : "off"}</p>
  }
}
```

- _If you want to wait before showing them an event handling, you can just write a `setTimeout` inside `render` that updates state_
- _Ask them to come up with something simple of their own and build through it with the class_

_🤔 How can we pass function to child component?_
_🤓 Props! Let's pass a callback function form `App` to `RecipeForm`_

- Again, **props are how we get information from another component**.
- Initialize callback functions in the component in which you want to change state.

```js
addRecipe = (recipe) => {
  // destructure to made copy
  const newRecipeArray = [...this.state.recipes, recipe]
  this.setState({recipes: newRecipeArray})
}
```

_or_

```js
addRecipe = (recipe) => {
  this.setState(previousState => {recipes: previousState.recipes.push(recipe)})
}
```

## Conditional Rendering 🤔

- If we write JSX such that its values depend on `state`, we can use `state` as proxy for DOM, allowing _changes to state_ to **programatically manipulate** the DOM
- Examples of things to build through:
  1. A toggle that depends on a boolean
  2. Some text on the page that depends on a string in state
  3. Very important to show: a list of items that depends on an array of objects
  4. How to pass state values as props to children and how changes to state in parent can affect children whose props are determined by state

## React Synthetic Events and Event Handlers 🏗

- React Synthetic Events
  - [List](https://reactjs.org/docs/events.html)
  - Enter `debugger`
    - Examine `event` object
    - Note that even though React generates special synthetic events, these are more or less the same as your typical event objects
- React Event Handlers
  - Can only be attached to built-in JSX components (e.g. div, p)
  - Draw on your knowledge of how to use events in JS
- _How would you have handled event feature in vanilla JS?_
  - They should mention that when the event handler is triggered, a DOM element must be found/created before updating/appending it to the DOM
- Event triggering is largely the same, but the difference is:
  - Rather than manually finding and editing DOM nodes, we will eventually call `setState` 
  - Let changes to state generate the desired DOM changes
- Event handler callbacks should be written as arrow functions to avoid losing context

## Controlled Forms 🏢

> Form submission in Vanilla JS involves obtaining user input by manually grabbing the desired input elements and obtaining their the values of their `value` attributes.

- We still want access to user input in React!
- If we do not access the DOM directly, how can make user input accessible to us?
- Controlled inputs
- _The following code is a good starting point to show a piece of state monitoring the values of a form_

```jsx
 class NewThang extends React.Component {
  state = {
    author: “”
    thang: “”
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }
  handleAuthor = (event) => {
    this.setState({
      author: event.target.value
    })
  }
  handleThang = (event) => {
    this.setState({
      thang: event.target.value
    })
  }
  render(){
    return (
      <form onSubmit={handleSubmit}>
        <input placeholder=“Who are you?” onChange={handleAuthor}/>
        <input placeholder=“What’s your thang?” onChange={handleThang}/>
        <input type=“submit”/>
      </form>
    )
  }
 }
```

- After the above code, one can iterate and improve the process by:
  1. Abstracting the `onChange` handlers to a single function using the event object and `name` values on the inputs
  2. Make the inputs fully controlled by assigning the `value` to its respective value in state
  3. Clearing state `onSubmit` to clear the input fields, which illustrates the importance of making the input fully controlled (to drive this home, try removing the `value` attributes on your inputs and show how the inputs do not respond to state changes)
- Form submission should eventually take the values from state and use them to create a new object in a parent’s state. Points to drive home:
  1. How to pass a function from parent to child to update the parent’s state
  2. How holding data (e.g. array of comment objects) in state allows us to add DOM elements by simply adding to the data
  3. If the form and the components displaying the data are siblings, the only way for the data from the form to reach those components is to change state in a common ancestor

---

## Summary

### Concepts to cover again

- where to put curly brackets
- importing default vs destructuring

### What to cover

- --Presentational-- (Dumb, usually Functional) vs --Container-- (Smart, usually Class) Components
  - Container: state, single source of truth, lots of logic
  - Presentational: little to no logic, dependent on parent for data
  - Turn app into a class component, add recipe state and render form
  - State
  - Component must be a -class- component in order to make use of state
  - Can be initialized in and out of the `constructor`
  - -App will hold our list of recipes-
  - -Create RecipeForm to create a new recipe-
  - `setState()`
    - `setState()` is asynchronous 
    - NO mutating state directly! `render` function will not be called
    - If you want to use previous state or props, use a callback function for `setState()` instead of `this.state` - Because `this.state` & `this.props` may be updated asynchronously (you should not rely on their values for calculating the next state)
    - `setState` takes 2 arguments:
      1. Either an object or a callback that accepts a parameter of the previous state and returns an object
      2. A callback that can be called whenever `setState` is finished updating state and re-rendering

```js
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

- Conditional Rendering
- The  changes to state programmatically manipulate the DOM
- React Synthetic Events and Event Handlers
  - React generates special synthetic events (pretty much same as your typical event objects)
  - Event handler callbacks should be written as arrow functions to avoid losing context

```js
// App.js
import React from "react";
import Recipes from "./Recipes";
import RecipeForm from "./RecipeForm";

class App extends React.Component {
  constructor() {
    super();
    this.name = "bob"

    this.state = {
      recipes: ["Salami Pizza", "Tacos", "Banana Pancakes"]
    };

    this.addRecipe = this.addRecipe.bind(this);
  }

  addRecipe(recipe) {
    this.setState(prevState => {
      return { recipes: [...prevState.recipes, recipe] };
    });
  }

  logState() {
    console.log(this.name);
  }

  render() {
    return (
      <div>
        <h1>Recipe List</h1>
        <Recipes recipes={this.state.recipes} />
        <RecipeForm onAddRecipe={this.addRecipe} />
        <button onClick={() => this.logState()}>log</button>
      </div>
    );
  }
}

export default App;

// RecipeForm
import React, { Component } from "react";

class RecipeForm extends Component {
  state = { recipeName: "" };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onAddRecipe(this.state.recipeName);
  };

  handleChangeName = e => {
    this.setState({ recipeName: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h2>Create A New Recipe</h2>
        <div className="input-group">
          <label htmlFor="recipe-name">Recipe Name</label>
          <input
            type="text"
            id="recipe-name"
            value={this.state.recipeName}
            onChange={this.handleChangeName}
          />
        </div>
        {this.props.name}
        <br></br>
        <input type="submit" value="Create Recipe" />
      </form>
    );
  }
}

export default RecipeForm;

```
