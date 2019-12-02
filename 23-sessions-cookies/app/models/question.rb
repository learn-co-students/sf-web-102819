class Question < ApplicationRecord
    has_many :responses
    has_many :answers
    belongs_to :correct_answer, class_name: "Answer", optional: true

    def random_answers
        self.answers.order("RANDOM()")
    end

end
