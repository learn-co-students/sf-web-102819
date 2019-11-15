# Intro to Sinatra and MVC 
## Goals
- [ ] How and why we use the MVC pattern
- [ ] How Sinatra serves data in response to RESTful routes
- [ ] How CRUD actions map to RESTful routes
- [ ] How to make an HTML form

## [Sinatra](https://www.youtube.com/watch?v=qQzdAsjWGPg)
- *What do we mean by "convention over configuration?"*
- A DSL sitting on top of Ruby and Rack
- Gives us extra functionality and abstraction. Ex:
  - `Rake`
  - `Pry`
  - `rspec`
  - `capybara`
  - `React`
- A lot of overlap with what's we've done already!
- Explain the Model View Controller (MVC) pattern and give an example
- Restore model
- *What does `class Book < ActiveRecord::Base` do for us?*
- `class ApplicationController < Sinatra::Base`

## Model View Controller
- One of many common programming archetectural paradigms
- *Why separate things out?*
- The MVC "Party"
    - Model = Data
        - Represents the data and nothing else
        - Interacts with database
        - Independent of view or controller
    - View = Interface
        - Displays data through controller
        - Sends user actions to controller
        - Independent of model and controller
    - Controller = Go-Between
        - Provides model data to view
        - Interprets user actions
        - Dependent on model and view
- Chez MVC
    - Model = Food
    - Controller = Personnel
    - View = Moi
- Why?
    - Agree on logic/pattern so others can read and use our code
        - A lot of a developer's job is dealing with other people's code
        - Minimize time spent figuring out how to talk to app
    - Separation of concerns
    - Securiy and access control
    - Simplify views, tailor user experience
- REpresentational State Transfer (REST)
    - Another convention
    - URL represents state of the data
        - `https://www.espn.com/nba/team/_/name/gs/golden-state-warriors`
        - `https://www.espn.com/nba/player/_/id/1966/lebron-james`
    - REST methods minimize URLs, maximize functionality
    - HTTP requests are stateless
- CRUD and RESTful routing
    - *How do CRUD actions map to SQL commands and HTTP requests?*
    Operation | SQL | HTTP
    - | - | -
    Create | INSERT | PUT/POST
    Read | SELECT | GET
    Update | UPDATE | PUT/PATCH
    Delete | DELETE | DELETE
    - *How do HTTP requests map to RESTful URLs?*
    URL | HTTP Request| POST Body | Result
    - | - | - | -
    http://yourdomain.com/api/books | GET | empty | Returns all books
    http://yourdomain.com/api/books | POST | JSON string | Creates new book
    http://yourdomain.com/api/books/:id | GET | empty | Returns single book
    http://yourdomain.com/api/books/:id | PUT | JSON string | Updates existing book
    http://yourdomain.com/api/books/:id | DELETE | empty | Deletes existing book
        

## [Sinatra](http://sinatrarb.com/), revisited
- Create routes, controller methods, views
    - GET `/books/`
    - GET `/books/:id`
    - GET `/books/new`
        - Order of controller methods matters
        - *What are the attributes for an HTML form (i.e. `action`, `method`, `name`, `value`, etc)?*
            - `pry` it up!
            - Experiment with devtools.
    - POST `/books/`
        - Play with params
        - `Book.create`
    - GET `/books/:id/edit` and POST/PATCH `/books/:id`
        - *What is `erb` and what does it return?*
        - You can't patch
- Rack is messy (configuration > convention)
- `corneal`
- `shotgun`
- ERB templates
    - `<%= %>` vs `<% %>`
    - `<%= yield %>`
- File structure
    - `config.ru` = the runner file
- Params hash
- Why it's bad when the view talks to the model
- "The entire Internet is forms." - Wise Instructor Jeff
- Review

## Deliverables
- [ ] Create an index for your site that lists all of the existing books
- [ ] User should be able to view information about a specific book.

### Reviews
[Config Setting](http://sinatrarb.com/configuration.html)
