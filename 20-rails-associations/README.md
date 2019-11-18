# Rails Associations
## Create New Application & Generate Models etc.
	- `rails new dinnerpicker`
	- `rails g resource User name` & `rails g resource Dinner name cost user:references`
	- What does `rails g resource` create?
		- Model
		- Migration
		- Controller
		- Views Folder
		- Routes
	- `rails db:migrate`

## Models
- Add `has_many :dinners, :dependent => :delete_all` to User model

## Controllers
- Generate each route including private methods

- User controller in the end:
```ruby
class UsersController < ApplicationController
	before_action :find_user, only: [:show, :update, :edit, :destroy]

	def index
		@users = User.all
	end

	def show
	end

	def new
		@user = User.new
	end

	def create
		@user = User.create(user_params)
		redirect_to @user
	end

	def edit
	end

	def update
		@user.update(user_params)
		
		redirect_to @user
	end

	def destroy
		@user.destroy

		redirect_to users_path
		# or redirect_to @users
	end

	private
	def user_params
		params.require(:user).permit(:name)
	end

	def find_user
		@user = User.find(params[:id])
	end
end
```

## Views
- Create views:
  - index.html.erb
  - show.html.erb
  - new.html.erb (`<%= render partial: "form" %>`)
  - edit.html.erb (`<%= render partial: "form", locals: {button_text: "Create User"} %>`)
  - _form.html.erb

- For Dinners _form:
```html
<%= form_for @dinner do |f| %>
	<%= f.label :name %>
	<%= f.text_field :name, class: "form-control" %>

	<%= f.label :cost %>
	<%= f.text_field :cost, class: "form-control" %>

	<%= f.label :user_id, "User" %>
	<%= f.select :user_id, @users.map {|u| [u.name, u.id]}, {}, class: 'form-control' %>

  <%#= f.collection_select(:user_id, @users, :id, :name, {}, {:class => 'form-control'}) %>

	<%= f.submit "Create Dinner", class: 'btn btn-primary' %>
<% end %>
```

- Render partials in new and edit pages
`<%= render partial: "form" %>`

https://guides.rubyonrails.org/form_helpers.html#option-tags-from-a-collection-of-arbitrary-objects

- User's show page:
```html
<div class="btn-group" role="group" aria-label="Basic example">
  <%= link_to "Add New Dinner", "/dinners/new", class: 'btn btn-primary' %>
	<%= link_to "Edit User", "/users/#{@user.id}/edit", class: 'btn btn-secondary' %>
	<%= link_to "Delete User", @user, method: :delete, class: 'btn btn-danger' %>

	<%#= button_to "Delete User", @user, method: :delete, class: 'btn btn-danger' %>
</div>
```

- Dinner's show page
```html
<h1><%= link_to @dinner.user.name, @dinner.user %> loves <%= @dinner.name %></h1>

<%= button_to "Delete Dinner", @dinner, method: :delete, class: "btn btn-danger" %>
```

## Extras:
### Buttons & Links in Rails
```ruby
<%= button_to "Rails Edit Button", { action: :edit }, method: :get %>

<%= link_to "Rails Edit Link", "/users/#{@user.id}/edit" %>

<form action="/users/<%= @user.id %>/edit">
  <input type="submit" value="HTML Button Input" />
</form>

<a href="/users/<%= @user.id %>/edit">HTML Edit Link</a>
```

## Change column
- `rails g migration change_cost_to_be_integer_in_dinners` & `rails db:migrate`