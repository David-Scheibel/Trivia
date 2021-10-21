class CreateChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :choices do |t|
      t.string :choice
      t.boolean :was_correct
      t.integer :question_id
      t.integer :score
      t.integer :streak
    end
  end
end
