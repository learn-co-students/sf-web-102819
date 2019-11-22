class CreateAliens < ActiveRecord::Migration[6.0]
  def change
    create_table :aliens do |t|
      t.string :name
      t.string :description
      t.string :home_planet
      t.integer :appendages
      t.boolean :dangerous

      t.timestamps
    end
  end
end
