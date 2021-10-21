class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :question_content
      t.integer :points
      t.string :correct_answer
      t.integer :answer_category_id
    end
  end
end
