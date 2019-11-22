class Alien < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true, length: { maximum: 100 }
  validates :home_planet, presence: true
  validates :appendages, numericality: { greater_than_or_equal_to: 0 }

  # def self.search(param)
  #   if param
  #     @aliens = Alien.where(name: param)
  #   else  
  #     @aliens = Alien.all
  #   end
  # end
end
