# Rails Forms and Validations

## Goals

- [ ] Review form helpers, RESTful routes in Rails 🚂
- [ ] Write validations 👍
- [ ] Handle errors by implementing `flash` 🚧
- [ ] Build secure, accessible, user-friendly forms 😊

## Generating Apps ⚙️

- `rails new PROJECTNAME`
  - *What does this command create?*
- *What do we do now?*
- `rails g resource Alien name description legs:integer planet:boolean eats_humans:boolean`
- Double-check what's been created
  - Migration
  - Model
- Migrate
- `rails db:migrate ENV:development`
  - *Why separate databases?*
  - Development team doesn't have time to test! Enter: QA/QC team
  - Have separate databases to test and prove out usage
- Build order: M => C => V (not M => V => C)
- Controller
  - *How do we generate controller with methods/actions?*
- Create callback function for controller actions
  - `before_action :find_alien, only: [:show, :edit, :update, :destroy]`
- *What does `link_to` do for us?*

## Building Forms 🚂

- Don't be afraid to review HTML
  - [form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
  - [input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
  - MDN form tutorials
- *What do the form helpers do for us?*
- `form_tag` versus `form_for` versus `form_with`
  - Use `form_tag` for [dealing with basic forms](https://guides.rubyonrails.org/v5.2/form_helpers.html#dealing-with-basic-forms)
  - Use `form_for` for forms [dealing with model objects](https://guides.rubyonrails.org/v5.2/form_helpers.html#dealing-with-model-objects)
  - Use `form_with` after your code challenge for all of the above
    - `form_tag` and `form_for` are being deprecated due to overlap
    - *What does deprecated mean?*
    - `form_with(url: )` is to `form_tag` as `form_with(model: )` is to `form_for`
- **Build both types of forms on site**
  - Build out index, new, and create controller actions and views
  - Build out search form on index
  - Refactor with `form_with`
- `label_for` or `f.label`
- *What 508 compliance? What do we mean by accessibility?*
- **Inspect the HTML**
- *What a does a value of `"1"`
- *Why use validations?*
- **Never assume users know how to use your product!**
- *If something doesn't save to the DB, what do we expect from the ID?*
- Experiment in the rails console!

## [Validation](https://guides.rubyonrails.org/active_record_validations.html) 👍

- Used to ensure only valid data is written to database
- Executed at model level so that:
  - They're database-agnostic
  - They cannot be bypaseed by end user
- Other options
  - Database constraints
    - 🙂 Powerful
    - 🙁 Make testing and maintenance more difficult
  - Client-side validations
    - 🙂 Instant feedback with JavaScript
    - 🙁 Can be bypassed by turning off JS
  - Controller-level validations
    - 🙂 Convenient to write (at first)
    - 🙁 Difficult to read, test, maintain
- Validations happen when an object is saved to database
- 🌈 Fun Fact: Bang versions (`instance#save` vs `instance#save!`) of ActiveRecord methods raise exceptions if the instance is invalid
- `#valid?` triggers validations
- *What is implied in a method name with a question mark?*
- Validations are written in their respective models
- `validates` expects at least two arguments
  - Argument 1: The model attribute being validated
  - Argument 2+: *Built-in* [ActiveRecord validation helpers](https://edgeguides.rubyonrails.org/active_record_validations.html#validation-helpers)
  - Argument 3+ (optional): [Validation options](https://edgeguides.rubyonrails.org/active_record_validations.html#common-validation-options)
- `validate` expects *custom* valudations defined in model
- `validates` versus `validate`
- Custom `validate` method
  - Private method
  - *What's the use of private methods?*
    - Private methods are methods that are not supposed to be called from outside of an object
    - Use private methods as helper methods for other instance methods
  - Must add error to instance (e.g. `errors.add(:attribute, "problem description")`)
- Controller code must account for invalid data

## Handling Errors 🚧

- `Class#errors` returns errors associated with instance of class (after validation)
- `Class#errors#full_messages` returns array of error messages
- We need to display errors in validations for a better user experience!
- `@errors = @alien.errors.full_messages`
- Enter: the flash hash
  - `flash[:errors] = @alien.errors.full_messages`
  - Follows one more request
- *What's the difference between `render` and `redirect_to`?*

## Administrative 🔑

- Attendance
- Monitor Mounts
- Code Challenge
  - Routes
  - MVC
  - Associations
  - Forms
  - Validations

## External Resources 📜

- [Active Record Validations Docs](http://guides.rubyonrails.org/active_record_validations.html)
- [Displaying Validations in Views Rails Docs](http://guides.rubyonrails.org/active_record_validations.html#displaying-validation-errors-in-views)
- [Form For](https://guides.rubyonrails.org/form_helpers.html#binding-a-form-to-an-object)
- [Rails Strong Params](https://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters)
- [Ruby Private Keyword](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)
