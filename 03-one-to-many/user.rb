# User class definition
class User
    attr_reader :username
    # attr_accessor :tweets

    @@all = []

    def self.all
        @@all
    end

    def initialize(username)
        @username = username
        # @tweets = []
        @@all << self
    end

    def tweets
        # @tweets
        Tweet.all.select { |tweet| tweet.user == self }
    end

    def post_tweet(message, user)
        new_tweet = Tweet.new(message, self)
        # @tweets << new_tweet
    end        
end