require_relative '../config/environment.rb'

5.times do
  User.new(Faker::Name.name)
  Recipe.new(Faker::Food.dish)
end

30.times do
  Ingredient.new(Faker::Food.ingredient)
end

30.times do
  user = User.all.sample
  recipe = Recipe.all.sample
  ingredient = Ingredient.all.sample
  RecipeCard.new(user, recipe, rand(1..5))
  RecipeIngredient.new(recipe, ingredient, Faker::Food.measurement)
  Allergy.new(user, ingredient)
end

binding.pry
puts "Practice makes perfect!"
