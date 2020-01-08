# Thinking in React with the React Props and State Lab

## Goals 🚀

- [ ] Practice building a React app with process 🗺
- [ ] Break down a website conceptually and rebuild it with React 🧪
- [ ] Tie together concepts of components, JSX, props, state, event handling 🤹🏻‍♂️

---

## The Process: Start with a Mock 🗺

1. Break the UI into a Component Hierarchy
  A. Use the Single Responsibility Principle
  B. Check to see if data model maps nicely to UI/component structure
2. Build a Static Version in React
  A. Not interactive!
  B. Don't use state at all
  C. Easier to go top-down for small projects, down-up for large
  D. Remember React's one-way data flow
3. Identify the Minimal (but Complete) Representation of UI State
  A. "Think of the minimal set of mutable state your app needs."
  B. Is it passed in from a parent via props? If so, it probably isn’t state.
  C. Does it remain unchanged over time? If so, it probably isn’t state.
  D. Can you compute it based on any other state or props in your component? If so, it isn’t state.
4. Identify Where State Should Live
  A. Identify every component that renders something based on that state.
  B. Find a common owner component (a single component above all the components that need the state in the hierarchy).
  C. Either the common owner or another component higher up in the hierarchy should own the state.
  D. If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.
5. Add Inverse Data Flow Using CallBacks

## The Lab 🧪

### Overview

You'll build a small React application where you'll update state in response to
a fetch payload and pass props among components to handle updates.

### Animal Shelter

![Best Friends](https://media.giphy.com/media/xTiTnz5OOUn49wKbg4/giphy.gif)

Time to put all of our hard-earned knowledge to the test! This lab is fairly
big, and will require you to use everything you've learned up to this point.
Don't be intimidated, there are plenty of tests to guide you along the way! In
this lab, we'll be working on a front-end for an animal shelter. Sadly, there
still are way too many cute pets without any owners. Let's help them out by
creating a UI in React!

We **strongly** recommend completing this lab using Behavior Driven Development
(BDD)––test the functionality in the browser **before** running the tests.
You'll have a much better time seeing the results in the browser.

Call `npm i && npm start` to run this project in your browser

### Deliverables

- A user should be able to change the Animal Type filter/drop down to specify
  the type of animal they want to adopt.
- A user should be able to click on the 'Find pets' button, and they will see
  all of pets _only_ for the type they specified in the drop down (you'll be
  fetching to a mock API to get this data).
- A user can click on 'Adopt' to adopt that pet. They cannot un-adopt it. No
  backsies!

Don't worry about persistence. We will not be saving this data to a real API. So
if a pet is adopted, on refresh of the page, they will be available for adoption
again. We are only going to focus on building the front end UI.

### Instructions

On a high level, you will be working on several components that form the UI of
the animal shelter adoption application. There are several components that need
your attention. All of these components can be found in the `components/`
folder. Starting from the top-level and working our way down through all its
descendants:

#### `App`

1. The app's initial state is already defined. App has two children: the
    `<Filters />` and `<PetBrowser />` components.

2. App should pass a **callback** prop, `onChangeType`, to `<Filters />`. This
   callback needs to update `<App />`'s `state.filters.type`

3. `<Filters />` needs a **callback** prop, `onFindPetsClick`. When the
   `<Filters />` component calls `onFindPetsClick`, `<App />` should fetch a
   list of pets using `fetch()`.

- Assuming your app is up and running, you can make a fetch to this exact URL:
    `/api/pets` with an **optional query parameter** to get your data.
- Use `App`'s state.filters to control/update this parameter
- If the `type` is `'all'`, send a request to `/api/pets`
- If the `type` is `'cat'`, send a request to `/api/pets?type=cat`. Do the
  same thing for `dog` and `micropig`.
- The pet data received will include information on individual pets and their
  adoption status.

4. Set `<App/>`'s `state.pets` with the results of your fetch request so
    you can pass the pet data down as props to `<PetBrowser />`

- **Even though we're using `fetch` here, its responses have been mocked in
    order to make the tests work properly. That means it's important to use the
    _exact_ URLs as described above, or your tests will fail!**

5. Finally, App should pass a **callback** prop, `onAdoptPet`, to `<PetBrowser
   />`. This callback should take in an id for a pet, find the matching pet in
   `state.pets` and set the `isAdopted` property to `true`.

#### `Filters`

1. Should receive an `onChangeType` callback prop. This callback prop gets
    called whenever the value of the `<select>` element changes with the
    **value** of the `<select>`

2. Should receive an `onFindPetsClick` callback prop. This callback prop gets
    called when the users clicks the 'Find pets' button.

#### `PetBrowser`

1. Should receive a `pets` prop. This is an array of pets that the component
    uses to render `<Pet />` components. App should determine which pets to pass
    down as props. App should be responsible for filtering this list based on
    the types of pets the user wants to see.

2. Should receive an `onAdoptPet` prop. This callback prop gets passed to its
    `<Pet />` children components.

#### `Pet`

1. Should receive a `pet` prop. Use the attributes in this data to render the
    pet card correctly. It should show the pet's `name`, `type`, `age` and
    `weight`. Based on the pet's `gender`, the component also needs to contain
    either a male (`♂`) or female (`♀`) symbol.

2. Each `pet` _may or may not_ have an `isAdopted` property set to `true`.
    Using this property, render the correct button in the pet's card; if the pet
    is adopted, show the disabled button. Otherwise, show the primary button to
    adopt the pet.

3. Should receive an `onAdoptPet` callback prop. This callback prop gets called
    with the pet's `id` when the user clicks the adopt pet button — _not_ when
    they click the disabled button!

## Process Practice 🤹🏻‍♂️

1. Break the UI into a Component Hierarchy
  A. "App has two children: the `<Filters />` and `<PetBrowser />` components."
  B. `<PetBrowser />` has one child: `<Pet />`
2. Build a Static Version in React
  A. Write basic container and presentational components.
  B. Already done for us!

_🤔 Which components should be container components? Which are presentational?_
_🤓 `<App />` and `<Filters />` should be containers. The rest presentational._

3. Identify the Minimal (but Complete) Representation of UI State
4. Identify Where State Should Live
5. Add Inverse Data Flow Using CallBacks
  A. `onChangeType` callback prop
  B. `onFindPetsClick` callback prop

---

## Resources

- [Forms](https://facebook.github.io/react/docs/forms.html)
- [Events](https://facebook.github.io/react/docs/events.html)
- [Using State Correctly](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
- [State Updates May Be Asynchronous](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)

<p class='util--hide'>View <a href='https://learn.co/lessons/react-props-and-state-lab'>Props And State Lab</a> on Learn.co and start learning to code for free.</p>

## React Pets Review

- Render All Pets
	- Pass each pet down to `Pet` component
		- Fill out pet data in `Pet` component
	- get all pets from pets.js
- Filter Pets
	- Pass down selected filter and set dropdown accordingly
	- Create on change for when select is changed
	- on submit change list of pets based on what filters are selected
- Adopt Pets
	- (Figure out what we want to do when we adopt a pet)
	- keep an adopted pets array (ids), or keep property of `isAdopted` on each pet
	- Show disabled button when you can’t adopt it anymore
