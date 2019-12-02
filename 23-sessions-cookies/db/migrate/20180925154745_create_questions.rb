class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :content
      t.integer :correct_answer_id

      t.timestamps
    end
  end
end
