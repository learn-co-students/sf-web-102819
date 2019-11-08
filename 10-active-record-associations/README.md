# ActiveRecord Associations

## Goals 🚀

- [ ] Review Rake and file directory structure 🍱
- [ ] Review Active Record 🧩
- [ ] Review ActiveRecord migrations 🚢
- [ ] Review connecting models to ActiveRecord ⛓
- [ ] Survey modules, namespacing, mixins 🛰
- [ ] Practice using ActiveRecord methods ⚙️
- [ ] Implement model relationships with ActiveRecord associations 🔩

## Review 🍱

- ⚠️ _**What is Rake, Bundle, and the file directory structure?**_
- ⚠️ _**What is the Active Record ORM pattern?**_

## ActiveRecord Migrations and Models 🚢

### How to build a model 🕯

1. Develop your domain model
2. Write and execute migration file
3. Create model and inherit from ActiveRecord
4. Instantiate model in `seed.rb` and seed the database
5. Double-check naming in migration and model
6. `rake console` and test, test, test!

### Reviewing models and migrations ⛓

- Migrations
  - Created with `rake db:create_migration`
  - Inherit from `ActiveRecord::Migration`
  - Naming: Table name is **plural** (e.g. `:coffees`)
- Models
  - Classes written in their own `.rb` file in `app/models`
  - Inherit from `ActiveRecord::Base`
  - Naming: `.rb` file and class is **singular** (e.g. `class Coffee`)

## Modules, namespacing, mixins 🛰

- Modules
  - Examples: ActiveRecord's `ActiveRecord`, Faker's `Faker`
  - Containers for methods
  - Cannot be instantiated
  - Allow program to share methods between classes
  - Provide namespacing, mixin capabilities
- Namespacing
  - Examples: `ActiveRecord::Base` or `Faker::Coffee`
  - Creating space for names
  - Avoids naming "collisions" of methods and constant
- Mixins
  - Examples: `include ForeignAssociation`
  - Problem: Classes can only inherit from one class (chain of ancestry)
  - Solution: `include` or `extend` module for bonus methods
    - `include`
      - Includes module methods to class instance
      - Insert module into ancestor chain of class just after superclass
    - `extend`
      - Extends module methods to class
      - Doesn't alter ancestor chain

## Practicing ActiveRecord associations 🔩

- Associations: model relationships
  - Created with ♥ and macros!
    - `belongs_to`
    - `has_one`
    - `has_many`
    - `has_many :through`
    - others: read the docs
- Does your model `belongs_to` anything?
  - Yes? Need a foreign id in table
  - No? What _is_ it's relationship?

### How to build models, part deux 💡

1. Develop your domain model
2. Write and execute migration files
3. Create model, inherit from ActiveRecord, add association macros
4. Instantiate models in `seed.rb` and seed the database
5. Double-check naming in migrations and models
6. `rake console` and test, test, test!

## Takeaways 🚀

1. Rake gives us tools to manipulate our database and test our code.
2. ActiveRecord offers us methods to create models and their relationships
3. Modules are containers for methods to keep code DRY and organized
4. Association macros must be in agreement with database schema 

## Suggested Reading 📚

- [ActiveRecord Basics](https://guides.rubyonrails.org/active_record_basics.html)
- [ActiveRecord Migrations](https://guides.rubyonrails.org/active_record_migrations.html)
- [ActiveRecord Associations](https://guides.rubyonrails.org/association_basics.html)