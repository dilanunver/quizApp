import React from 'react'

export const StartScreen = ({ fetchForQuestion, setIsStartScreen, setCurrentQuestion,
  setCategoryType, setDifficultyType }) => {

  const startTheGame = () => {
    fetchForQuestion()
    setCurrentQuestion(0)
    setIsStartScreen(false)
  }
  return (
    <div className='start-screen'>
      <h4 className='header'>welcome to the quizApp!</h4>
      <h5 className='title'>if you want, you can <button className='start-button' onClick={startTheGame}>start</button></h5>
      <span>select category</span>
      <select
        onChange={(e) => {
          const selectedCategory = e.target.value;
          setCategoryType(selectedCategory)
        }}>
        <option value='9'>General Knowledge</option>
        <option value='23'>History</option>
        <option value='25'>Art</option>
        <option value='21'>Sports</option>
        <option value='27'>Animals</option>
      </select>
      <span>select difficulty</span>
      <select
        onChange={(e) => {
          const selectedDifficulty = e.target.value;
          setDifficultyType(selectedDifficulty)
        }}>
        <option value='easy'>Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
      </select>

    </div>
  )
}
