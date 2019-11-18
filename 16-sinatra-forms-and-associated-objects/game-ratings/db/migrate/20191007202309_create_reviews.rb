class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string "content"
      t.string "game_id"
    end
  end
end
