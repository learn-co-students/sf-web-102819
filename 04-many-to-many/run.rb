require 'pry'
require 'faker'

require_relative './recipe.rb'
require_relative './ingredient.rb'
require_relative './recipe_ingredient.rb'

food_groups = ["vegetable, fruit, grain, protein, dairy"]

# Instantiate ingredients
20.times do
  Ingredient.new(Faker::Food.ingredient, food_groups.sample)
end

# Instantiate recipes and friends
5.times do
  new_recipe = Recipe.new(Faker::Food.dish)
  3.times do
    RecipeIngredient.new(new_recipe, Ingredient.all.sample, Faker::Food.measurement)
  end
end

binding.pry
puts "Lecture 4!!"
