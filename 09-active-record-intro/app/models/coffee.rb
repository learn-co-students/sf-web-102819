class Coffee < ActiveRecord::Base
  def stringify
    "#{self.blend} is from #{self.origin} and has notes of #{self.notes}"
  end
end