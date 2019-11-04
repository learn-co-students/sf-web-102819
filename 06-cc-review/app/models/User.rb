class User
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  # should return all of the user instances
  def self.all
    @@all
  end

  # should return all of the recipes this user has recipe cards for
  def recipes
    recipe_cards.map { |recipe_card| recipe_card.recipe }
  end

  def recipe_cards
    RecipeCard.all.select { |recipe_card| recipe_card.user == self }
  end 

  # should accept a recipe instance as an argument, as well as a date and rating, 
  # and create a new recipe card for this user and the given recipe
  def add_recipe_card(recipe, rating, date = DateTime.now)
    RecipeCard.new(self, recipe, rating, date)
  end

  # should accept anIngredient instance as an argument, 
  # and create a new Allergy instance for this User and the given Ingredient
  def declare_allergy(ingredient)
    Allergy.new(self, ingredient)
  end

  # should return all of the ingredients this user is allergic to
  def allergens
    allergies.map { |allergy| allergy.ingredient }
  end

  # returns all user allergies
  def allergies
    Allergy.all.select { |allergy| allergy.user == self }
  end

  # should return the top three highest rated recipes for this user.
  def top_three_recipes
    # sorted_recipe_cards = recipe_cards.sort{ |a, b| b.rating <=> a.rating }
    # top_three_cards = sorted_recipe_cards.slice(0, 3)
    # the next line returns the same elements as the previous two!
    top_three_cards = recipe_cards.max(3) { |a, b| a.rating <=> b.rating }
    top_three_cards.map { |card| card.recipe }
  end

  # should return the recipe most recently added to the user's cookbook.
  def most_recent_recipe

  end
end
