class AnswerCategory < ActiveRecord::Base

    has_many :questions
    has_many :incorrect_answers

end