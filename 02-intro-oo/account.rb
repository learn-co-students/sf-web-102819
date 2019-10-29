require 'pry'

class Account
    attr_reader :customer_id
    attr_accessor :balance

    @@all = []

    def self.all
        @@all
    end

    def initialize(customer_id, balance)
        @customer_id = customer_id
        @balance = balance
        @@all << self
    end

    # def customer_id
    #     @customer_id
    # end

    # def balance=(balance)
    #     @balance = balance
    # end

    # def balance
    #     @balance
    # end
end

new_account = Account.new(1, 100)

binding.pry

puts "Account creator"