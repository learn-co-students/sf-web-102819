# Intro To React 

## Goals

- [ ] Set up environment of React app
- [ ] Build React components
- [ ] Pass information between components with props

---

## Current HTML/JS File/Folder Structure

- Need to link our JS to our HTML File

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Recipe List</title>
  </head>
  <body>
    <div id="root">Nothing To See Here</div>
    <script src="./index.js"></script>
  </body>
</html>
```

- To open the app, open the `index.html`

### Adding Vanilla JavaScript

- We can select & add elements to our page via JS

```js
const siteTitle = document.createElement('h1');
siteTitle.textContent = 'Recipe List';

document.getElementById('root').appendChild(siteTitle);
```

## Adding React to Our Project

### Virtual DOM

- React uses something called the Virtual DOM
- The Virtual DOM is a representation (copy) of the real DOM, but it’s much easier/faster to manipulate
- Whenever we want to make changes in our DOM, React figures our what has changed and only changes that element in the DOM

### Importing React Libraries

- We can get React from a Content Delivery Network (CDN)
  - Pros
    - Availability is not your problem (if the CDN is good)
    - High speed (content delivered to servers closest to users in CDN network)
  - Cons
    - May cost more
    - External support

```html
...
<body>
  <div id="root">Nothing To See Here</div>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="./index.js"></script>
</body>
...
```

- `react` package holds the source code for components, state, props and all the code known to us as React
- `react-dom` package enables React to manipulate the DOM 

> We need both React (determines how we interact with React) and React-DOM (allows us to render React to the browser). Having separate libraries makes React more modular (can also be used in React Native).

### Creating Elements With React (Not Vanilla JS)

```js
const siteTitle = React.createElement('h1', {}, 'Recipe List');

const rootDiv = document.getElementById('root');
ReactDOM.render(siteTitle, rootDiv);
```

- If we log the React element `siteTitle` we can see that it’s just an object (in vanilla JS we were dealing with nodes)
- `ReactDOM.render` takes 2 arguments, the element we want to render & where we want to render it

## A Better File/Folder Structure (And Running Our App in A Server)

### Setting Up New File/Folder Structure

- We move our files around a little and add a `package.json` (similar to a `create-react-app` folder structure)

```
public // Entry point of our application
	index.html
src // This is where our components go
	index.js
package.json // Specifying dependencies
```

```json
// package.json
{
  "name": "recipe-list",
  "version": "0.1.0",
  "dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.2.0"
  },
  "scripts": {
    "start": "react-scripts start"
  }
}
```

- Let’s look at the `package.json`:
	- We specify **name**/**version** of the app
	- **Dependencies**, with their respective versions
	- **Scripts** that we want to run (e.g. start, build, test)

### Installing Dependencies

- Run `yarn` (or `npm install`) -> This will give us a `node_modules` folder (this is where all of our dependencies are installed) and a `yarn.lock` (or `package.lock.json`) file (keeps track of dependency versions)
- _Sidenote:_ Yarn and NPM
  - Similarities
    - Both are package managers for Node.js
    - Both are open source
    - Both use CLIs
  - Differences
    - NPM is the default package manager for Node.js
    - Yarn is a newer package manager made by Facebook engineers
    - NPM installs from one source, Yarn multiple
    - Yarn may be faster online
    - Yarn caches downloads; packages do not need to be redownloaded for new pacakges
    - Different security 

### Running our app

- React & React DOM now don’t come from our script tags anymore
- The Webpack dev server (with live reloading) will create a build directory in memory which contains everything we need
- To start our server we can run `yarn start` (or `npm run start`)

## Building Our Application

- We need to import React and ReactDOM in our .js files whenever we want to use them

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';

const siteTitle = React.createElement('h1', {}, 'Recipe List');

ReactDOM.render(siteTitle, document.getElementById('root'));
```

### Components in React

> Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

> Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

- _Convention:_ Component names in React in Pascal Case (CapitalizedCamelCase)
- Link components together by importing/exporting them
- _Convention:_ Components sit in a `components` folder inside `src`
- Every component in React is a function (this can take different shapes)

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
```

```js
// App.js
import React from 'react';

function App() {
  return <h1>Recipe List</h1>;
}

export default App;
```

- Inside of our components we are using something called JSX…

### JSX

> This funny tag syntax is neither a string nor HTML. It is called JSX, and it is a syntax extension to JavaScript.

- A way to combine HTML & JS
- In order to use JSX we need to import React
- In the background React creates elements for us from the JSX
- These 2 are equivalent:

```js
// createElement
function App() {
  return React.createElement('h1', {}, 'Recipe List');
}

// JSX
function App() {
  return <h1>Recipe List</h1>;
}
```

- To include JS, wrap it in `{}`

```js
function App() {
  const appTitle = 'Recipe List';

  return <h1>{appTitle}</h1>;
}
```

> Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both. 

## React Props

> Whether you declare a component as a function or a class, it must never modify its own props.

- Properties (props) are a way to pass information from one component to another
- We pass key/value pairs to our child component that can pick those up via props

```js
// index.js
ReactDOM.render(<App appTitle="Recipe List" />, document.getElementById('root'));

// App.js
function App(props) {
  return <h1>{props.appTitle}</h1>;
}
```

> React is pretty flexible but it has a single strict rule: All React components must act like pure functions with respect to their props.

## Adding More Components

-  Add `RecipeList.js` and `Recipe.js`

```js
// App.js
import React from 'react';
import RecipeList from './RecipeList';

function App(props) {
  return (
    <div>
      <h1>{props.appTitle}</h1>
      <RecipeList />
    </div>
  );
}

export default App;


// RecipeList.js
import React from 'react';
import Recipe from './Recipe';

function RecipeList() {
  const recipes = ['Salami Pizza', 'Cesar Salad', 'Pasta Carbonara'];

  return (
    <ul>
      {recipes.map(recipe => {
        return <Recipe recipeName={recipe} />;
      })}
    </ul>
  );
}

export default RecipeList;


//Recipe.js
import React from 'react';

function Recipe(props) {
  return <li>{props.recipeName}</li>;
}

export default Recipe;
```

---

## Takeaways

-[x] React, ReactDOM, and our component JS files must be imported and/or exported to create React app
-[x] Components are functions that return JSX elements
-[x] Props are 

## Resources

- [Pros and Cons of CDN](https://internetdevels.com/blog/pros-and-cons-of-cdn)
- [NPM vs Yarn](https://stackshare.io/stackups/npm-vs-yarn)
- [React Docs: Getting Started](https://reactjs.org/docs/getting-started.html)
