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
      question.whichOptionSelected = '-';
      whatTheUserAnswered.push(question.whichOptionSelected)
    }
    else if (question.whichOptionSelected !== null) {
      whatTheUserAnswered.push(question.whichOptionSelected)
    }
  })
  return (
    <div className="start-screen">
      <h4 className='header'>your quiz result </h4>
      <h5 className='score'>score: <span>{score}</span> / {questions.length}</h5>
      <h5 className='empty'>your empty results:  <span>{empty}</span></h5>
      <button className='play-again' onClick={playAgain}>Play Again</button>
      <h6 className='result'>{whatTheUserAnswered.map((yourAnswer, index) => {
        return (

          <ul>
            <p className='question'> question {index + 1}</p>
            <p className='your-answer'> your answer: {yourAnswer}</p>
            <p className='right-answer'>right answer: <span>{questions[index].correct_answer}</span></p>
          </ul>

        )
      })}</h6>


    </div>
  )
}
