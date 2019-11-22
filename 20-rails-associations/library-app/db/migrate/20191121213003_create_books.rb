class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.references :author, null: false, foreign_key: true
      t.string :publisher
      t.string :genre
      t.integer :year
      t.boolean :checked_out

      t.timestamps
    end
  end
end
