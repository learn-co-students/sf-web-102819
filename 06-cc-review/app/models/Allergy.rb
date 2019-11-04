class Allergy
  attr_accessor :user, :ingredient

  @@all = []

  def initialize(user, ingredient)
    @user = user
    @ingredient = ingredient
    @@all << self
  end

  # returns an array of all Recipe instances
  def self.all
    @@all
  end

  # should return the user instances who have recipe cards with this recipe
  def users

  end

  # returns recipe ingredients
  def ingredients

  end

end