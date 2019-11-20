# Intro to Rails 🚂

## Goals 🏔

- [ ] Take whirlwind tour of Rails app generation 🌪
- [ ] Compare and contrast Sinatra and Rails ⚖️
- [ ] Review past, present, future of Rails 🗺
- [ ] Build out Rails app with model, controller, and view 🛠

## What is Rails? 🤔

### Making a Rails App 🌪

- ❓*What's an example of domain and a model in that domain?*
- Build it out!
  - Install `gem install rails`
  - `rails new DOMAINNAME`
  - **BAM! Look at all of this stuff!!**
  - ❓*What kind of model should we have?*
  - `rails g scaffold MODELNAME ATTRIBUTES`
    - (If you don't write `attribute:type` in full, default is string)
    - Builds out MVC
  - `rails db:migrate`
  - `rails server`
  - `localhost:3000`, `localhost:3000/MODELNAMEs`, `localhost:3000/MODELNAMEs/new`
  - We have a whole CRUD suite in place in 5 min!
  - *Who's pissed?*
- Why are we doing this to you?!
  - Rack and Sinatra gave us a ground-level view of a RESTful web application with MVC architecture
  - Learn Sinatra first, become better programmer
  - It's not all a waste...

### Compared to Sinatra ⚖️

- [Say goodbye to Sinatra (for now)](https://www.youtube.com/watch?v=9ML8PrP3A8E) 🎙
- Same: Both are Rack-based 🙂
- Same: Both follow MVC pattern 🙂
- Same: Migrations 🙂
- Same: Models 🙂
- Same-ish: `rails` vs. `rake` for migration & seed commands 😐
- Same-ish: `.html.erb` vs `.erb` view file extension 😐
- Different: Route (action) kept in 2 places 🙁
  - Sinatra: `books_controller.rb`
  - Rails: `app/controller/books_controller.rb` & `config/routes.rb`
- Different: Rails has more commands to generate file templates! 🙁
- Different: `rails server` instead of Sinatra's `shotgun` 🙁
- ❓*What else do you notice or wonder about?* 

### Reviewing the Generation ⚙️

- Reviewing the aftermath of `rails new`
  - Things should look familiar... see: `Rakefile`, `config.ru`
  - `git init from "."` automatically run for you
  - ❓*What do we mean by "convention over configuration"?*
  - `/app`, the "assets pipeline"
  - `/bin`, stuff that can be run with the command line
  - Rails sets up tests for you! "It's opinionated."
  - `bundle install` automatically runs for you
- Reviewing `rails g scaffold`  
  - Don't use!
    - Too many extra files
    - Not educational
  - ❓*Anyone know how to write CoffeeScript?*

## History of Rails 🗺

- ❓*What do y'all know about Rails?*
- ❓*How did you feel when you learned Flatiron taught Rails?*
- David Heinemeier Hanson builds frameworks, races cars, writes books
  - Created Rails in 2003 while working on code base for Basecamp
  - Rails 1.0 landed in 2005
  - Three principles
    - Ruby
    - MVC architecture
    - Programmer happiness
  - Two goals
    - Increase programmer happiness
    - Increase programmer productivity levels
  - "Convention over configuration"
- [10 Famous Sites Built with Rails](https://prograils.com/posts/top-10-famous-sites-built-with-ruby-on-rails)
- [40 Sites Built with Rails](https://ideamotive.co/blog/40-best-ruby-on-rails-companies-websites/)
- [Is Ruby dead in 2019?](https://hackernoon.com/is-ruby-on-rails-dead-in-2019-b462e9a65b22)

## Rails Right Here, Right Now 🛠

### Review, con't ⚙️

- Review files and folders in editor
  - File structure is largely the same
- We'll discover the structure and contents over the next week
- *What do we keep in the `/app` folder?*

### Getting Started with App and Model 🧰

- Scalpel vs. axe
- One more time with feeling...
  - `rails new DOMAINNAME` to make app frame
  - `rails g model MODELNAME ATTRIBUTES` to generate model
  - `rails --help` to see all commands
  - `rails g --help` to see generator options
    - `--no-test-framework` to remove extra testing files
    - 5 different generators!
      - `Migration`
      - `Model`
      - `Controller`
      - `Resource`
      - `Scaffold`
  - ❓*What is a model? What is its job?*
  - Generating entries in database
  - `rails console` to do it manually
  - Better yet, `seeds.rb` (and the Faker gem) to do it

### Generating Routes and Controllers

- ❓*What is a controller? A route?*
- A route is a combination of the path requested and the HTTP verb used to request that path.
  - Sinatra manages routes and code executed for route in same palce
  - Rails separates routing and controller logic
- Three ways to generate controllers
  - Manually create `.rb` file and write in it
  - `rails g controller CONTROLLER_NAME [ACTIONS]` to generate controller (notice plural case)
  - `scaffold_controller` generator
- `rails s` for `rails server` and `rails c` for `rails console`
- To customize port: `rails s -p 9393`
- Quick bash aside
- To kill port process
  - `lsof -i tcp:3000` to see what's running on port 3000
  - `kill -9 PID`
automatically
- Routing issue
  - See for route list:
    - `localhost:3000/rails/info/routes`
    - `rails routes`
  - Where are our routes?
    - `config/routes/rb` is the route definition file
      - get `get '/dinosaurs', to: 'dinosaurs#index'` for specific route
      - `resources :dinosaur` for full CRUD route
    - Actions in controller

### Error messages 🚨

- Browser console debugging is useful, but not as reliable as terminal
- Controller issue
  - ❓*According to error message, where do we need to go?!*
- Format issue
  - **Read error messages**
  - `render :index` optional in controller!
- You can have multiple terminal windows open!
- `rails routes`
- This was just an introduction

### Views 👀

- Almost the same story as Sinatra
  - `.html.erb` is Rails' erb file extension
  - Controller reference optional
- Implicitly linked to controller
  - `render :bananas` explicitly renders `bananas.html.erb`
  - Controller reference optional

## Closing Remarks 🙏

- Go slow to go fast
- We'll flesh out the details over the next week
- What is Rails teaching you about software engineering?
