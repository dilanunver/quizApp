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
      <div className='select-quiz'>
        <div className='category'>
          <h6>select category</h6>
          <select
            className='select-category'
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
        </div>
        <div className='difficulty'>
          <h6>select difficulty</h6>
          <select
            className='select-difficulty'
            onChange={(e) => {
              const selectedDifficulty = e.target.value;
              setDifficultyType(selectedDifficulty)
            }}>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>
      </div>
      <h5 className='title'>if you are ready, you can <button className='start-button' onClick={startTheGame}>start</button></h5>


    </div>
  )
}
