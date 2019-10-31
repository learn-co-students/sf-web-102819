# Many to Many Relationships (><)

## Goals 🏋️‍

- [ ] Model the Cooking Domain 🥘
- [ ] Create Recipe, Ingredient, RecipeIngredient classes and instances 🏗
- [ ] Implement Recipe **><** Ingredient relationship 👫
- [ ] Maintain Single Sources of Truth 🔥

## The Cooking Domain 🥘

- ⚠️ ***What is domain modeling? What do we mean by a domain? Model?***
- ⚠️ ***What is the relationship between Recipe and Ingredient?***
- A domain model consists of:
  - Domain
  - Models
  - Attributes
  - Relationships

## Recipe and Ingredient 🧾

- **Build the Recipe model**
  1. Create class
  2. Write Getter & Setter methods with `attr_` macros
  3. Write Getters & Setters without macros
  4. Define `Recipe#initialize`
  5. Implement default arguments
  6. ⚠️ ***How should we keep track of a recipe's ingredients?***
  7. Define and assign `@@all` class variable, `Recipe.all` method
- Faker
  - ⚠️ ***What is a gem? How can we find them?***
  - Generates fake data

## Join Models ⛓

- ⚠️ ***What do we mean by maintaining a Single Source of Truth?**
- Pro tips
  - *Don't* store collections of objects on other objects
  - *Don't* store one object in multiple collections
- A Join Model is responsible for tracking the relationship between other models
  - "Many-to-many"
  - "Has-many-through"

## RecipeIngredient 🧩

- ⚠️ ***What might the attributes be for our join model?***
- **Add helpful instance methods to Recipe, Ingredient models.**
  - `Recipe`
    - `#add_ingredient`
    - `#recipe_ingredients`
    - ⚠️ ***How do we access just the instances of RecipeIngredients that belong to a particular instance of Recipe?***
    - `#ingredients`
    - ⚠️ ***How do we get the ingredients for a particular recipe (using our previous method?***
  - `Ingredient`
    - `#recipe_ingredients`
    - `#ingredients`

## Testing 💣

- Do all the things!
- Lean on run file, Faker, and loops to create instances and reduce feedback
- Use `pry` or `byebug` or your IDE's debugger!

## Administrative 🧐

- Keeping up with Labs
  - The First Week is one of the hardest
  - Shoot for at least 80-90%
  - Move on to another topic if you feel like a raptor
- Chasing the Green Circle
  - Beware pattern matching
  - Beware just passing the tests
  - Ask yourself, "Is my code behaving the way I expect? Why or why not?"
  - Be a scientist!
- The Code Challenge
  - Purpose: assess your independent mastery, prepare you for technical interviews
  - Practice challenge on Friday afternoon
  - Not passing the code challenge is not the end of the world or your time at Flatiron
