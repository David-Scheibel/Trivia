class Question < ActiveRecord::Base

    belongs_to :choice
    belongs_to :answer_category

end