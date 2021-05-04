import React, { useState, useEffect } from 'react'
import './App.css';
import { EndScreen } from './components/EndScreen';
import { Loading } from './components/Loading'
import { Questions } from './components/Questions';

function App() {
  const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEndScreen, setIsEndScreen] = useState(false)
  //fetching data
  const fetchForQuestion = async () => {
    setLoading(true)
    const response = await fetch(url)
    const result = await response.json()
    const questions = result.results;
    // adding some values of the array
    questions.forEach(item => {
      item.isAnswered = false;
      item.isCorrect = false;
      item.whichOptionSelected = null;
    })
    questions.map((question) => {
      if (question.incorrect_answers.length === 3) {
        const allAnswersUnSorted = [...question.incorrect_answers, question.correct_answer]
        allAnswersUnSorted.sort(() => Math.random() - 0.5)
        question.allAnswers = allAnswersUnSorted
      }
    })
    setQuestions(questions)
    setLoading(false)
  }
  const checkTheUser = (index, answer) => {
    const quizies = [...questions];
    if (quizies[index].allAnswers.includes(answer)) {
      quizies[index].isAnswered = true;
      quizies[index].whichOptionSelected = answer
    }
    if (quizies[index].whichOptionSelected === quizies[index].correct_answer) {
      quizies[index].isCorrect = true;
    }
    setQuestions(quizies)
  }

  useEffect(() => {
    fetchForQuestion()
  }, [])

  if (loading) {
    return (
      <div className="App">
        <Loading></Loading>
      </div>
    )
  }
  if (isEndScreen) {
    return (
      <div>
        <EndScreen questions={questions}></EndScreen>
      </div>
    )
  }
  return (
    <div>
      <Questions questions={questions} checkTheUser={checkTheUser} setIsEndScreen={setIsEndScreen}></Questions>
    </div>
  );
}

export default App;
