# Hogs Review/Best Practices 🐷

## Overview 🐖

- What makes a good component? 🥇
- Syntax and Convention 🗿
- Common Gotchas 🐗
- How to think about React Performance 📐
- A Peek at React's Advanced Features 🤖
- Developer tools and learning more 🦾

---

## Architecture - What makes a good component? 🥇

- Container vs. Presentational Components
- Many small components is better than a few big components
- logic in `render` vs. extracting
- If you have a method that returns JSX, consider making it a component
- Reduce State
- Reduce options
- Avoid `style=` and `className=` by using well-named components

consider:

```html
<div style={{float: ‘left’, width: ‘80%’}}>
  Main content
</div>
<div style={{float: ‘left’, width: ‘20%’}}>
  Sidebar content
</div>
```

vs:

```html
<main>
  Main content
</main>
<sidebar>
  Sidebar content
</sidebar>
```

## Syntax and Convention 🗿

- Destructuring Props
- Spread and Rest operators
- name props well (clear, consistent, concise)
  - Use the same key/value name in your objects
- constructor vs. ES7 instance variables (`state = { count: 0 }`)
- defaultProps and function default values
- Conditional rendering: ternaries vs. short circuiting
- classnames [helper](https://github.com/JedWatson/classnames)
- separate your imports
- colocate your files
- avoid unneeded callbacks, e.g.:

```js
const isActive = el => el.active;

flights.filter(flight => isActive(flight));
flights.filter(isActive);
```

## Gotchas 🐗

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

## Performance 📐

> *Warning: Premature Optimization!* You usually don't have to think about performance issues. Don't actually do this until you need it!

### Initial load (time to interactive) vs. Update performance**

Performance improvements usually fall into two buckets: 
- improving how fast the page initially loads (TTI or Time to Interactive)
- improving how fast updates feel (e.g. there's a lag when typing into an input)

Most React Performance guides have to do with the second. You're more likely to _actually_ want to improve the first. Improving initial load is hard, because it usually means reducing your _bundle size_. That usually means thinking about webpack and the packages you are using, not about React and on-page performance.

### Update performance tips:

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

## Advanced React Features 🤖

You don't need to use these in your apps, but you should read about them in the docs and know that they exist!

- Fragment: reduce your extra divs
- PropTypes: ensure that the right kinds of props are passed into your components (Typescript and Flow are more general solutions to this problem)
- Error Boundaries: when one component has an error, limit how much damage it will do to the rest of your app
- Portal: render a child somewhere else in the DOM
- Context: pass data to your descendants, skipping intermediate children
- Refs: get access to a DOM element or React component that you're rendering

### Advanced React Patterns 🦿

- Components that add behavior instead of adding DOM elements to the page
- Composition vs. Inheritance
  - HOCs (higher-order components): functions that take in components and return components
  - render props: props that are a) React components to render or b) functions to call, to render the result
  - callable function children: children are a function to be called instead of react components

## Tools 🦾

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
