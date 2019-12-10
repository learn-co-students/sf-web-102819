# Code Challenge 3 Rubric

This rubric is for the JavaScript Code Challenge. For the challenge, you are required to build an application which fetches data from a primary resource and renders the information to the DOM, as well as create an interface to create a new instance of a resource.

The Code Challenge will give you general instructions for a 5-step process to complete.

## Minimum bar

If you are able to build the application using a procedural approach, you are a pass. In other words, you are able to:

- Select and update elements in the DOM
- Attach event listeners for 'click' and/or 'submit'.
- Implement at least one GET and one POST request with `fetch`

Then you will have demonstrated the skills needed to move on.

## Scoring Chart

### DOM Manipulation

#### Score: 1

- **Code:** Did not properly render elements to the DOM
- **Feedback:** Your code did not render the required elements to the DOM. Please review the methods for DOM manipulation and see if you can go back and get content rendered, even if it is fake data.

#### Score: 2

- **Code:** Rendered elements to the DOM, but with some errors (e.g. content is loaded but in the wrong location or doesn’t meet the requirement described in the assessment)
- **Feedback:** You were close to rendering elements to the page as requested, but there were some errors in your code...

#### Score: 3

- **Code:** Successfully rendered required content to the DOM
- **Feedback:** You successfully rendered the requested DOM content from your JSON data on page load. However, you were not able to optimistically render the secondary resource upon creation

#### Score: 4

- **Code:** Rendered all required content in correct the format and optimistically rendered secondary resource as needed
- **Feedback:** You successfully rendered all requested DOM content from your JSON data on page load and were able to optimistically render the secondary resource using the provided buttons and event listeners.

#### Score: 5

- **Code:** Rendered all required content from GET request in correct format including data attributes, optimistically rendered secondary resources as needed, optimistically removes secondary resource on delete.
- **Feedback:** You successfully rendered all requested DOM content from your JSON data on page load and were able to optimistically render likes and comments using the provided buttons and event listeners. You also successfully rendered delete buttons with each secondary resource and implemented optimistic deletion of that resource, great job!

### Javascript Events

#### Score: 1

- **Code:** Did not attach event listeners to respond to events.
- **Feedback:** You did not successfully add event listeners to respond to the required events. Please review the lessons that cover the methods and syntax for adding event listeners and callbacks to handle events triggered on the page.

#### Score: 2

- **Code:** Attached event listeners, but incompletely or with some errors (e.g. invoked callback instead of passing it or added an event listener for DOMContentLoaded but not for a user action)
- **Feedback:** You were close to adding event listeners to the DOM per the instructions, but there were some errors in your code...

#### Score: 3

- **Code:** Successfully attached event listeners to handle DOM events.
- **Feedback:** You successfully added event listeners to respond to events triggered on the page. Good job! However, there are some areas for improvement, namely...

#### Score: 4

- **Code:** Successfully attached event listeners to handle all required DOM events, correctly used `preventDefault` to prevent the default behavior of the form.
- **Feedback:** You successfully added event listeners for all of the required events and used `preventDefault` to ensure that the form submit did not rerender the page. Nice work! To further improve your code, consider how your event listener callback functions are factored...

#### Score: 5

- **Code:** Successfully attached event listeners to handle all required DOM events, correctly used `preventDefault` to prevent the default behavior of the form, and callbacks nicely factored into functions.
- **Feedback:** You successfully added event listeners for all of the required events and used `preventDefault` to ensure that the form submit did not rerender the page, and went above and beyond to factor your event listener callbacks into clearly named, reuseable functions. Great Job!

### Communication with the Server

#### Score: 1

- **Code:** Not able to properly structure initial GET request to retrieve JSON data for primary resource
- **Feedback:** Your initial GET request did not successfully request the JSON data you needed for displaying info on the page. Please review the different forms of fetch requests and practice using them in code. Attaching .then(res => res.json()).then(json => console.log(json)) at the end of any fetch is a good way to make sure you’re receiving content correctly before trying to use DOM manipulation to add that content to the page.

#### Score: 2

