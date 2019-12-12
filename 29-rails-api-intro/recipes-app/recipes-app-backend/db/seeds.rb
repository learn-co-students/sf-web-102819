# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  Recipe.create(name: Faker::Food.dish, description: Faker::Food.description)
  3.times do
    Ingredient.create(name: Faker::Food.ingredient, fair_trade: [true, false].sample)
  end
  rand(3..7).times do
    recipe = Recipe.all.sample
    ingredient = Ingredient.all.sample
    RecipeIngredient.create(recipe_id: recipe.id, ingredient_id: ingredient.id, measurement: Faker::Food.measurement)
  end
end
