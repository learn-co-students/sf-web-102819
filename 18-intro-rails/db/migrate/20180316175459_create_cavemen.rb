class CreateCavemen < ActiveRecord::Migration[5.1]
  def change
    create_table :cavemen do |t|

      t.timestamps
    end
  end
end
