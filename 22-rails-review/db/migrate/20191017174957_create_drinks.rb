class CreateDrinks < ActiveRecord::Migration[6.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.integer :calories

      t.timestamps
    end
  end
end
