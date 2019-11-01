# Load gems
require 'faker'
require 'pry'

# Load local files
require_relative './pet'
require_relative './cat'
require_relative './dog'
require_relative './fish'
require_relative './owner'

# Create owners
jane = Owner.new("Jane")
4.times do
  Owner.new(Faker::Name.first_name)
end

# Mood array
mood = ["happy", "sad", "bored", "crazy", "anxious", "curious"]

# Create pets
3.times do
  Pet.new(Faker::Games::Pokemon.name, mood.sample)
end

# Create types of pets
5.times do
  Owner.all.sample.pets[:cats] << Cat.new(Faker::Creature::Cat.name, mood.sample)
  Owner.all.sample.pets[:dogs] << Dog.new(Faker::Creature::Dog.name, mood.sample)
  Owner.all.sample.pets[:fishes] << Fish.new(Faker::Creature::Horse.name, mood.sample)
end

binding.pry
puts "Lecture 5!!!"
