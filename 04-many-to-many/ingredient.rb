class Ingredient
  attr_accessor :name, :food_group
  # attr_accessor :name, :food_group, :recipes
  @@all = []

  def initialize(name, food_group = "vegetable")
    @name = name
    @food_group = food_group
    # @recipes = []
    @@all << self
  end

  def self.all
    @@all
  end

  def recipe_ingredients
    RecipeIngredient.all.select do |recipe_ingredient|
      recipe_ingredient.ingredient == self
    end
  end

  def recipes
    recipe_ingredients.map do |recipe_ingredient|
      recipe_ingredient.recipe
    end
  end
end
