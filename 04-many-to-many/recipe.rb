# 1. Create recipe class
class Recipe
  # 2. Add getter & setter (reader & writer) methods for recipe name, serving size & ingredients
  attr_accessor :name, :serving_size#, :ingredients

  # 7. Keep all of our recipes in one place
  @@all = []

  # 4. Create method that will take a recipe name to create a new recipe
  # 5. Add a default argument for serving size
  def initialize(name, serving_size = "1 serving")
    @name = name
    @serving_size = serving_size
    # 6. How should we keep track of ingredients?
    # @ingredients = []

    # 7. How do we save the recipe to our array?
    @@all << self
  end

  # 7. Method that enables us to access all of our recipes from a different class
  def self.all
    @@all
  end

  def recipe_ingredients
    RecipeIngredient.all.select do |recipe_ingredient|
      recipe_ingredient.recipe == self
    end
  end

  def ingredients
    recipe_ingredients.map do |recipe_ingredient|
      recipe_ingredient.ingredient
    end
  end

  def add_ingredient(ingredient, amount = "1 smidgen")
    RecipeIngredient.new(self, ingredient, amount)
  end

end