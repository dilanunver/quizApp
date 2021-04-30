import React from 'react'
import { Loading } from '../components/Loading'


export const Question = ({ question, allAnswers, nextButton, length, currentQuestion }) => {

  if (allAnswers === undefined) {
    return (
      <Loading></Loading>
    )
  }
  return (
    <div>
      <h5>question {currentQuestion} / {length}</h5>
      <h3>{question}</h3>
      <h5>{allAnswers.map((answer) =>
        <ul>
          <button>{answer}</button>
        </ul>

      )}</h5>
      <h4>
        <button onClick={nextButton}>Next</button>
      </h4>

    </div>
  )
}
