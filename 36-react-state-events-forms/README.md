# React State, Events, and Forms
## Outline
- Presentational vs Container Components
- Introduction to State
- Using State
- Conditional Rendering
- React Synthetic Events and Event Handlers
- Controlled Forms

## Presentational vs Container Components
* There are 2 distinctions for components that are mostly overlapping, but slightly different
* Class vs Functional Components
	* This difference is focused more on syntax and is pretty self-explanatory: class components use class syntax and functional components are just functions that return JSX
* Container(Smart) vs Presentational(Dumb) Components
	* Containers contain most of the programming logic and/or are used to manage state. As they often need state and component lifecycle methods, containers are usually class components, though it is entirely possible to write a container component as a functional component, as in cases where the container needs a lot of logic, but makes no use of state
	* Presentational components contain little-to-no logic and are typically almost entirely dependent on their parent components for the data they use to display
	* Because of the way information trickles down from parent to child in a component hierarchy via props, fewer, more centralized sources of data and functionality are much more manageable at scale

## Introduction to State
* State is a special attribute of an instance of a component and is typically accessed inside of a component by running `this.state`. Other attributes can be created for a component (e.g. `this.beef = "steak"`), but the name `state` is special
* State is just an object containing key-value pairs
* Component must be a *class* component in order to make use of state
* It is a reflection of the current state of a component (e.g. is this card currently flipped? should I render component X or component Y? what data am I currently carrying?)
* Can be initialized in and out of the `constructor`

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


## Using State
* State represents the paradigm shift of moving from imperative to declartive programming - whenever a problem requires some sort of DOM manipulation, the thought process should shift from obtaining/creating DOM elements to manipulating state and making your template (the JSX in `render`) depend on the values of state
* `setState`
	* Changing the state object by ordinary assignment does nothing - mutating state directly will change the object’s values, but the problem is that the `render` function of our component is not called, so the DOM will not respond to these changes
	* We use `setState` because in addition to changing the object, `setState` will call the `render` function, this time using the newly updated state values
	* Gotchas
		* Changing state is asynchronous. `console.log` the state value that was supposed to be set below `setState`
		* `setState` takes 2 arguments:
			1. Either an object or a callback that accepts a parameter of the previous state and returns an object
			2. A callback that can be called whenever `setState` is finished updating state and rerendering
		* `setState` does a shallow comparison, meaning that even without spreading or copying state, only the properties that are specified in the object received by `setState` are changed while the others remain intact. However, this is only true for that first layer of properties: nested objects will have their values overwritten
* A simple example would be to write a ternary in `render` that depends on a boolean and switches between two texts “off” and “on”

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

* If you want to wait before showing them an event handling, you can just write a `setTimeout` inside `render` that updates state
* Ask them to come up with something simple of their own and build through it with the class


## Conditional Rendering
* If we write our JSX such that its values depend on state, we can use state as a proxy for the DOM, allowing *changes to state* to progrmatically manipulate the DOM
* Examples of things to build through:
	1. A toggle that depends on a boolean
	2. Some text on the page that depends on a string in state
	3. Very important to show: a list of items that depends on an array of objects
* Useful to show how one would pass state values as props to children and how changes to state in a parent can also affect the children whose props are determined by state


## React Synthetic Events and Event Handlers
* React Synthetic Events
	* [List](https://reactjs.org/docs/events.html)
	* It is useful to enter a `debugger` and examine the `event` object and note for them that even though React generates special synthetic events, these are more or less the same as your typical event objects
	* Students often will try to put event handlers on their own components, so it is important that you tell them that event handlers can only be attached to built-in JSX components (e.g. div, p)
* Students should be able to draw on their knowledge of how to use events in JS
	* Come up with a feature (e.g. toggle, Konami code) and ask the class how they would have handled that in Vanilla JS
	* They should mention that when the event handler is triggered, a DOM element must be found/created before updating/appending it to the DOM
	* Event triggering is the same, the difference is that rather than manually finding and editing DOM nodes, we will eventually call `setState` and let changes to state generate the desired DOM changes
* Event handler callbacks should be written as arrow functions to avoid losing context


## Controlled Forms
Form submission in Vanilla JS involves obtaining user input by manually grabbing the desired input elements and obtaining their the values of their `value` attributes

	* We still want access to user input in React, but if we do not access the DOM directly, how can make user input accessible to us?
* 
Controlled inputs

	* The following code is a good starting point to show a piece of state monitoring the values of a form
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


* After the above code, one can iterate and improve the process by:
	1. Abstracting the `onChange` handlers to a single function using the event object and `name` values on the inputs
	2. Make the inputs fully controlled by assigning the `value` to its respective value in state
	3. Clearing state `onSubmit` to clear the input fields, which illustrates the importance of making the input fully controlled (to drive this home, try removing the `value` attributes on your inputs and show how the inputs do not respond to state changes)
* Form submission should eventually take the values from state and use them to create a new object in a parent’s state. Points to drive home:
	1. How to pass a function from parent to child to update the parent’s state
	2. How holding data (e.g. array of comment objects) in state allows us to add DOM elements by simply adding to the data
	3. If the form and the components displaying the data are siblings, the only way for the data from the form to reach those components is to change state in a common ancestor
