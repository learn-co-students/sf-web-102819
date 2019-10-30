# User class definition
class User
  attr_reader :username

  @@all = []

  def self.all
    @@all
  end

  def initialize(username)
    @username = username
    @@all << self
  end

  def post_tweet(message)
    self
    @tweets << message
  end

  def tweets
    Tweet.all.select { |tweet| tweet.user == self }
  end
end
