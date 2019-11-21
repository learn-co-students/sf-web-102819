# Rails Forms and REST 🛤

## Goals 🚂

- [ ] Create a new Rails app 🏗
- [ ] Generate a model with migrations 🗿
- [ ] Lay out RESTful routes and controller 🎢
- [ ] Craft views 🖼
- [ ] Write form in view using Rails helper method 📮
- [ ] Use private methods 🤫
- [ ] Implement strong parameters 🔒

(https://guides.rubyonrails.org/)

## 1. Create a new Rails app 🏗

**0. Bookmark, reference, read, treasure [the Rails docs](https://guides.rubyonrails.org/)!!** 🤗

- `rails new --help` shows options for creating Rails app
- `rails new APP_PATH [options]` _generates_ file and directory infrastructure for a Rails app

## 2. Generate a model with migrations 🗿

- ⚠️ _**What's our domain model?**_ 🤔
- Before you build an open, know what you're trying to build.
- `rails g` == `rails generate`
  - Enter this command to see general options and list of generators
  - `rails generate GENERATOR -h` shows options for specific generator
  - 🎶 **Growing as a software engineer means mastering the three R's.** 🎶
- `rails generate model` generates model _and_migration
- `rails generate model NAME [field[:type][:index] field[:type][:index]] [options]`
  - `field`: name of column
  - `type`: data type
  - `index`: index the column (make it more efficient to query)
- `rails -T` shows us our tasks (remember `rake -T`?)!
  - `rails db:migrate`
  - `rails db:seed`
  - And so on...

## 3. Lay out RESTful routes and controller 🎢

- In Rails, controller _actions_ and controller _routes_ are separate
  - `config/routes.rb` maps HTTP requests to controller actions
  - `app/controllers/controller.rb` defines controller, actions
- Open routes.rb, `get "/MODELs", to: "MODELs#index"` or `resources :MODELs, only: [:index, :show]`
  - Custom path: `get "/MODELs/:id", to: "MODELs#show", as: "something_random"`
  - To look at all routes in server type `localhost:PORT/rails/info/routes` in browser
  - Or! `rails routes` in console
  - In `rails c` use `app.doctors_path` to get the path
- `rails g controller MODELs`
  - In rails console: `"person".pluralize`, `"woman".pluralize`, `”human”.pluralize`
- Create index method `def index end` (under the hood Rails will call `render :index`) and `index.html.erb`

## 4. Craft views 🖼

## Write form in view using Rails helper method 📮

- `link_to` - `<%= link_to pizza.name, pizza_path(pizza.id) %>` or  `<%= link_to pizza.name, pizza %>` (if we give it an instance it knows to get the right path)
- `form_for` creates a form for a model object
- New and edit forms "know" what to do!
- You can't create or update without strong parameters

```ruby
<%= form_for @pizza do |f| %>
  <%= f.label :name, "Custom Label" %>
  <%= f.text_field :name %>
  <%= f.text_area :body, size: "60x12" %>
  <%= f.submit "Create" %>
<% end %>
```

- `form_tag` simply creates a form

```ruby
<%= form_tag("/search", method: "get") do %>
  <%= label_tag(:q, "Search for:") %>
  <%= text_field_tag(:q) %>
  <%= submit_tag("Search") %>
<% end %>
```



## Use private methods 🤫

- Private methods that aren’t to be called from outside the object
- Only the object itself is supposed to use them internally, from other methods
- In Ruby, not a hard rule, more a suggestion of use
- Write helper methods to DRY code!

## Implement strong parameters 🔒

- Mass-assignment saves us need to assign values to each model attribute
- Mass-assignment is insecure
  - We aren’t restricting which attributes can be set
  - We aren't checking the valus of these attributes
  - A hacker can assign any value to any attribute. 
  - Ex: he could set the value of admin true, making himself a super user.
    - Modify form in HTML
    - Modify URL: `http://www.example.com/user/signup?user[name]=ow3ned&user[admin]=1 `

## Takeaways 🦝

- [X] The Rails docs are indispensable.
- [X] When building Rails apps, build from the bottom up.
- [X] Rails generators save time!
- [X] The controller lives in `routes.rb` and in `app/controllers`.
- [X] Rails form helper method generate HTML for forms.
- [X] Private methods are practice for structuring class code.
- [X] Secure database input with strong params.
