import { Component } from 'react';
import QuestionCard from "./QuestionCard"
import Scoreboard from "./Scoreboard"


const Quiz = (p) => {


    return (

        <div className ="QuizFrame justify-content-center">
            <div className="card-long m-2 p-2">
                <Scoreboard 
                    points={p.points}
                    lives={p.lives}
                    skips={p.skipsLeft}
                    streak={p.streak}
                />
            </div>
            <div className="row quiz-container">
                <div>
                { p.questions.map(q => 
                    <QuestionCard 
                        key={q.id}
                        question_id={q.id}
                        question={q.question_content}
                        correct_answer={q.correct_answer}
                        answer_category={q.answer_category}
                        points={q.points}
                        skips_left={p.skipsLeft}
                        skipQuestion={p.skipQuestion}
                        correctAnswer={p.correctAnswer}
                        incorrectAnswer={p.incorrectAnswer}
                        updateQuestion={p.updateQuestion}
                        updateResults={p.updateResults}
                    /> )
                }
                </div>
            </div>
        </div>
    )
}

export default Quiz