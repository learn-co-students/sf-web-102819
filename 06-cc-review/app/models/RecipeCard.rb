class RecipeCard
  attr_accessor :user, :recipe, :date, :rating

  @@all = []

  def initialize(user, recipe, rating, date = DateTime.now)
    @user = user
    @recipe = recipe
    @date = date.strftime("%-m/%-d/%Y")
    @rating = rating
    @@all << self
  end

  # should return all of the user instances
  def self.all
    @@all
  end
end
