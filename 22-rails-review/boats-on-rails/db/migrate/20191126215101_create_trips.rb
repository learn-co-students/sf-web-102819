class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.references :boat, null: false, foreign_key: true
      t.references :passenger, null: false, foreign_key: true

      t.timestamps
    end
  end
end
