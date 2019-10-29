# `require` methods for gems and local files
require 'pry'
require_relative './tweet'
require_relative './user'

# Object creation
karl = User.new('KarlTheFog')
kermit = User.new('KermitTheFrog')

Tweet.new("it's not easy being green", kermit)
Tweet.new("can't wait to make people feel cold", karl)
Tweet.new("as an amphibian, I take offense to that", kermit)
Tweet.new("as a meteorological phenomenon, idgaf", karl)
Tweet.new("it's really not easy being green", kermit)

# Pry!
Pry.start