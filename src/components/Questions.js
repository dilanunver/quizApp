import React from 'react'
import { Question } from './Question'


export const Questions = ({ questions, checkTheUser, setIsEndScreen, setCurrentQuestion, currentQuestion }) => {



  const nextButton = () => {
    setCurrentQuestion(currentQuestion + 1);
    let lastPage = questions.length - 1;
    if (lastPage <= currentQuestion) {
      setIsEndScreen(true)
    }
  }
  const backButton = () => {
    setCurrentQuestion(currentQuestion - 1);
    let previousPage = questions.length - 9;
    if (previousPage >= currentQuestion) {
      setCurrentQuestion(0)
    }
  }

  return (


    <div>
      <Question {...questions[currentQuestion]} length={questions.length} currentQuestion={currentQuestion}
        nextButton={nextButton} backButton={backButton} checkTheUser={checkTheUser} isLastQuestion={currentQuestion === questions.length - 1}
        isFirstQuestion={currentQuestion === questions.length - 10}
      ></Question>
    </div>

  )

}
