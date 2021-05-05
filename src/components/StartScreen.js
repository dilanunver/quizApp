import React from 'react'

export const StartScreen = ({ fetchForQuestion, setIsStartScreen, setCurrentQuestion }) => {

  const startTheGame = () => {
    fetchForQuestion()
    setCurrentQuestion(0)
    setIsStartScreen(false)
  }
  return (
    <div className='start-screen'>
      <h4 className='header'>welcome to the quizApp!</h4>
      <h5 className='title'>if you want, you can <button className='start-button' onClick={startTheGame}>start</button></h5>
    </div>
  )
}
