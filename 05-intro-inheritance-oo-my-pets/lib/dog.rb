class Dog < Pet

  @@dogs = []

  def initialize(name, mood = "nervous")
    super
    @@dogs << self
  end

  def talk
    super
    puts "Woof woof bowow"
  end

  def self.all
    @@dogs
  end
end
