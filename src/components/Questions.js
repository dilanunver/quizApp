import React, { useState } from 'react'
import { Question } from './Question'


export const Questions = ({ questions, checkTheUser, setIsEndScreen }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)


  const nextButton = () => {
    setCurrentQuestion(currentQuestion + 1);
    let lastPage = questions.length - 1;
    if (lastPage <= currentQuestion) {
      setIsEndScreen(true)
    }
  }
  return (
    <div>
      <h4>Quiz App</h4>
      <h5>
        <Question {...questions[currentQuestion]} length={questions.length} currentQuestion={currentQuestion}
          nextButton={nextButton} checkTheUser={checkTheUser}
        ></Question>
      </h5>
    </div>
  )

}
