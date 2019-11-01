# Intro to Inheritance 👑

## Goals 🚴

- [ ] Review Object-Oriented design of Ruby 💎
- [ ] Survey class inheritance in Ruby 🔭
- [ ] Construct superclass and subclasses 🚧

## Object-Oriented Ruby 💎

- ⚠️ ***What is an object?***
- 💡 *An object is a combination of data and methods.*
- ⚠️ ***What is Object-Oriented Programming (OOP)?***
- 💡 *OOP is a programming design philosophy. Programs are based on objects and their interactions.*
- Basic OOP concepts:
  - Abstraction: Simplify reality with models
  - Polymorphism: Context matters
  - Encapsulation: Hide details of class from other objects
  - Inheritance: Make new classes using pre-defined classes
- 2 steps to creating on object
  1. Define a class (a template for an object).
  2. Instantiate an object from the class.
- `#initialize` as constructor method of class
- Method: A function defined inside the body of a class
- `#class`, `#ancestors`, and `#methods` help us explore nature of objects

## Inheritance in Ruby 🔭

- Inheritance: Form new classes using classes that have already been defined
- Hierarchy of single inheritance: Base => Derived, Super => Sub, Parent => Child
- Keep us DRY
  - ⚠️ ***What does DRY mean?***
  - Generally, the number of bugs is proportional to the number of lines of code
- `#super` calls a method of the same name in parent's class

## Making Superclasses and Subclasses 🚧

- `<`
  - `Pet`
    - `Cat < Pet`
  - `Sandwich`
    - `BLT < Sandwich`
    - `Egg < Sandwich`
  - `Die`
    - `DTwenty < Die`
    - `Coin < Die`
  - `Vehicle`
    - `Car < Vehicle`
    - `Motorcycle < Vehicle`
    - `Semi < Vehicle`
- Using the `super` keyword
- Inheritance is nice but not always necessary
