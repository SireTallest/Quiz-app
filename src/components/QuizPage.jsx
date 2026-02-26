import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchQuestions } from '../services/triviaApi'
import { shuffleAnswers } from '../utils/shuffleAnswers'
import { decodeHTML } from '../utils/decodeHTML'

function QuizPage() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

 useEffect(() => {
  if (!state) {
    navigate('/')
    return
  }

  fetchQuestions(state)
    .then(data => {
      const formatted = data.map(q => ({
        question: decodeHTML(q.question),
        correct: decodeHTML(q.correct_answer),
        answers: shuffleAnswers(
          decodeHTML(q.correct_answer),
          q.incorrect_answers.map(decodeHTML)
        )
      }))
      setQuestions(formatted)
      setLoading(false)
    })
    .catch(err => {
      console.log('ERROR:', err.message)
      setError('Failed to load questions. Please go back and try again.')
      setLoading(false)
    })
}, [state, navigate])

  function handleAnswer(answer) {
    if (selectedAnswer) return // prevent changing answer
    setSelectedAnswer(answer)

    const current = questions[currentIndex]
    const isCorrect = answer === current.correct

    if (isCorrect) setScore(prev => prev + 1)

    setUserAnswers(prev => [
      ...prev,
      {
        question: current.question,
        selected: answer,
        correct: current.correct,
        isCorrect
      }
    ])
  }

  function handleNext() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
    } else {
      navigate('/results', { state: { score, total: questions.length, userAnswers } })
    }
  }

  if (loading) return <div className="text-center mt-20 text-xl">Loading questions...</div>
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>

  const current = questions[currentIndex]

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl">

        {/* Progress */}
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>Score: {score}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">{current.question}</h2>

        {/* Answers */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {current.answers.map((answer, i) => {
            let style = 'border border-gray-300 text-gray-700 hover:bg-blue-50'

            if (selectedAnswer) {
              if (answer === current.correct) {
                style = 'bg-green-100 border border-green-500 text-green-700'
              } else if (answer === selectedAnswer) {
                style = 'bg-red-100 border border-red-500 text-red-700'
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(answer)}
                className={`w-full text-left px-4 py-3 rounded-lg transition duration-200 ${style}`}
              >
                {answer}
              </button>
            )
          })}
        </div>

        {/* Next Button */}
        {selectedAnswer && (
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            {currentIndex + 1 === questions.length ? 'See Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  )
}

export default QuizPage