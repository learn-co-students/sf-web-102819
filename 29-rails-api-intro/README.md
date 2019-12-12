# Rails as an API 🛰

## Goals 🍲

- [ ] Define the utility of JSON 🧱
- [ ] Review the HTTP request/response cycle ♻️
- [ ] Configure a Rails application to behave as a RESTful API 🛰
- [ ] Access a Rails API via JavaScript 📡
- [ ] Survey the purpose of CORS 🤝
- [ ] Build out a simple fullstack app with a vanilla triple-threat frontend and a RESTful Rails API backend 💁🏻‍♀️

---

## JavaScript Object Notation 🧱

> Based on two universially available structures:
> 1. A collection of name/value pairs. Often referred to as an _object_, hash table, record, struct, keyed list, or associative array.
> 2. An ordered list of values. More commonly called an _array_, vector, sequence or list.

- Text-based format representing structured data in JavaScript object syntax
- JSON exists as a string a "stringified object"
- Can be used independent of JavaScript; it's _language agnostic_
- Looks like a Ruby hash
- In Ruby, try `JSON.parse('{hello: hola,  paddock: potrero}')`
- In Rails, try `Model#to_json`

```slack
> Given the following JSON object, how would I access the number of minutes until the next Fremont train arrives at Richmond station?
```javascript
let bartJson = {
   "?xml":{
      "@version":"1.0",
      "@encoding":"utf-8"
   },
   "root":{
      "@id":"1",
      "uri":{
         "#cdata-section":"http://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&json=y"
      },
      "date":"08/14/2017",
      "time":"10:20:31 AM PDT",
      "station":[
         {
            "name":"Richmond",
            "abbr":"RICH",
            "etd":[
               {
                  "destination":"Fremont",
                  "abbreviation":"FRMT",
                  "limited":"0",
                  "estimate":[
                     {
                        "minutes":"1",
                        "platform":"2",
                        "direction":"South",
                        "length":"4",
                        "color":"ORANGE",
                        "hexcolor":"#ff9933",
                        "bikeflag":"1",
                        "delay":"238"
                     },
                     {
                        "minutes":"13",
                        "platform":"2",
                        "direction":"South",
                        "length":"4",
                        "color":"ORANGE",
                        "hexcolor":"#ff9933",
                        "bikeflag":"1",
                        "delay":"0"
                     },
                     {
                        "minutes":"28",
                        "platform":"2",
                        "direction":"South",
                        "length":"4",
                        "color":"ORANGE",
                        "hexcolor":"#ff9933",
                        "bikeflag":"1",
                        "delay":"0"
                     }
                  ]
               },
               {
                  "destination":"Millbrae",
                  "abbreviation":"MLBR",
                  "limited":"0",
                  "estimate":[
                     {
                        "minutes":"6",
                        "platform":"2",
                        "direction":"South",
                        "length":"4",
                        "color":"RED",
                        "hexcolor":"#ff0000",
                        "bikeflag":"1",
                        "delay":"0"
                     },
                     {
                        "minutes":"21",
                        "platform":"2",
                        "direction":"South",
                        "length":"5",
                        "color":"RED",
                        "hexcolor":"#ff0000",
                        "bikeflag":"1",
                        "delay":"0"
                     },
                     {
                        "minutes":"36",
                        "platform":"2",
                        "direction":"South",
                        "length":"5",
                        "color":"RED",
                        "hexcolor":"#ff0000",
                        "bikeflag":"1",
                        "delay":"0"
                     }
                  ]
               }
            ]
         }
      ],
      "message":""
   }
}
```
:bicyclist: `bartJson.root.station[0].etd[0].estimate[0].minutes`
:car: `bartJson.root.station.etd["estimate"][0].minutes`
:boat: `bartJson["root"]["station"][0]["etd"][0]["estimate"][0]["minutes"]`
:airplane: `bartJson.root["station"][0].etd["estimate"][0]["minutes"]`
```
```

## The HTTP Request-Response Lifecycle and REST ♻️

> 🤔 What is the HTTP Request-Response Lifecycle again?
> 🤓 A client sends a request, and a server replies with a response. The request consists of information such as the HTTP version, request method, resource path, header with metadata, and optional body of data. The server sends a response consisting of information including the status code, header with metadata, and an optional body of data.

> 🤔 What is a RESTful API?
> 🤓 A REpresentational State Transfer Application Programming Interface is a program interface that maps HTTP requests to database CRUD actions. For example, GET /users should Read all User instances in a database, and PATCH /posts/2 should Update the Post instance with an id of 2.

## Making an API out of Rails 🛰

- Remember `render`? Try: `render json: @animals`
- Additionally, response can be respons_ive_

```ruby
class UsersController < ApplicationController
  def index
    @users = User.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @users }
    end
  end
