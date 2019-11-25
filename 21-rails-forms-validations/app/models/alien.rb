class Alien < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :description, presence: true, length: { maximum: 100 }
  validates :home_planet, presence: true
  validates :appendages, numericality: { greater_than_or_equal_to: 0 }
  validate(:maximum_appendages)

  def maximum_appendages
    if self.appendages && self.appendages > 100
      self.errors[:appendages] << "That's waaaaaay too many appendages!"
    end
  end
end
