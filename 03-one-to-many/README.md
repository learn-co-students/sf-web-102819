# One to Many Relationships (-<)

## Goals 🧗🏽

- [ ] Model a Domain 🗺
- [ ] Create User, Tweet classes and instances 🏗
- [ ] Review objects, classes, and instances in Ruby 🏭
- [ ] Review `self` and scope 🔬
- [ ] Implement User **-<** Tweet relationship 👫
- [ ] Practice maintaining a Single Source of Truth 📒

## Domain Modelling 🗺

- Domain Model is:
  - Representation of real world
  - Inspiration for designing software objects
  - Invaluable in creating Object-Oriented solution
- Domain + Models = [Domain Modeling](http://csis.pace.edu/~marchese/CS616/Lec5/se_l5a.htm)
  - Domain = The Thing the software is about
  - Model = The representation of a part of the Thing
  - Ex: Domain:Model as...
    - School:Teacher
    - Business:Sale
    - Air Travel:Airport
  - A Domain encapsulates Models
  - **Draw primitive domain model.**
  - Models have internal attributes, external relationship
  - **Add attribute drawing to domain model.**

## Building Relationships 👬

- Models have relationships/associations within a Domain
  - Types
    - One-to-one (**--**)
    - One-to-many (**-<**)
    - Many-to-many (**><**)
  - Examples
    - Flight **--** Destination
    - School **-<** Teachers
    - Businesses **><** Sales
- **Add relationships to domain model.**
- ⚠️ ***With a neighbor, take 3 minutes to create a Domain Model.***

## Creating Classes and Instances 🏗

### Classes, Instances, Objects 🏭

- ⚠️ ***What's the difference between a class, an instance, and an object?***
- Class versus instance method notation
  - `Class#method` denotes instance method
  - `Class.method` or `Class::method` denotes class method
- **Create User class.** The class should have these methods:
  - `User#initialize`, accepts a username string as an argument
  - A getter method for username
  - `User#post_tweet`, accepts a message string, creates a new Tweet, and adds it to the user's tweet array
  - ⚠️ ***What is*** `self` ***in*** `User#post_tweet` ***?***
  - `User#tweets` that returns an array of Tweets
  - `User.all`, returns an array of all User instances
  - ⚠️ ***What is*** `self` ***in*** `User.all` ***?***
  - ⚠️ ***What will happen if we try to call*** `User.post_tweet` ***?***

### `self` and Scope 🔬

- `self`
  - A keyword (a word that has special meaning)
  - Refers to object that "owns" code being executed at that line
  - Similar to `this` in JavaScript or `self` in Python
- Scope
  - Where something is visible/defined
  - Different types of variables have different scopes

### Users and Tweets 👫

- ⚠️ ***Create Tweet class.*** The class should have these methods:
  - `Tweet#initialize`, accepts message string and User instance as arguments
  - Setter and/or getter methods with appropriate arguments
  - `Tweet#message`, returns message as string
  - `Tweet#user`, returns the instance of the user class that created the Tweet instance
  - `Tweet.all` that returns all the Tweets created.
  - `Tweet#username` that returns the username of the tweet's user

## Single Source of Truth 📒

- Data can only be editing in one place–the single source
- Keep info in one place whenever possible
- In Ruby, you can pass objects as arguments
- ⚠️ *How does referencing objects compare to referencing instance variables?*
