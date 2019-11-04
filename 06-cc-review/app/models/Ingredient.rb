class Ingredient
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  # should return all of the ingredient instances
  def self.all
    @@all
  end

  # should return the ingredient instance that the highest number of users are allergic to
  def self.most_common_allergen

  end
end