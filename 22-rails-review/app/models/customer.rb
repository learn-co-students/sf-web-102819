class Customer < ApplicationRecord
  belongs_to :drink
  has_many :orders
  has_many :barista, through: :orders

  validates :name, presence: true

  def self.get_customers(param)
    if !param.nil?
      @customers = Customer.all.sort{ |a, b| b.orders.count <=> a.orders.count }
      # byebug
    else
      @customers = Customer.all
    end
  end

end