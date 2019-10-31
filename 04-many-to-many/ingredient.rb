class Ingredient
  # attr_ macros
  attr_accessor :name

  # Class variable defn
  @@all = []

  # initialize with name and food_group
  def initialize(name)
    @name = name

    @@all << self
  end

  # Class variable getter
  def self.all
    @@all
  end

  # Join model getter
  def recipe_ingredients
    RecipeIngredient.all.select do |recipe_ingredient|
      recipe_ingredient.ingredient == self
    end
  end

  # Recipe getter
  def recipes
    recipe_ingredients.map do |recipe_ingredient|
      recipe_ingredient.recipe
    end
  end

  def create_and_add_recipe(name, serving_size = "1 serving", amount = "1 serving")
    new_recipe = Recipe.new(name, serving_size)
    RecipeIngredient.new(new_recipe, self, amount)
  end  
  
end
