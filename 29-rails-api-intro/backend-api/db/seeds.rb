# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dog = Species.create(name: 'Dog')
dolphin = Species.create(name: 'Dolphin')
ferret = Species.create(name: 'Ferret')

p_winfield = Animal.create(name: 'Panther-Winfield', species: dog, gender: 'male')
charlotte = Animal.create(name: 'Charlotte', species: dog, gender: 'female')
charlie = Animal.create(name: 'Charlie', species: dolphin, gender: 'male')
eunice = Animal.create(name: 'Eunice', species: ferret, gender: 'female')