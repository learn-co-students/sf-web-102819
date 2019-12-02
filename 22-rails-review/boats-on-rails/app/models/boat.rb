class Boat < ApplicationRecord
  has_many :trips
  has_many :passengers, through: :trips

  validates :name, presence: true, uniqueness: true
  validates :boat_type, presence: true
  validates :length, presence: true, numericality: {maximum: 100, minimum: 3}
  # validates :afloat, presence: true

  def self.types
    Boat.all.map{ |boat| boat.boat_type }.uniq
  end

  # def passengers=(passenger_attr)
  #   passenger_attr.each do |hash|
  #     Passenger.create(hash)
  #   end
  # end

  accepts_nested_attributes_for :passengers, reject_if: proc { |attributes| attributes['name'].blank? || attributes['age'].blank? }
end
