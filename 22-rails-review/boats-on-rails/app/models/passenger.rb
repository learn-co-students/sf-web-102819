class Passenger < ApplicationRecord
  has_many :trips
  has_many :boats, through: :trips

  validates :name, presence: true, uniqueness: true
  validates :age, presence: true, numericality: {minimum: 10, maximum: 60}
end
