class CreateCoffee < ActiveRecord::Migration[5.2]
  def change
    create_table :coffees do |t|
      t.string :blend
      t.string :origin
      t.string :notes
 
      t.timestamps
    end
  end
end
