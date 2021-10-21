puts "Destroying all Choices..."
Choice.destroy_all
puts "Destroying all Questions..."
Question.destroy_all
puts "Destroying all Incorrect Answers..."
IncorrectAnswer.destroy_all
puts "Destroying all Answer Categories..."
AnswerCategory.destroy_all


puts "Resetting all Choice sequence..."
Choice.reset_pk_sequence
puts "Resetting all Question sequence..."
Question.reset_pk_sequence
puts "Resetting all Incorrect Answer sequence..."
IncorrectAnswer.reset_pk_sequence
puts "Resetting all Answer Category sequence..."
AnswerCategory.reset_pk_sequence


puts "Creating some questions..."
25.times do
    Question.create(question_content: Faker::Alphanumeric.alphanumeric(number: 20, min_alpha: 10, min_numeric: 3),
                    points: 10,
                    correct_answer: Faker::Beer.brand,
                    answer_category_id: rand(1..5))
end

# puts "Creating some choices..."
# 10.times do
#     Choice.create(choice: Faker::Alphanumeric.alphanumeric(number: 20, min_alpha: 10, min_numeric: 3),
#                   was_correct: Faker::Boolean.boolean(true_ratio: 0.4),
#                   question_id: rand(1..25),
#                   score: Faker::Number.within(range: 1...1_000),
#                   streak: Faker::Number.between(from: 1, to: 10))
# end

puts "Creating some incorrect answers..."
500.times do
    IncorrectAnswer.create(incorrect_answer: Faker::String.random(length: 3..25),
                            answer_category_id: rand(1..5))
end

puts "Creating some answer categories..."
5.times do
    AnswerCategory.create(answer_category: Faker::Space.planet)
end

puts "Finished seeding db!!!"
puts "update"