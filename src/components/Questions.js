import React, { useState } from 'react'
import { Question } from './Question'

export const Questions = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const nextButton = () => {
    setCurrentQuestion(currentQuestion + 1);
    let lastPage = questions.length - 1;
    if (lastPage <= currentQuestion) {
      setCurrentQuestion(0)
    }
    console.log(questions.length)
  }

  return (
    <div>
      <h4>Quiz App</h4>
      <h5>
        <Question {...questions[currentQuestion]} length={questions.length} currentQuestion={currentQuestion + 1} nextButton={nextButton}></Question>

      </h5>
    </div>
  )

}
