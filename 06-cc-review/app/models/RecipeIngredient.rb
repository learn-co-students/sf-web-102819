class RecipeIngredient
  attr_accessor :recipe, :ingredient, :amount

  @@all = []

  def initialize(recipe, ingredient, amount = "1 smidgen")
    @recipe = recipe
    @ingredient = ingredient
    @amount = amount
    @@all << self
  end

  # should return all of the user instances
  def self.all
    @@all
  end
end
