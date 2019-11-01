require 'pry'

require_relative 'die'
require_relative 'dtwenty'
require_relative 'coin'

coin = Coin.new
dsix = Die.new
dtwenty = DTwenty.new

binding.pry
puts "Dice!"
