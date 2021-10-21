class CreateIncorrectAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :incorrect_answers do |t|
      t.string :incorrect_answer
      t.integer :answer_category_id
    end
  end
end
