class Trip < ApplicationRecord
  belongs_to :boat
  belongs_to :passenger

  validates :boat_id, presence: true
  validates :passenger_id, presence: true

  # accepts_nested_attributes_for :passenger
end
