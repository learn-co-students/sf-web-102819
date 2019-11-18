class CreateDinners < ActiveRecord::Migration[5.2]
  def change
    create_table :dinners do |t|
      t.string :name
      t.string :cost
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
