# Hogwarts: The React app for fans of prize-winning pigs

## React Week 1 Project

## Project goals:

* create an index displaying all hog tiles
* render each hog name and picture in a tile
* show the hog's details upon a user's click
* allow users to sort the hogs based on name and weight and filter the hogs that are greased

* BONUS: allow users to hide hogs (not delete them, just hide them from view!)
* BONUS: bring in pig gifs from an API
* BONUS: implement [Semantic Cards](https://semantic-ui.com/views/card.html) for each hog

## Project requirements:

* functional and container components (at least one of each, likely you'll have several of each)
* components using state and props
* re-renders based on client-side events

## What we have so far:

* a file containing all our hog data imported into App.js
* a folder of hog images
* a functional nav component rendered in our App.js

## Trying to figure out where to start?

There are lots of ways to build this project, and while some ways are better than others, there is no 'right' way! Start by thinking about which components you'll be building and whether they'll be presentational or container components.

Once you've decided on your components, use the MVP approach. What's the simplest thing we can render to the page? Perhaps a paragraph tag displaying each hog's name? Which components would this involve?

When building your filter and sort functionalities, consider what you want to store in state and where that state should be stored. How can a child component pass information up to its parent component? Think about what needs to happen upon each index rerender. What if a user filters out ungreased pigs, and then wants the remaining pigs sorted by weight?

Be sure to use good programming practices, such as clear variable names and single responsibility functions. React apps can quickly become tangled and hard to debug if built without best practices!

## Styling

We've imported the Semantic library to keep your piggies looking pretty. To keep your hogs in columns, make sure their parent container has the class "ui grid container". The children in the columns should have class "ui eight wide column". (Semantic uses a grid with a default of 16 units wide, so 8-wide will make two columns and 4-wide will make 4 columns.) Semantic will take care of assigning the columns for you. You can also try implementing [Semantic Cards](https://semantic-ui.com/views/card.html) for each hog.

# Hogs Review/Best Practices
## Overview
- What makes a good component?
- Syntax and Convention
- Exercise - refactoring a big component
- Common Gotchas
- How to think about React Performance
- A Peek at React's Advanced Features
- Developer tools and learning more


## Other Questions/Answers
- What functions should go inside the class, which ones outside?
	- functions that relate to the class inside, functions that are more general can go outside or even in a helper file
- Add fetch to `BanishedHogCard`
```js
state = {imgSrc: null}
//<div className="image">
//   <img src={this.state.imgSrc} alt="bacon" />
//</div>

componentDidMount = () => {
    fetch(
      "http://api.giphy.com/v1/gifs/random?tag=bacon-sausage-pork&rating=g&api_key=y7uQOLStw37upyo5FpJwhOTaPPaqS6vU"
    )
      .then(res => res.json())
      .then(json =>
        this.setState({
          imgSrc: json.data.image_original_url
        })
      );
};
```
- Make functions more reusable
	- factor our `fetchGif` in `BanishedHogCard` into separate function so that we can onClick also fetch a new one


## Architecture - What makes a good component?
- Container vs. Presentational Components
	- presentational components are easier to reuse etc
- Many small components is better than a few big components
	- easier to reuse
- logic in `render` vs. extracting
	- extract stuff in render into separate methods outside render (maybe even helper methods, look at `App`, we might factor out sort hogs)
```js
  sortHogs = () => {
    let previouslyFiltered = this.filterGreased();
    switch (this.state.sortBy) {
      case "weight":
        return previouslyFiltered.sort((a, b) => {
          return a.weight - b.weight;
        });
      case "name":
        return previouslyFiltered.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      default:
        return previouslyFiltered;
    }
  };
```
- If you have a method that returns JSX, consider making it a component
	- instead of having that logic in render
- Reduce State
	- easier to deal with, easier to reuse, component is harder to reason about, if a component only has props the component is more predictable
- Reduce options
	- if you have a button component, that can change color, font, size, shows left, or right, does something on click, etc, you might consider breaking it out into different components
- Avoid `style=` and `className=` by using well-named components

consider:

```
<div style={{float: ‘left’, width: ‘80%’}}>
  Main content
</div>
<div style={{float: ‘left’, width: ‘20%’}}>
  Sidebar content
</div>
```

vs:

```
<Main>
  Main content
</Main>
<Sidebar>
  Sidebar content
</Sidebar>
```

### Syntax and Convention
- Destructuring Props
	- In `HogTile` destructure props and state
```js
const { hog, hog: { name, specialty }, handleBanishedClick } = this.props;
const { clicked } = this.state;
```
- Spread and Rest operators
	- In `App`, `banishHog` use `this.setState({ banished: [...this.state.banished, hog] });`
- name props/components well (clear, consistent, concise)
	- Use the same key/value name in your objects
	- in `App` rename `banishHog` to `handleBanishHog`
	- `HogTile` and `BanishedHogCard` should be more consistent, rename `HogTile` to `HogCard`
- constructor vs. ES7 instance variables (`state = { count: 0 }`)
	- refactor in `App`
- defaultProps and function default values
	- In `BanishedHogCard` create a default name `Babe`
- Conditional rendering: ternaries vs. methods vs. short circuiting vs. IIFEs
	- In app line 90 use &&
- classnames [helper](https://github.com/JedWatson/classnames)
	- `import classNames from “classnames”;`
	- `const greasedClassName = classNames(“normal”, { greased: greased });`
	- `className={greasedClassName}`
- separate your imports
- colocate your files
	- Move Banished hog stuff into one (BanishedHogs), and hogs into one folder (Hogs)
- avoid unneeded callbacks, e.g.:

```
const isActive = el => el.active;

flights.filter(flight => isActive(flight));
flights.filter(isActive);
```

### Gotchas
- https://github.com/timhwang21/react-gotchas
- capitalize ComponentNames
- set `displayName` property of component
- JSX Comments `{ /* comment  */ }` (not `// <Component>`)
- setting state from props (but if you do, use `getDerivedStateFromProps` not `componentDidUpdate`)
- setState is asynchronous
  - second arg to setState is called as a callback after state is actually set
  - if you pass a function to `setState`, it can return a new state
- short circuiting pattern leads to `"0"` rendering (coerce conditions to booleans if you want to use `&&`)

```
{ myCondition && <ComponentToShow> }
```

Renders '0' if `myCondition` is 0, because

```
0 && Something
=> 0
```

### Performance
> *Warning: Premature Optimization!* You usually don't have to think about performance issues. Don't actually do this until you need it!

**Initial load (time to interactive) vs. Update performance**

Performance improvements usually fall into two buckets: 
- improving how fast the page initially loads (TTI or Time to Interactive)
- improving how fast updates feel (e.g. there's a lag when typing into an input)

Most React Performance guides have to do with the second. You're more likely to _actually_ want to improve the first. Improving initial load is hard, because it usually means reducing your _bundle size_. That usually means thinking about webpack and the packages you are using, not about React and on-page performance.


**Update performance tips:**
- Use the production build of React - it's different (and faster!) than the development build
- implementing `shouldComponentUpdate` is the heart of most react performance debugging
- extending PureComponent gives you a default implementation that will often lead to speedups
- indexes as array keys are slow -- unique, stable, predictable keys are fast
- Inline arrow functions get created on every render as a new object (slow) vs. methods on the class get declared once (`this.handleSomething`) 


Resources and Tools:
- See more at https://reactjs.org/docs/optimizing-performance.html
- [why did you update](https://github.com/maicki/why-did-you-update)
- [using the chrome dev tools](https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad)
- [using the react dev tools profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)


### Advanced React Features

You don't need to use these in your apps, but you should read about them in the docs and know that they exist!

- Fragment: reduce your extra divs
- PropTypes: ensure that the right kinds of props are passed into your components (Typescript and Flow are more general solutions to this problem)
- Error Boundaries: when one component has an error, limit how much damage it will do to the rest of your app
- Portal: render a child somewhere else in the DOM
- Context: pass data to your descendants, skipping intermediate children
- Refs: get access to a DOM element or React component that you're rendering

### Advanced React Patterns
- Components that add behavior instead of adding DOM elements to the page
- Composition vs. Inheritance
  - HOCs (higher-order components): functions that take in components and return components
  - render props: props that are a) React components to render or b) functions to call, to render the result
  - callable function children: children are a function to be called instead of react components

### Tools

There are lots of awesome tools you can use that can make your React development process faster, safer, and easier.

- React Dev Tools
- Prettier
- Linter
- Snippets
- Syntax Highlighting
- React Storybook

### Learning and Improving
- React Docs
- awesome-react
- https://github.com/kylpo/react-playbook
