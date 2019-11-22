class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :customer_id
      t.integer :baristum_id
      t.integer :cost

      t.timestamps
    end
  end
end
