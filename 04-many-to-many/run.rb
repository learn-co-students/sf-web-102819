# Require gems
require 'pry'
require 'faker'

# Require files
require_relative './recipe'
require_relative './ingredient'
require_relative './recipe_ingredient'

# Instantiate ingredients
20.times do
  Ingredient.new(Faker::Food.ingredient)
end

# Instantiate recipes and friends
cake = Recipe.new("cake")
3.times do
  RecipeIngredient.new(cake, Ingredient.all.sample)
end

5.times do
  new_recipe = Recipe.new(Faker::Food.dish)
  3.times do
    RecipeIngredient.new(new_recipe, Ingredient.all.sample)
  end
  end

# Pry and puts
binding.pry
puts "Lecture 4 boooyah"
