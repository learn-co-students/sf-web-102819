# Intro To React
## Current HTML/JS File/Folder Structure
- We need to link our JS to our HTML File
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

- To open the app we open the `index.html`

### Adding Vanilla JavaScript
- We can select & add elements to our page via JS
```js
const siteTitle = document.createElement('h1');
siteTitle.textContent = 'Recipe List';

document.getElementById('root').appendChild(siteTitle);
```

## Adding React to Our Project
### Importing React Libraries
- We can get React from a CDN
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

### Running our app
- React & React DOM now don’t come from our script tags anymore
- The Webpack dev server (with live reloading) will create a build directory in memory which contains everything we need
- To start our server we can run `yarn start` (or `npm run start`)


## Building Our Application
- We need to import React and ReactDOM whenever we want to use them

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';

const siteTitle = React.createElement('h1', {}, 'Recipe List');

ReactDOM.render(siteTitle, document.getElementById('root'));
```

### Components in React
- Components in React tend to be in Pascal Case
- We can link components together by importing/exporting them
- Usually our components will sit in a `components` folder inside `src`
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

## React Props
- Props are a way to pass information from one component to another
- We pass key/value pairs to our child component that can pick those up via props
```js
// index.js
ReactDOM.render(<App appTitle="Recipe List" />, document.getElementById('root'));

// App.js
function App(props) {
  return <h1>{props.appTitle}</h1>;
}
```


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
