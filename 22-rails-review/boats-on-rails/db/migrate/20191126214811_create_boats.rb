class CreateBoats < ActiveRecord::Migration[6.0]
  def change
    create_table :boats do |t|
      t.string :name
      t.string :boat_type
      t.integer :length
      t.boolean :afloat

      t.timestamps
    end
  end
end
