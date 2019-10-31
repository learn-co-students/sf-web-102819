# This class represents the relationship between recipe and ingredients
# Since each class is responsible for knowing about itself, the RecipeIngredient class is responsible for knowing about the relationship between recipes and ingredients

class RecipeIngredient
  attr_accessor :recipe, :ingredient, :amount
  @@all = []

  def initialize(recipe, ingredient, amount = "1 smidgen") 
    @recipe = recipe
    @ingredient = ingredient
    @amount = amount
    @@all << self
  end

  def self.all
    @@all
  end
end
