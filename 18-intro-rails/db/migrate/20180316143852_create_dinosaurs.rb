class CreateDinosaurs < ActiveRecord::Migration[5.1]
  def change
    create_table :dinosaurs do |t|
      t.string :name
      t.string :species
      t.string :number_of_teeth
      t.string :diet
      t.string :era

      t.timestamps
    end
  end
end
