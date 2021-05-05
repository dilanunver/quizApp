import React from 'react'

export const StartScreen = ({ fetchForQuestion, setIsStartScreen, setCurrentQuestion }) => {

  const startTheGame = () => {
    fetchForQuestion()
    setCurrentQuestion(0)
    setIsStartScreen(false)
  }
  return (
    <div>
      <h4>welcome the quiz!</h4>
      <h5>if you want, you can <button onClick={startTheGame}>start</button></h5>
    </div>
  )
}