- **Code:** Correctly structured and called GET request
- **Feedback:** You were able to set up your initial GET request data but did not implement your POST requests for the secondary resources. Please review the structure of POST requests using fetch to make sure you understand the use of the method, headers and body keys.

#### Score: 3

- **Code:** Correctly structured and called GET. Partial implementation of POST requests, or requests have errors
- **Feedback:** You were able to set up your initial GET request data but did not finish your POST requests for the secondary resources. Please review the structure of POST requests using fetch to make sure you understand the use of the method, headers and body keys.

#### Score: 4

- **Code:** Correctly structured GET and POST requests
- **Feedback:** You were able to implement both your GET and POST requests successfully. Good job! If you wanted to go further, one handy thing to do is separate out your headers as a variable to reuse in multiple fetch requests. Body content can also be set to variables. The benefit of this set up is that you could eventually structure a generic POST request function that simply takes in whatever you want, instead of hard coding your content for each POST.

#### Score: 5

- **Code:** Properly set up all GET and POST requests, used well structured variables for POST content. Implemented DELETE request.
- **Feedback:** Great work getting your GET, POST and DELETE fetch requests up and running!
  If you wanted to go further, one handy thing to do is separate out your headers as a variable to reuse in multiple fetch requests. Body content can also be set to variables. The benefit of this set up is that you could eventually structure a generic POST request function that simply takes in whatever you want, instead of hard coding your content for each POST.

## Labs for each concept

- Dom Manipulation
  - https://github.com/learn-co-curriculum/fewpjs-the-dom-tree
  - https://github.com/learn-co-curriculum/fewpjs-js-fundamentals-collections
  - https://github.com/learn-co-curriculum/fewpjs-js-fundamentals-arrays-lab
  - https://github.com/learn-co-curriculum/fewpjs-queryselector-methods
  - https://github.com/learn-co-curriculum/fewpjs-removing-altering-and-inserting-html-lab
  - https://github.com/learn-co-curriculum/fewpjs-reviewing-html-manipulation-quiz
  - https://github.com/learn-co-curriculum/fewpjs-youre-a-dom-manipulation-master
- Javascript Events
  - https://github.com/learn-co-curriculum/fewpjs-jsf-scope
  - https://github.com/learn-co-curriculum/fewpjs-jsf-scope-chain
  - https://github.com/learn-co-curriculum/fewpjs-js-fundamentals-scope-lab
  - https://github.com/learn-co-curriculum/fewpjs-js-fundamentals-lexical-scoping
  - https://github.com/learn-co-curriculum/fewpjs-jsf-hoisting
  - https://github.com/learn-co-curriculum/fewpjs-javascript-eventing
  - https://github.com/learn-co-curriculum/fewpjs-event-listening/
  - https://github.com/learn-co-curriculum/fewpjs-reviewing-javascript-events-quiz
  - https://github.com/learn-co-curriculum/fewpjs-functions-in-javascript
  - https://github.com/learn-co-curriculum/fewpjs-fns-as-first-class-data-do-behavior/
  - https://github.com/learn-co-curriculum/fewpjs-fns-as-first-class-data-array-o-functions/
  - https://github.com/learn-co-curriculum/fewpjs-document-onload/
  - https://github.com/learn-co-curriculum/fewpjs-acting-on-events/
  - https://github.com/learn-co-curriculum/fewpjs-eventing-master
- Fetch Requests
  - https://github.com/learn-co-curriculum/fewpjs-communicating-with-the-server
  - https://github.com/learn-co-curriculum/fewpjs-use-fetch
  - https://github.com/learn-co-curriculum/js-data-structures-objects-readme
  - https://github.com/learn-co-curriculum/js-data-structures-objects-lab
  - https://github.com/learn-co-curriculum/js-data-structures-objects-and-arrays-quiz
  - https://github.com/learn-co-curriculum/js-looping-and-iteration-traversing-nested-objects-readme
  - https://github.com/learn-co-curriculum/js-looping-and-iteration-object-iteration-readme
  - https://github.com/learn-co-curriculum/js-looping-and-iteration-looping-code-along
  - https://github.com/learn-co-curriculum/fewpjs-fetch-lab
  - https://github.com/learn-co-curriculum/fewpjs-asynchrony
