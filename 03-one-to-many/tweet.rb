# Tweet class definition
class Tweet
  attr_reader :message, :user

  @@all = []

  def self.all
    @@all
  end

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def username
    @user.username
  end
end
