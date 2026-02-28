import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Results() {
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) navigate('/')
  }, [])

  if (!state) return null

  const { score, total, userAnswers } = state

  const percentage = Math.round((score / total) * 100)

  function getScoreColor() {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 50) return 'text-yellow-500'
    return 'text-red-500'
  }

  function saveToHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
    history.unshift({
      score,
      total,
      percentage,
      date: new Date().toLocaleDateString()
    })
    localStorage.setItem('quizHistory', JSON.stringify(history))
  }

  useEffect(() => {
    if (state) saveToHistory()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">

        {/* Score Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h1>
          <p className="text-gray-500 mb-4">Here's how you did</p>
          <div className={`text-6xl font-bold mb-2 ${getScoreColor()}`}>
            {percentage}%
          </div>
          <p className="text-gray-600 text-lg">
            You got <span className="font-semibold">{score}</span> out of <span className="font-semibold">{total}</span> correct
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6 justify-center">
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              New Quiz
            </button>
            <button
              onClick={() => navigate('/history')}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              View History
            </button>
          </div>
        </div>

        {/* Per Question Review */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Question Review</h2>
          <div className="flex flex-col gap-4">
            {userAnswers.map((item, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border ${item.isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}
              >
                <p className="font-medium text-gray-800 mb-2">
                  {i + 1}. {item.question}
                </p>
                <p className={`text-sm ${item.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  Your answer: {item.selected}
                </p>
                {!item.isCorrect && (
                  <p className="text-sm text-green-600">
                    Correct answer: {item.correct}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Results