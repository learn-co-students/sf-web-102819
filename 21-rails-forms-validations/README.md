# Rails Forms and Validations 👍

## Goals 🏰

- [ ] Review RESTful routes in Rails 🛤
- [ ] Review form creation 📮
- [ ] Implement built-in and custom validations in a model 🧐
- [ ] Leverage validations in a controller 🤔
- [ ] Harness validations in a view 🤯

---

### Why Use Validations? 🧐

- _Users on your site be like:_

![Users on your site](https://camo.githubusercontent.com/bd5a0e0355fa6a8c1f5478f197be5562a479d41a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f5a665531314f44616e6c6f43412f67697068792e676966)

- Protect against unwanted, unexpected data
- Program defensively
- _Would it make sense for our app to allow a bagel with an empty name to be created?_
- ActiveRecord provides _several_ built in validations 
- **Read the docs** (linked below)
- If we need custom functionality, we can also write our own methods
- Validations will be run **any time i try to write to the database** -> `Bagel.create`, `Bagel.update`, `Bagel#save`
- Some validations:

```ruby
class Bagel < ApplicationRecord
  validates(:name, { presence: true, uniqueness: true })
  # validates :price, numericality: { presence: true, only_integer: true }
  #more commonly, the () are omitted
  validate(:validate_num_for_price)

  def validate_num_for_price
    if self.price.class != Fixnum || self.price > 30
      # errors array -> [{price: "Needs to be a number less than 30"}]
      self.errors.add(:price, "Needs to be a number less than 30")
    end
  end

end
```

- Notice that `validates` method expects _built in_ `ActiveRecord` validations as arguments
- If we want custom validation...
  - It must add an error to our instance (`self.errors.add`)
  - The model must use the `validate` (singular) method to ensure custom validations are run

---

### Leveraging Validations in Our Controller 🤔

- Now that we're checking the validity of our data _before_ persisting it to the database, we'll have to update our controller code so that it accounts for invalid data.

- Below is an annotated `BagelsController`:

```ruby
class BagelsController < ApplicationController

  # show ALL bagels
  def index
    @bagels = Bagel.all #ask Bagel model for data and pass @bagels instance var to the view
    render :index # look for folder called /bagels in the views folder, then render the index.html.erb
  end

  # show form to create a new bagel
  def new
    @bagel = Bagel.new # create a blank instance to pass to form_for
    render :new # render app/views/bagels/new.html.erb
  end

# POST request from our new bagel form
# create is called when our app receives a POST request to /bagels
  def create
    @bagel = Bagel.new(bagel_params) # pass in return value of private bagel_params method, which is a hash of whitelisted attributes

    if @bagel.valid? # checking validations; method is provided by ActiveRecord
      @bagel.save # if bagel is valid, save to database
      flash[:notice] = 'Bagel created!' # save a notice for our user in the flash hash
      redirect_to(bagels_path) # redirect fires new GET request, which will hit the BagelsController#index
    else # if bagel is not valid
      # rails provides a method for sending data across multiple requests
      # we can access this via flash[:KEY] hash syntax
      # flash[:errors] = @bagel.errors.full_messages
      # because render(:new) is NOT a new get request, I don't need to send a flash along

      # because I am not redirecting, instance var @bagel maintains the attributes from the form
      render(:new) # render DOES NOT TRIGGER NEW GET REQUEST
    end
  end

#everything below private keyword is private
private
  def bagel_params
    # return a hash of whitelisted attributes from params
    params.require(:bagel).permit(:name, :price, :tasty)
    # strong params returns a hash of attributes {name: 'some name', price: 2, tasty: true}
  end

end
```

---

- Questions on the `private` keyword? [Read this (very short) article.](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)

---

### Why Use Strong Params? 🦅

- From the docs (linked below), "With strong parameters, Action Controller parameters are forbidden to be used in Active Model mass assignments until they have been whitelisted. This means that you'll have to make a conscious decision about which attributes to allow for mass update. This is a better security practice to help prevent accidentally allowing users to update sensitive model attributes."

---

### Updating Our Form 📮

- Give our users feedback in the event that a validation fails:

```html
<h1>Create A New Bagel</h1>


<% if @bagel.errors.any? %>
  <div>
    <h2><%= pluralize(@bagel.errors.count, "error") %> prohibited this bagel from being saved:</h2>
    <ul>
    <% @bagel.errors.full_messages.each do |error_message| %>
      <li><%= error_message %></li>
    <% end %>
    </ul>
  </div>
<% end %>
<!-- rails form_with will assume that I want to POST to bagels_path -->
<%= form_for(@bagel, { method: 'POST', url: bagels_path }) do |f| %>
<!-- form for will try to populate with attributes found on @bagel instance -->
  <%= f.label :name %>
  <%= f.text_field :name %>
  <br>

  <%= f.label :price %>
  <%= f.number_field :price %>
  <br>
  <%= f.label :tasty %>
  <%= f.check_box :tasty %>
<br>
  <%= f.submit('Create A New Bagel') %>
<% end %>

```

- Recall that our `bagel` instances have a method, `Bagel#errors` that will return any errors associated with a particular bagel object. 
- We also have access to `Bagel#errors.full_messages`, which returns _an array_ of the error messages:

```ruby
# in a rails console
> bagel = Bagel.create()
=> #<Bagel id: nil, name: nil, price: nil, tasty: nil, created_at: nil, updated_at: nil>

> bagel.errors
=> #<ActiveModel::Errors:0x007feb72d21198>

> bagel.errors.full_messages
=> ["Name can't be blank", "Price Needs to be a number less than 30"]
```

---
### RESTful Routes Review/Reference 🛤

```ruby
Rails.application.routes.draw do
  # tells my app what do do/ how to respond to HTTP requests
  resources :bagels, only: [:index, :new, :create]

  # when I receive a GET request to /bagels
  # go TO the bagels controller, for a method called index
  # construct a helper method called bagels_path

# helper method is bagels_path
  # get '/bagels', to: 'bagels#index', as: 'bagels'
  # get '/bagels/new', to: 'bagels#new', as: 'new_bagel'
  # post '/bagels', to: 'bagels#create', as: 'bagels'
  # get '/bagels/:id', to: 'bagels#show', as: 'bagel'
end

# SINATRA
# get '/bagels' do
#   #controller code
# end
```

---

### External Resources

- [Active Record Validations Docs](http://guides.rubyonrails.org/active_record_validations.html)
- [Displaying Validations in Views Rails Docs](http://guides.rubyonrails.org/active_record_validations.html#displaying-validation-errors-in-views)
- [Form For](https://guides.rubyonrails.org/form_helpers.html#binding-a-form-to-an-object)
- [Rails Strong Params](https://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters)
- [Ruby Private Keyword](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)
