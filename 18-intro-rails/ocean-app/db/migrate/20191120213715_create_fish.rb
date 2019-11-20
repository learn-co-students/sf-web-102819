class CreateFish < ActiveRecord::Migration[6.0]
  def change
    create_table :fish do |t|
      t.string :name
      t.string :species
      t.integer :weight
      t.integer :taste
      t.boolean :bony

      t.timestamps
    end
  end
end
