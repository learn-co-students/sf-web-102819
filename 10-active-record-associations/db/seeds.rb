20.times do
	Ingredient.create(name: Faker::Food.ingredient, description: Faker::Hipster.sentence)
end

5.times do
	new_recipe =	Recipe.create(name: Faker::Food.dish, serving_size: "2 servings")

	3.times do
		ingredient = Ingredient.all.sample
		RecipeIngredient.create(
			recipe_id: new_recipe.id, 
			ingredient_id: ingredient.id, 
			amount: Faker::Food.measurement
		)
	end
end
