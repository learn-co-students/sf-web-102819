# React Component Lifecycle 🌱

## Goals 🌳

- [ ] Review the React component lifecycle
- [ ] *constructor(props)*
- [ ] *render()*
- [ ] *componentDidMount()*
- [ ] *componentDidUpdate()*
- [ ] *componentWillUnmount()*

---

## Theory 🧬

- [React component lifecycle graphic](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- `Mounting -> Updating -> Unmounting` similar to `Birth -> Growth -> Death`
- `render()` and `constructor()`: lifecycle methods!
  - Add `console.log` to each component
  - `console.log(“%c Parent Constructor”, “color: blue”)`
  - Add to `constructor`, `render`, `componentDidMount`
- It goes from the top down for **constructor** and then the bottom up for **mounting** and **updating**
  - The children have to finish rendering before they can signal to the parent that they are done, then the parent is done as well and calls componentDidMount
- Lifecycle methods
  - **componentDidMount** (only runs once): good for fetch; `render` already shows something on the page, after which we can render more stuff from the fetch
  - **componentDidUpdate**: takes 2 arguments, `prevProps`, `prevState`. **Beware setting state**, might be in an infinite loop
  - **componentWillUnmount**: remove setInterval etc, clean up

- Rendering vs Mounting
  - Render happens _before_ mounting, returning the elements that are supposed to be mounted to the DOM*
  - *Mounting is adding the actual elements to the DOM*
  - *Mounting only happens ONCE, rendering can happen multiple times*

## Practice (Ticker) 🦠

- **Update ticker random number**
	- componentDidMount setInterval to call updateTicker (which sets random number state)
- **Change ticker color**
	- create state color in ticker
	- `style={{ color: this.state.color }}`
	- componentDidUpdate in ticker to change ticker color if `this.props.value > prevProps.value`
- **Set Interval and unmounting**
	- Add button to remove ticker component (`showTicker` value in state `onClick={() => this.setState({ showTicker: !this.state.showTicker })}`)
	- Add interval to state in container and remove on unmount in ticker

```js
import React, { Component } from "react";
import Ticker from "./Ticker";

class TickerContainer extends Component {
  state = { value: 0, showTicker: true, interval: null };

  updateTickerValue = () => {
    this.setState({
      value: Math.floor(Math.random() * 100)
    });
  };

  componentDidMount() {
    const interval = setInterval(() => {
      this.updateTickerValue();
      console.log("running the ticker");
    }, 1000);

    this.setState({ interval });
  }

  removeInterval = () => {
    clearInterval(this.state.interval);
  };

  render() {
    return (
      <div className="box">
        <button
          onClick={() => this.setState({ showTicker: !this.state.showTicker })}
        >
          Stop Ticker
        </button>
        {this.state.showTicker && (
          <Ticker
            value={this.state.value}
            removeInterval={this.removeInterval}
          />
        )}
      </div>
    );
  }
}

export default TickerContainer;


import React, { Component } from "react";

class Ticker extends Component {
  state = {
    color: "black"
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value > prevProps.value) {
      this.setState({
        color: "green"
      });
    } else if (this.props.value < prevProps.value) {
      this.setState({
        color: "red"
      });
    }
  }

  componentWillUnmount() {
    console.log("unmounting");
    this.props.removeInterval()
  }

  render() {
    return (
      <div className="box" style={{ color: this.state.color }}>
        {this.props.value}
      </div>
    );
  }
}

export default Ticker;
```

## The React Component Lifecycle, Revisted 🧫

### Mounting (Birth)

- **`constructor(props)`**
  - Called before the component is mounted
- `static getDerivedStateFromProps(props, state)`
  - Invoked right before calling the render method, both on the initial mount and on subsequent updates.
  - Should return an object to update the state, or null to update nothing.
- **`render()`**
- **`componentDidMount()`**
  - Invoked immediately after a component is mounted (inserted into the DOM tree).
  - Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

### Updating (Life)

- `static getDerivedStateFromProps(props, state)`
  - Invoked right before calling the render method, both on the initial mount and on subsequent updates. 
  - Should return an object to update the state, or null to update nothing.
- `shouldComponentUpdate(nextProps, nextState)`
  - Invoked before rendering when new props or state are being received
  - Returns boolean which determines if render should be called
- **`render()`**
- `getSnapshotBeforeUpdate(prevProps, prevState)`
  - Invoked right before the most recently rendered output is committed to e.g. the DOM.
  - Enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. 
  - Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()
- **`componentDidUpdate(prevProps, prevState)`**
  - Invoked immediately after updating occurs.
  - This method is not called for the initial render
  - Watch out for infinite loops if setting state!

### Death (Unmounting)

- *componentWillUnmount()*
  - Invoked immediately before a component is unmounted and destroyed.
  - Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in `componentDidMount()`.

---

## Takeaways 🍃

- [x] Most Common Use Case For Constructor: Setting up state, creating refs and method binding.
- [x] Most Common Use Case For Render: Returning component JSX.
- [x] Most Common Use Case for componentDidMount: Starting AJAX calls to load in data for your component.
- [x] Most Common Use Case for componentDidUpdate: Reacting (hah!) to committed changes to the DOM.
- [x] Most Common Use Case for componentWillUnmount: Cleaning up any leftover debris from your component.

## Resources 🎄

- [Docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
- [React Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [An Introduction to React Lifecycle Events in React JS](https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/)
- [React 16 Lifecycle Methods: How and When to Use Them](https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282)
