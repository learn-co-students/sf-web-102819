class ChangeCostToBeIntegerInDinners < ActiveRecord::Migration[5.2]
  def change
    change_column :dinners, :cost, :integer
  end
end
