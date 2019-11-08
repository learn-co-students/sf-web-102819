class Recipe < ActiveRecord::Base
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  def self.most_ingredients
    Recipe.all.max { |a, b| a.ingredients.count <=> b.ingredients.count }
  end
end
