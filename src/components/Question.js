import React from 'react'
import { Loading } from '../components/Loading'


export const Question = ({ question, allAnswers, nextButton, backButton, length, currentQuestion,
  checkTheUser, isAnswered, isCorrect, whichOptionSelected, isLastQuestion, isFirstQuestion }) => {

  if (allAnswers === undefined) {
    return (
      <Loading></Loading>
    )
  }
  return (
    <div className='container'>
      <h6 className='container-title'>question {currentQuestion + 1} / {length}</h6>
      <p className='container-question'>{question}</p>
      <h5 className='container-answer-btn'>{allAnswers.map((answer) => {
        let buttonStyle = {}
        if (isAnswered && whichOptionSelected === answer) {
          if (isCorrect) {
            buttonStyle = { backgroundColor: '#4dd05a', color: '#FAF8F8' }
          } else {
            buttonStyle = { backgroundColor: '#d04d62', color: '#FAF8F8' }
          }
        }
        return (
          <div className='answer-btn'>
            <button className='answer-btn-style'
              disabled={isAnswered}
              style={buttonStyle}
              onClick={() => checkTheUser(currentQuestion, answer)}>{answer}</button>
          </div>
        )
      }
      )}</h5>
      {isFirstQuestion ? '' : <button className='back-button' onClick={backButton}>Back</button>}

      {isLastQuestion ? (<button className='submit-btn' onClick={nextButton}>Submit</button>) :
        (<button className='next-button' onClick={nextButton}>Next</button>)}



    </div>
  )
}
