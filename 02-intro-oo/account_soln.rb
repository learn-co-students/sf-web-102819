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

    def deposit(amount)
        self.balance += amount
        binding.pry
    end

    def withdraw(amount)
        @amount += amount
    end

    # binding.pry

    # def balance
    #     @balance
    # end

    # def balance=(balance)
    #     @balance = balance
    # end

    # def customer_id
    #     @customer_id
    # end
end

account1 = Account.new(1, 700)
account2 = Account.new(2, 800)
account3 = Account.new(3, 400)
account_info_hashes = [
    {customer_id: 4, balance: 200},
    {customer_id: 5, balance: 900},
    {customer_id: 6, balance: 10000}
]
account1.deposit(200)

account_info_hashes.each do |account_info_hash|
    Account.new(account_info_hash[:customer_id], account_info_hash[:balance])
end

accounts_array = Account.all

balances = accounts_array.map { |account| account.balance }
high_balance = accounts_array.find { |account| account.balance > 500 }
high_balances = accounts_array.select { |account| account.balance > 500 }
total_balance = accounts_array.reduce(0) do |total, account| 
    total + account.balance
end

binding.pry

puts "Resume program"