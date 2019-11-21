class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :publication_date
      t.boolean :checked_out, :default => false

      t.timestamps
    end
  end
end
