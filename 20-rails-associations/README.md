# Rails Associations ⛓

## Goals 🦅

- [ ] Create a full-CRUD Rails app with multiple, associated models 🏘
- [ ] Use ActiveRecord methods to create associations 🦾
- [ ] Leverage filters, private methods, and strong parameters to define controller actions 🃏
- [ ] Render views with partials 🦿
- [ ] Generate buttons and links with Rails helpers 🤖

## Create New App, Generate Resources 🏘

### M: Models and Migrations 🦾

1. `rails new library -M -C -T`
  a. `rails new -h`: shows us our generation options
  b. `-M, -C, T-`: no Action Mailer, no Action Cable, no Tests
2. `rails generate resource Book title author:references publisher checked_out:boolean && rails generate resource Author name`
  a. `g` short for `generate`
  b. Write model name singular
  c. Default type: string
  d. `:references` creates attribute as foreign key
  e. `&&` in terminal will run successive process if previous process successful
3. Write associations in models
  a. `has_many`, `belongs_to`, et. al. still live!
  b. `:dependent => :delete_all`
4. `rails db:migrate`
  a. After migration, check `schema.rb`
  b. Don't make any changes unless rolled back
5. `rails db:seed`
  a. Populate database with dummy data to test
  b. `Faker`, loops, `Array#sample` helpful
6. `rails console`
  a. Test your database
  b. Use any/all ActiveRecord methods

### C: Controller Actions and Routes 🃏

1. Check and edit `config/routes.rb` to configure routes
  a. `resources` generates all 7 RESTful Routes by default
  b. `get '/create-a-book', to: 'books#new', as: 'create_a_book'`
  c. Go to `rails routes`, or `localhost:PORT/rails/info/routes` for route info
2. Write controller actions corresponding to each route
  a. 7 RESTful Routes => 7 RESTful Controller Actions
  b. Make sure action is in correct controller!
3. Write strong parameter method!
4. Write filters (ex: `before_action`) to DRY code (ex: `find_book`, `find_authors`)
5. Create view (if needed) corresponding to controller action

### V: Views 🦿

1. Create views:
  a. index.html.erb
  b. show.html.erb
  c. new.html.erb
  d. edit.html.erb
2. Create partials
  a. `_form.html.erb`
  b. `<%= render partial: "form" %>`
  c. `<%= render partial: "form", locals: {button_text: "Edit Book"}`

https://guides.rubyonrails.org/form_helpers.html#option-tags-from-a-collection-of-arbitrary-objects

### Bonus: Nested Attributes 🍶

- More than one model can be modified at once!
- In model(s): `accepts_nested_attributes_for :author`
- In form(s): `f.fields_for :author do |ff|`
- [Ruby on Rails Nested Attributes](https://www.pluralsight.com/guides/ruby-on-rails-nested-attributes)

### Bonus: Buttons & Links in HTML and Rails 🤖

```ruby
<%= button_to "Rails Edit Button", { action: :edit }, method: :get %>

<%= link_to "Rails Edit Link", "/books/#{@book.id}/edit" %>

<form action="/books/<%= @book.id %>/edit">
  <input type="submit" value="HTML Button Input" />
</form>

<a href="/books/<%= @book.id %>/edit">HTML Edit Link</a>
```

## Takeaways 🐣

- [X] `references` designates an attribute as a foreign key
- [X] ActiveRecord Associations function the same inside Rails as outside
- [X] Controller filters can be used to DRY controller
- [X] Partials can be used to DRY views
- [X] Forms can submit data for more than one model
