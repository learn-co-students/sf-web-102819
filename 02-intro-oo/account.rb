require 'pry'

class BankAccount
  attr_reader :balance, :type

  @@all = []

  # class method
  def self.all
    @@all
  end

  def initialize(type, balance = 0)
    @balance = balance
    @type = type
    @@all << self
  end

  # def balance
  #   @balance
  # end

  # def balance=(new_balance)
  #   @balance = new_balance
  # end

  def deposit(amount)
    @balance += amount
  end

  def withdraw(amount)
    @balance -= amount
  end
end

acct = BankAccount.new(100, "checking")
acct2 = BankAccount.new(500, "savings")

Pry.start
puts "words"