# Code Challenge 4 Sanitized Rubric

## Minimum Bar

The student is able to:

- Render presentational components in a container component
- Handle events with callback functions passed from parent to child components
- Change state in parent components based on events in child components
- Conditionally render components

## General Review

“Hi **[student name]**,

The code challenge this morning assessed your comprehension of React in the following areas: State, Props, Code Structure/Efficiency, Lifecycle Methods, API calls, and Rendering. Here’s some feedback on your approach for each of those objectives.

- State concepts based on:
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/props-versus-state/state-and-events/initial-state
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/props-versus-state/state-and-events/updating-state

- Props concepts based on:
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/props-versus-state/props/props
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/props-versus-state/props/proptypes
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/presentational-versus-container-components/dumb-components/props-props-props

- Code Structure and Efficiency based on:
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/presentational-versus-container-components/smart-components/container-components
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/presentational-versus-container-components/dumb-components/presentation-components
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/component-lifecycle/mounting/component-mounting-and-unmounting
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/component-lifecycle/mounting/component-lifecycle
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/component-lifecycle/rendering-and-updating/rendering

- Rendering concepts based on:
  - https://github.com/learn-co-curriculum/M4-DQ3-Conditional-Rendering
  - https://learn.co/tracks/web-development-immersive-2-0-module-four/react/rendering/jsx-lab

## Scoring Chart

### Props & State

#### Score: 1

**Code:**
State is not being set or updated correctly. Props are not being passed down correctly or key props are missing.

**Feedback:**
Your state is not being set or updated correctly. Review the labs on setting state to clarify the syntax. Your props aren't being passed down properly. Take some time to review the components and think about what each one needs in order to function.

#### Score: 2

**Code:**
State is set correctly, but is in the wrong component. State might be nested oddly. Unnecessarily set filtered transactions in state. Props are being passed unnecessarily to components. Functions are not defined in the component that they are most closely tied to.

**Feedback:**
Your state is not being stored in the most logical components. Before you start building, take some time to consider where in your application you should store these states. Make sure you are only passing down props to components that use them.

#### Score: 3

**Code:**
State is set correctly and held in logical places. Props are being passed correctly. Functions used to edit state in container components are passed down and executed in presentational components.

**Feedback:**
Good work with your state. You are storing it in logical places and setting it at the correct times. Good use of props and handling a presentational component event. Consider destructuring your props for cleaner presentational components.

#### Score: 4, 5

**Code:**
State is set correctly, storing an array of objects as well as the object chosen for the show component. (Score as 5 if the feature contains something worth an extra point.) Props are being passed correctly. May destructure props in presentational components or uses some other technique to simplify or cleanup code.

**Feedback:**
Good work with your state! Good use of props. I like the use of destructured props to clean up your presentational components!

### Code Structure/Efficiency

#### Score: 1

**Code:**
The starter components have been restructured in ways that don't make sense. Additional components have been added which serve no purpose. API call does not successfully populate state. There is no reference to componentDidMount.

**Feedback:**
Your component structure needs improvement. Each component should serve a specific purpose. Think about what each of your components accomplishes and how to make their structure more efficient. You struggled with setting state from the API. Review [React Component Lifecycle Methods](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle). The documents recommend using componentDidMount to set state from a remote endpoint.

#### Score: 2

**Code:**
Functional components have been instantiated as classes. State set in componentWillMount or other lifecycle methods are present unnecessarily.

**Feedback:**
You have some smart components that can be simplified to presentational components. You use the fetch correctly, but not in the most ideal place. Think about where in the component's lifecycle you want to fetch information to build state. Review [React Component Lifecycle Methods](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle). The documents recommend using componentDidMount to set state from a remote endpoint.

#### Score: 3

**Code:**
Components are structured in a logical way. Class components only used when needed (i.e. in container components), functional components used for everything else. State is set in componentDidMount.

**Feedback:**
Solid component structure. You make good use of class and functional components. Good use of componentDidMount to set the state. You were able to correctly asynchronously fetch data and store it in state.

#### Score: 4

**Code:**
Components are structured in a logical way. Logic is confined to class components, marking a clear delineation between smart/dumb components. Used object destructuring successfully.

**FeedBack:**
Solid component structure. I like that you kept the functional components purely presentational, allowing the class components to execute the logic. Note that some container components can be made functional components as well.

#### Score: 5

**Code:**
Same as 4, except thte appropriate container components are made into functional components.

**Feedback:**
Solid component structure. I like that you kept the functional components purely presentational, allowing the class components to execute the logic, and that you some container components could be made functional components.
___

### Rendering

#### Score: 1

**Code:**
Unable to render information about objects into presentational components and/or unable to render presentational components into container component.

**Feedback:**
You didn't get to render information about state onto the page. Consider how you might use the component structure provided to you to display information.

#### Score: 2

**Code:**
Renders information into presentational components and renders presentational components into container component. Not able to render information in container component and not able to achieve final deliverable (i.e. refactor to display a certain presentation component when another presentational component is clicked). May have created own components instead of using the components provided.

**Feedback:**
You were able to render information about all the objects, but didn't quite get to add them and display in the appropriate components. Consider how you might build this out, and how state can be used to dynamically determine what is rendered onto the page.

#### Score: 3

**Code:**
Renders all information and is able to pass props, display them with a component, and change state. Attempted but didn't quite succeed in refactoring.

**Feedback:**
Great job getting to the first checkpoint! You didn't quite get to display a particular presentational component, and it would be worth your time to build out this functionality. Consider how state changes can be used to condtionally render different components.

#### Score: 4

**Code:**
Achieved all deliverables (i.e. was able to refactor to display components conditionally).

**Feedback:**
Great job on the refactoring for the final deliverable. For the future, consider how you might use the existing component structure to remove presentational components from a container component.

#### Score: 5

**Code:**
Achieved all deliverables + added extra features

**Feedback:**
Great job! I love the extra features that you managed to implement!
