class Die

  def initialize
    @faces = 6
  end

  def roll
    (rand * @faces).to_i + 1
  end
end