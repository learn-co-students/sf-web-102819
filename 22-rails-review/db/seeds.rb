# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Drink.create(name: "Tea", calories: "20")
Drink.create(name: "Coffee", calories: "10")
Drink.create(name: "Water", calories: "0")

3.times do
  Baristum.create(name: Faker::Name.name, years_of_experience: rand(1..20))
end

20.times do
  customer = Customer.new(name: Faker::Name.name)
  customer.drink = Drink.all.sample
  customer.save
end

50.times do
  order = Order.new
  order.baristum = Baristum.all.sample
  order.customer = Customer.all.sample
  order.cost = rand()*rand(1..10)
  order.save
end