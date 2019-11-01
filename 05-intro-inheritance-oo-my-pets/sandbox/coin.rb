class Coin < Die
  def initialize
    @faces = 2
  end

  def flip
    roll
  end
end