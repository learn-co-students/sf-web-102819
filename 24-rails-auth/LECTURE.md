# Authorization and Authentication in Rails 🚂

## Goals 🚀

### Core

- [ ] Describe the difference between signing up and signing up 📐
- [ ] Describe the difference between authentication and authorization ⚖️
- [ ] Implement secure user account creation and storage 🔐
- [ ] Build sign up, login, and logout features 🛠
- [ ] Utilize sessions and cookies to save user state 🍪
- [ ] Conditionally render views based on session status 🚦

### Bonus

- [ ] Create a many-many self-referential relationship 🧫

## Overview 🌎

### "Signing In" Versus "Signing Up" 📐

- Signing Up
  - Happens once
  - Creates a new user instance
- Signing In
  - Happens continuously with authentication
  - Creates a new user session

### Authentication Versus Authorization ⚖️

- Authentication
  - > Are you who you say you are?
  - Usernames and passwords are typically used to identify users
   (i.e. [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication))
- Authorization
  - > Are you allowed to see/do that?
  - Session cookies typically used to track user state
- Authentication versus Authorization
  - Authorization occurs after Authentication
  - Authentication happens once per session, authorization can happen every request per session

## Rails Implementation 💫

### Secure User Account Creation and Storage 🔐

- Passwords
  - *Storing a password in a database: good or bad idea? Why?*
  - In the news, [Facebook databases leak passwords](https://www.forbes.com/sites/daveywinder/2019/09/05/facebook-security-snafu-exposes-419-million-user-phone-numbers)!
  - **[Never ever ever store your users' plaintext passwords in your database](https://blog.mozilla.org/webdev/2012/06/08/lets-talk-about-password-storage/). It's bad form and should be avoided at all costs.**
  - Encrypting vs. Hashing
    - Encryption
      - Scrambles a string based on a "secret" key
      - Two-way street
    - Hashing
      - Generates random with input and algorithm
      - "[Salting](https://en.wikipedia.org/wiki/Salt_(cryptography))" the hash (adding character to input) makes it darn near irreversable
    - [Why salted hash is as good for passwords as for breakfast](https://gcn.com/articles/2013/12/02/hashing-vs-encryption.aspx)
  - Length and complexity for security
    - Password possibilities = Number of possibilities for each character raised to power of number of characters
    - **Calculate number of password possibilities**
    - [How secure is my password?](https://howsecureismypassword.net/)
- `bcrypt` gem
  - Legendary password hashing function
  - Usage
    - Uncomment `gem 'bcrypt' in Rakefile
    - `bundle install`
    - **Look at my screen, not yours**
    - `salted_pw = BCrypt::Password.create('P@ssw0rd')`
    - `salted_pw == 'P@ssw0rd'`
    - More details in `README.md`
  - "Convention over configuration", especially with security

### Signing Up, Logging In, and Logging Out 🛠

- Generating User model
  - `rails g resource User username password_digest avatar`
  - `rails db:migrate`
  - Add `has_secure_password` to `app/models/user.rb`
  - `has_secure_password` comes from
  [`ActiveModel` and adds methods to set and authenticate against a BCrypt password](https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password):
  - Add [validations](https://guides.rubyonrails.org/active_record_validations.html) to
  user
  - Test in `rails console`
  - `bcrypt` adds `#authenticate` method
    - `@user.authenticate("passwordstring")`
    - Returns user or false
- Set up routes: `resources :users, only: [:new, :create, :show]`
- Set up actions in Users Controller
- Build form for the `new` action
  - *`form_for` or `form_tag`?*
  - *How do we hide the password fields?*

```erb
<%= form_for @user do |f| %>
  <%= f.label :username %>
  <%= f.text_field :username %>
  <%= f.label :password %>
  <%= f.text_field :password %>
  <%= f.label :password_confirmation %>
  <%= f.text_field :password_confirmation %>
  <%= f.submit %>
<% end %>
```

- Recapping necessary steps
  - `password_digest` as an attribute in our `users` table
  - `bcrypt` installed in `Gemfile`
  - `has_secure_password` in the `User` model

- Login form
  - `get "/signup", to: "users#new", as "signup"
  - `password` is a *virtual* attributes
  - Password field
  - Session, the period of time between login and logout
  - `placeholder` option
- Sessions Controller
  - Every form needs an action (i.e. resource) and a method (i.e. request)
  - `SessionsController#create`
- Application Controller
  - `ApplicationController#current_user`
    - `if session[:user_id]`, find user
  - `ApplicationController#logged_in?`
  - `!!currentuser`
  - `ApplicationController#authorized`
  - `redirect_to login_path unless logged_in?`

### Sessions and Cookies 🍪

- *What is state? Do HTTP requests have state?*
- *How does an application keep you logged in between requests?*
- Cookies are essentially hashes (not to be confused with cryptographic hashes)
- Sessions aren't a model and aren't stored in DB, but still need routes, a controller, and views

`routes.rb`

```ruby
get "signup", to: "users#new", as: "signup"
get "login", to: "sessions#new", as: "login"
post "sessions", to: "sessions#create", as: "sessions"
```

`sessions_controller.rb`

```ruby
def new
  # don't need anything in here, cause we're not setting up a
  # blank model to couple with the form
end

def create
  # no strong params cause there is no mass assignment
  @user = User.find_by(username: params[:username])
  if @user && @user.authenticate(params[:password])
    redirect_to @user
  else
    redirect_to login_path
  end
end
```

- *How does the above code work?*
- *What does `User#find_by` return?*
- *Why `@user` on left and `@user.authenticate` on right?*

```ruby
# in irb or a rails console
> true && true
  => true

> true && false
  => false

> true && not_a_variable
  NameError (undefined local variable or method `not_a_variable` for main:Object)

> false && not_a_variable
  => false
```

- Create login form
  - *`form_for` or `form_tag`?*
  - `sessions/new.html.erb`

```erb
<%= form_tag login_path do %>
  <%= label_tag "Username" %>
  <%= text_field_tag :username %>
  <%= label_tag "Password" %>
  <%= password_field_tag :password %>
  <%= submit_tag "Sign In" %>
<% end %>
```

- Saving user state
  - While `flash` works just between 2 requests, `session` persists across entire usage of app
  - `sessions/new.html.erb`

```ruby
session[:user_id] = @user.id
```

### Conditionally Rendering Views 🚦

- *Which controller would I want to write authorization methods?*

```slack
@channel 
> *In which controller would I want to write authorization methods?* 
🍔 `UsersController`
🥦 `ApplicationController`
🍉 `SessionsController`
```

- For the dryest code, define app-wide controller methods in ApplicationController. In order:

```ruby
# Return current user or nil
def current_user
  if session[:user_id]
    @user = User.find_by(id: session[:user_id])
  else
  end
end

# Return true if there is a current user or nil if there isn't
def logged_in?
  !!current_user
end

# Redirect to the login page if a user is not logged in
def authorized
  redirect_to login_path unless logged_in?
end
```

- How do we use these helper methods in other controllers while keeping our code DRY?

```ruby
before_action :authorized
```

- What happens when we try to go to login? 

```ruby
skip_before_action :authorized, only: [:new, :create] # or whatever onlys you need
```

#### Logging out

So how do you log out? By destroying the session.

`routes.rb`

```ruby
delete "sessions", to: "sessions#destroy"
```

`sessions_controller.rb`

```ruby
def destroy
  session.delete(:user_id) # or session[:user_id] = nil
end
```

- We need Log Out/In button
  - Do so in `application.html.erb` so visible everywhere
  - Finally, in `application.html.erb`:

```erb
<% if logged_in? %>
  <%= link_to "Logout", sessions_path, method: :delete %>
<% else %>
  <%= link_to "Login", login_path %>
<% end %>
```

- How can we use controller methods in views?
  - `helper_method :method_name`
- Selectively show instances of model

## BONUS: Self-Referential Relationships

- [Self Joins Doc](https://guides.rubyonrails.org/association_basics.html#self-joins)
  - `has_many :subordinates, class_name: “Employee”, foreign_key: “manager_id”`
    - `:subordinates` is an alias
    - `:subordinates` is an instance of the `Employee` model
    - `manager_id` is key in `Employee` table used to identify instance as manager
  - `belongs_to :manager, class_name: "Employee", optional: true`
    - `:manager` is an alias
    - `:manager` is an instance of the `Employee` model
    - It's optional to have a manager

`###_create_employees.rb`

```ruby
class CreateEmployees < ActiveRecord::Migration
  def change 
    create_table :employees do |t|
      t.references :manager

      t.timestamps
    end
  end
end
```

- *What if we want an employee to have more than one manager?*

- Many-to-Many Self Joins
  - Like any many-to-many relationship, we need a join table
  - Let's try this out with hosts and guests!

`db/migrations/#####_create_parties.rb`

```ruby
class CreateParties < ActiveRecord::Migration
  def change 
    create_table :parties do |t|
      t.references :host
      t.references :guest

      t.timestamps
    end
  end
end
```

`app/models/user.rb`

```ruby
class User < ApplicationRecord
  # Validations and has_secure_password

  has_many :guests, through: :guest_attendances, source: :guest
  has_many :guest_attendances, foreign_key: :host_id, class_name: "Party"

  has_many :hosts, through: :host_attendances, source: :host
  has_many :host_attendances, foreign_key: :guest_id, class_name: "Party"
end
```

```ruby
class Party < ApplicationRecord
  belongs_to :guest, foreign_key: "guest_id", class_name: "User"
  belongs_to :host, foreign_key: "host_id", class_name: "User
end
```
