# ORMs and Active Record

## Goals 🦾

- [ ] Review ORM 🔭
- [ ] Explore Rake and file directory structure 🍱
- [ ] Migrate a database 🔋
- [ ] Connect Models to ActiveRecord ⛓
- [ ] Practice using ActiveRecord Methods 🔩

## Review 🔭

- **What is a database?**
  - A systematic collection of data
- **What is a database management system (DBMS)?**
  - A collection of programs that enables users to access database, manipulate data, and represent data
  - A collection of programs that controls access to the data
  - Types:
    - Hierachical
    - Network
    - Relational (mySQL, Oracle)
    - Object Oriented (postgreSQL)
- ⚠️ _**What is SQL?**_
  - The standard language for talking to relational databases
- ⚠️ _**What is Object Relational Mapping (ORM)?**_ 
  - Accessing a relational database (db) using an object-oriented programming language
  - ORMs help us "map" db tables to classes and instances of classes to rows in those tables.
- ⚠️ _**What is the Active Record pattern?**_
  - An approach to accessing data in a db using OOP
  - A **database** corresponds to a **domain**.
  - Each **table** in the db corresponds to a Ruby **class** (model).
  - Each **row** in a table corresponds to an **instance** of that model.
  - Each **column** in our table corresponds to an **attribute** of that model.

---

## Rake & File/Folder Structure 🍱

### Rake

- Rakefile defines tasks to be run from the command line
- `rake -T`: View all tasks
- Tasks allow us to encapsulate Ruby code that we want to execute **from the command line**
- We get some tasks from `sinatra/activerecord/rake` library which gives us easy-to-use ActiveRecord (AR) tasks (see `Gemfile`)

### File/Folder Structure

- `Gemfile` describes the gem dependencies for our program
- `app` folder holds our models (our Ruby classes)
- `db` directory holds migrations and `seeds.rb` file
- `config` holds environment file
  - `require 'bundler/setup'` and `Bundler.require` load all of the gems in our `Gemfile`
  - `ActiveRecord::Base.establish_connection` sets up our db (with options hash)
  - `require_all` loads all of our application code

---

## Migrations and Database Structure 🔋

- To set up db, use `rake db:create_migration NAME=create_boxers`
- Singular (model class) vs Plural (table) names
- `create_table` method takes a block, the block takes a table builder
- Run migrations with `rake db:migrate`
- `schema.rb` is authoritative representation of DB structure
- **Let's blow up the db (DO NOT DO IN REAL LIFE!!)!**
- Another way: gracefully fixing the DB
  1. Create a new migration
  2. Roll that migration back (`rake db:rollback`
  3. Delete the migration files you don't want to keep

---

## Connecting Models to ActiveRecord ⛓

- Our models (Ruby classes) appear in `app/models`

  ```ruby
  class Trainer < ActiveRecord::Base
  end
  ```

- Since our Ruby classes inherit from ActiveRecord, we have access to AR methods!

---

## Important Methods from ActiveRecord 🔩

- Model.new
  - Creates a new **RUBY** instance in local memory without persisting to the db
- Model.save
  - Inserts or updates a **RUBY** instance to the db
- Model.create
  - Model.new + Model.save
  - A class method that creates a new **RUBY** instance AND saves it to the db
- Model.all
  - Returns all instances (we wrote this by hand a million times)
- Model.first
  - Instance with the lowest ID in the db
- Model.find
  - Finds a record by id and returns a Ruby instance––`Boxer.find(1)` returns the boxer with an id of 1
- Model.find_by(attribute: value)
  - Can find by one attribute-value pair or multiple
  - `Boxer.find_by(name: 'Mike Tyson')` will return the boxer with a name of 'Mike Tyson'

---

## Takeaways 🥖

**1. Object Relational Mappers (ORMs)** let us write OOP code in one language, while leveraging a relational database that can only be queryed in another language. For example, ActiveRecord interfaces a Ruby program with a SQL database.
**2. Active Record** is pattern of ORMs with the following mapping: domain-database, model-table, column-attribute, row-instance.
**3.** As we build more complex applications, we will use new tools and patterns: **Bundle**, to manage gems and gem dependencies; **Rake**, to execute tasks for us from the command line; and a **specific file directory structure**, to separate concerns of Ruby code and adhere to a widely-used and understood conven tion.
**4. ActiveRecord** is a Ruby ORM that can be imported as a gem and lets us use Ruby to create databases and implement relationships.

## Suggested Reading 📚
- ["What is an ORM?" on StackOverflow](https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one)
- [Rake Documentation](https://github.com/ruby/rake)
- [ActiveRecord Documentation](https://guides.rubyonrails.org/active_record_basics.html)

