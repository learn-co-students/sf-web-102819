class Cat < Pet

  @@cats = []

  def initialize(name, mood = "Anxious")
    super
    @@cats << self
  end

  def talk
    puts "Meow?"
  end

  def self.all
    @@cats
  end
end



# class Cat < Animal
  # attr_reader :name
  # attr_accessor :mood
  #
  # def initialize(name)
  #   @name = name
  #   @mood = 'nervous'
  # end
# end
