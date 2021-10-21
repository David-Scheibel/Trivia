# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_01_140854) do

  create_table "answer_categories", force: :cascade do |t|
    t.string "answer_category"
  end

  create_table "choices", force: :cascade do |t|
    t.string "choice"
    t.boolean "was_correct"
    t.integer "question_id"
    t.integer "score"
    t.integer "streak"
  end

  create_table "incorrect_answers", force: :cascade do |t|
    t.string "incorrect_answer"
    t.integer "answer_category_id"
  end

  create_table "questions", force: :cascade do |t|
    t.string "question_content"
    t.integer "points"
    t.string "correct_answer"
    t.integer "answer_category_id"
  end

end
