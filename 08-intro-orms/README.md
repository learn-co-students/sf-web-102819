# Intro to ORMs (Object Relational Mappers) 🍬

## Goals 🧘🏿

- [ ] Build a database 🏗
- [ ] Review SQL queries 🛢
- [ ] Define CRUD 🎨
- [ ] Define ORM 🍬
- [ ] Create an ORM 🍭

## Database and SQL Review with Books and Authors 🏗

*What does the design philosophy of* Domain Modeling *look like in a relational database?*

**1. Create a *books* table and an *authors* table. Books should have a *title* and authors should have a *name*.**

**books table**

| id | title | author_id |
| --- |--- | --- |
| 1 | The Sympathizer | 1 |
| 2 | New and Selected Poems, Volume 2 | 5 |
| 3 | One Hundred Years of Solitude | 3 |
| 4 | War and Peace | 4 |
| 5 | Sula | 2 |

**authors table**

| id | name |
| --- | --- |
| 1 | Viet Thanh Nguyen |
| 2 | Toni Morrison |
| 3 | Gabriel Garcia Marquez |
| 4 | Leo Tolstoy |
| 5 | Mary Oliver |

**2. Write the SQL to find all books written by a certain author given the author's id.**

```SQL
SELECT * FROM books WHERE author_id = 2;
```

**3. Create a *books* table and an *authors* table where each author can have one or multiple books. Books should have a *title* and authors should have a *name*.**

**books table**

id | title
---|---
1 | The Sympathizer
2 | New and Selected Poems, Volume 2
3 | One Hundred Years of Solitude
4 | War and Peace
5 | Sula
6 | Ana Karenina
7 | The Death of Ivan Ilyich
8 | Love in the Time of Cholera

**book_authors (join) table**

id | book_id | author_id
---|---|---
1 | 1 | 1
2 | 2 | 5
3 | 3 | 3
4 | 4 | 4
5 | 5 | 2
6 | 6 | 4 
7 | 7 | 4
8 | 8 | 3

**authors table**

id | name
---|---
1 | Viet Thanh Nguyen
2 | Toni Morrison
3 | Gabriel Garcia Marquez
4 | Leo Tolstoy
5 | Mary Oliver

## CRUD 🎨

*What are the four ways we can interact with data? What might this interaction look like in SQL? In Ruby?*

**Create**

- `INSERT INTO books (title, author_id) VALUES ('War and Peace', 2);`
- `book = Book.new({'title' => 'War and Peace', 'author_id' => 2})`
- `book.save` 

**Read**

- `SELECT * FROM books;`
- `Book.all`
- `SELECT * FROM books WHERE id = 5 LIMIT 1;`
- `Book.find(5)`
- `Book.find_by(id: 5)`

**Update**

- `UPDATE books SET title = 'Ana Karenina' WHERE id = 5`
- `book.update({'title' => 'Ana Karenina'})`

**Delete**

- `book.delete`
- `DELETE FROM books WHERE id = 3`

## The Active Record Pattern 🧩

- The Active Record Pattern is an approach to accessing data in a database using object-oriented programming.
- A **database** corresponds to a **domain**.
- Each **table** in the database corresponds to a Ruby **class** (model).
- Each **row** in a table corresponds to an **instance** of that model.
- Each **column** in our table corresponds to an **attribute** of that model.

## DO THE THING 🍭

### Why? 🤔

*Problem*: Data is *not persistent*. Ruby stores data in memory. 
*Solution*: Relational database saved, accessed, and altered in `.db` file.

### Examine structure and tooling 🛠

- `run.rb` file in `./bin`
- Outsourced reqs in `./config/environment.rb`
    - *What is namespacing of SQLite3?*
    - SQLite3 module with Database class
- Store database file in `./db/database_name.db`
- `./lib` contains classes
- Gemfile(.lock) helps manage dependencies
    - Bundler is a gem which manages other gems
    - `bundle init` creates a Gemfile
    - `bundle install` installs gems
    - Gemfile lists required gems and source
    - Gemfile.lock records installed gems *and* dependencies
- Rakefile
    - Rake is a task runner!
    - `rake -T` shows tasks
    - `rake task_name` runs task
    - `rake console` better than `irb` because it contains program information

### Wrap SQL in Ruby 🍬

- Guidelines
    - Execute SQL command in method
    - Return Object instead of Enumerable
- Create methods
    - `@id` attribute
    - `#save` a tweet
- Helper methods
    - `#in_db?`
    - `#set_instance_id`
- Read methods
    - Get `.all` tweets!
    - Return class instances instead of hashes from database
    - `.find_by_id`
- Update method
    - `#update` with object attribute
    - ActiveRecord gem will help with `#save` management
- Delete
    - `.delete_all` from array, db
    - `#delete` 
- ***WARNING*** SQL Injection!
    - [Little Bobby Tables](https://xkcd.com/327/)
    - Parameterize SQL calls to defend!

### For your edification... 🦜

- [ ] **A tweet belongs to a user and has some message content - must have user_id**
- [ ] **The belongs_to must have a user_id on it**
- [ ] **A user has a username, and has many tweets**
- [ ] **A tweet can have many tags and a tag can have many tweets**

Still hungry? [Watch Avi Flombaum build a Metaprogrammed Abstract ORM.](https://www.youtube.com/watch?time_continue=2&v=hts7TjpPw-8)