end
```

- `rails new YOUR_APP_NAME --api`
  - Configures application with less middleware (e.g.: no cookie support)
  - `ApplicationController` inherits from `ActionController::API` instead of `ActionController::Base` (no browser functionalities)
  - Generators won't generate views, helpers, or assets with resources
- **Recommended:** Version your endpoints (e.g. `rails g controller api/v1/users`)
  - If API response changes, you should signal your users!
  - Make sure you sync your routes with your controller

```ruby
# config/routes.rb
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
    end
  end
end
```

- To specify "shape" of data, use `only:`, `include:` options with `render json:`

```ruby
# UsersController
def index
    @users = User.all
    render json: @users, only: [:id, :name], include: :tweets
end

{
  "id": 1,
  "name": "coffee_dad",
  "tweets": [
    {
      "id": 1,
      "content": "good # coffee",
      "user_name": "coffee_dad"
    },
    {
      "id": 2,
      "content": "having # coffee",
      "user_name": "coffee_dad"
    },
    {
      "id": 3,
      "content": "they will pay for what they've done",
      "user_name": "coffee_dad"
    }
  ]
}
```

## Break 🤡

## Accessing Rails API with JavaScript 📡

- A tale as old as time... `fetch`
- While in development...
  - Uncomment the rack-cors gem from your gemfile. `bundle install`
  - Open app/config/initializers/cors.rb and change the settings to the following:

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

- **Change back in production**

## Cross-Origin Resource Sharing 🤝

> Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.

[MDN on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

> A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) from its own.

- CORS is a security feature, like an apartment complex doorman
- Two separate websites (origins) should not freely communicate with each other
  - Requests can be forged through planted scripts
  - Formal headers (i.e. identification) should be presented
- Servers must specify who and how resources can be accessed

## Bringing it all home 💁🏻‍♀️

1. Make a backend repo
  a. `rails new YOUR_APP_NAME --api`
  b. `rails generate resource RESOURCE_NAME ATTRIBUTES`
  c. `render json:`
2. Make a frontend repo
  a. `touch index.html`, `touch style.css`, `touch main.js`
  b. Boilerplate HTML
  c. Punt on CSS
  d. `document.getElementbyId`, `fetch`, `createElement`, `append`, ...
3. ???
4. Profit!

---

## Takeaways

- [x] JSON is a light-weight, standardized data structure similar to a Ruby hash
- [x] Rails can be configured as a RESTful API
- [x] CORS is a means of preventing unauthorized requests from other websites
- [x] Keep your front and back ends separate

## Resources

- JSON
  - [JSON API Specification](https://jsonapi.org/)
  - [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
  - [JSON in Ruby](https://ruby-doc.org/stdlib-2.6.5/libdoc/json/rdoc/JSON.html)
- Rails API
  - [Using Rails for API-only Applications](https://guides.rubyonrails.org/api_app.html)
  - [Versioning a Rails API](https://chriskottom.com/blog/2017/04/versioning-a-rails-api/)
- Misc.
  - [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
  - [Understanding CORS](https://medium.com/@baphemot/understanding-cors-18ad6b478e2b)
  - [How Browsers Work: Behind the scenes of modern web browsers](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
  - [A typical HTTP session](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session)
