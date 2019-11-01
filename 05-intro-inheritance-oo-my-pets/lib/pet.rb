class Pet
  attr_reader :name
  attr_accessor :mood

  @@all = []

  def self.all
    @@all
  end

  def initialize(name, mood = "nervous")
    @name = name
    @mood = mood
    @@all << self
  end

  def talk
    puts "..."
  end
end
