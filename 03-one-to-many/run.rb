# `require` methods for gems and local files
require 'pry'
require_relative 'user'
require_relative 'tweet'

# Object creation
user1 = User.new("username1")
kermit = User.new("kermit")
karl = User.new("karl")

karl_tweet1 = Tweet.new("Technically speaking I'm very cool", karl)
karl_tweet2 = Tweet.new("Welcome to Fogust", karl)

# Pry!
binding.pry
puts "Lecture 3"
