import React from 'react'

export const EndScreen = ({ questions, setIsEndScreen, setIsStartScreen }) => {

  const playAgain = () => {
    setIsStartScreen(true)
    setIsEndScreen(false)
  }

  // showing score , empty answers, and answers
  let score = 0;
  let empty = 0;
  let whatTheUserAnswered = []

  questions.forEach(function (question) {
    if (question.isCorrect) {
      score++
    }
    if (!question.isAnswered) {
      empty++
    }
    if (question.whichOptionSelected === null) {
      question.whichOptionSelected = 'empty';
      whatTheUserAnswered.push(question.whichOptionSelected)
    }
    else if (question.whichOptionSelected !== null) {
      whatTheUserAnswered.push(question.whichOptionSelected)
    }
  })
  return (
    <div className="App">
      <h4>your quiz result </h4>
      <h5>score: {score} / {questions.length}</h5>
      <h6>your answers : {whatTheUserAnswered.map((yourAnswer, index) => {
        return (
          <ul>
            question {index + 1} / {yourAnswer} / {questions[index].correct_answer}
          </ul>
        )
      })}</h6>
      <h5>your empty results: {empty}</h5>
      <button onClick={playAgain}>Play Again</button>
    </div>
  )
}
