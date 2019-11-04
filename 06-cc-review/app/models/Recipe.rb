class Recipe
  attr_accessor :name, :serving_size

  @@all = []

  def initialize(name, serving_size = "1 serving")
    @name = name
    @serving_size = serving_size
    @@all << self
  end

  # returns an array of all Recipe instances
  def self.all
    @@all
  end

  # should return the recipe instance with the highest number of users 
  # (the recipe that has the most recipe cards)
  def self.most_popular

  end

  # should return the user instances who have recipe cards with this recipe
  def users

  end

  # returns recipe ingredients
  def ingredients

  end

end