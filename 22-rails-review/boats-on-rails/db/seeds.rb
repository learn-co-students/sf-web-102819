# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@boat_types = ["two-masted schooner", "paddleboat", "motorboat", "yacht", "canoe"]
booleans = [true, false]

10.times do
  Boat.create(
    name: "The #{Faker::Creature::Animal.name}",
    boat_type: boat_types.sample,
    length: rand(1..100),
    afloat: booleans.sample
  )
end

50.times do
  Passenger.create(name: Faker::Name.name, age: rand(1..60))
end

20.times do
  trip = Trip.new
  trip.boat = Boat.all.sample
  trip.passenger = Passenger.all.sample
  trip.save
end
