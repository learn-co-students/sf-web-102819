class DTwenty < Die
  def initialize
    @faces = 20
  end

  def roll
    result = super
    if result == 20
      puts "Critical hit!!"
    elsif result == 1
      puts "Critical failure!!"
    end
    result
  end
end