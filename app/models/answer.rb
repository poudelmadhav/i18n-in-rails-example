class Answer < ApplicationRecord
  belongs_to :question

  scope :correct_answers, -> { where(correct: true) }
  scope :incorrect_answers, -> { where(correct: false) }
end
