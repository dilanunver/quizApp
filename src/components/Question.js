import React from 'react'
import { Loading } from '../components/Loading'


export const Question = ({ question, allAnswers, nextButton, length, currentQuestion, checkTheUser, isAnswered, isCorrect, whichOptionSelected }) => {

  if (allAnswers === undefined) {
    return (
      <Loading></Loading>
    )
  }
  return (
    <div>
      <h5>question {currentQuestion + 1} / {length}</h5>
      <h3>{question}</h3>
      <h5>{allAnswers.map((answer) => {
        let buttonStyle = {}
        if (isAnswered && whichOptionSelected === answer) {
          if (isCorrect) {
            buttonStyle = { backgroundColor: 'green', color: 'white' }
          } else {
            buttonStyle = { backgroundColor: 'red', color: 'white' }
          }
        }
        return (
          <ul>
            <button
              disabled={isAnswered}
              style={buttonStyle}
              onClick={() => checkTheUser(currentQuestion, answer)}>{answer}</button>
          </ul>
        )
      }
      )}</h5>
      <>
        <button onClick={nextButton}>Next</button>

      </>

    </div>
  )
}
