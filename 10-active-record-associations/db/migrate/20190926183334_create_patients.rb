class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table(:patients) do |t|
      t.string :name
      t.integer :age
    end
  end
end
