# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  author = Author.create(name: Faker::Book.author)
  rand(2..7).times do
    book = Book.new(
      title: Faker::Book.title,
      author: author,
      publisher: Faker::Book.publisher,
      genre: Faker::Book.genre,
      year: rand(1850..2050),
      checked_out: [true, false].sample
    )
    book.save
  end
end
