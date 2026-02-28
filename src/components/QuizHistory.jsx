import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function QuizHistory() {
  const [history, setHistory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('quizHistory') || '[]')
    setHistory(stored)
  }, [])

  function clearHistory() {
    localStorage.removeItem('quizHistory')
    setHistory([])
  }

  function getScoreColor(percentage) {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 50) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="min-h-screen bg-yellow-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border-4 border-yellow-600 rounded-2xl shadow-lg p-8">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-yellow-400">Quiz History</h1>
            <div className="flex gap-3">
              {history.length > 0 && (
                <button
                  onClick={clearHistory}
                  className="text-sm font-semibold text-red-500 hover:text-red-700 transition duration-200"
                >
                  Clear History
                </button>
              )}
              <button
                onClick={() => navigate('/')}
                className="bg-yellow-600 text-yellow-50 px-4 py-2 text-sm rounded-lg hover:bg-yellow-700 transition duration-200"
              >
                New Quiz
              </button>
            </div>
          </div>

          {/* Empty State */}
          {history.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No quizzes taken yet.</p>
              <button
                onClick={() => navigate('/')}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Take Your First Quiz
              </button>
            </div>
          ) : (
            <>
              {/* Stats Summary */}
              <div className="grid grid-cols-3 gap-4 mb-6 cursor-pointer">
                <div className="bg-yellow-200 hover:transition duration-200 hover:shadow-md hover:scale-105 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-white">{history.length}</p>
                  <p className="text-sm font-semibold text-yellow-600">Total Quizzes</p>
                </div>
                <div className="bg-yellow-200 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-red-500 ">
                    {Math.round(history.reduce((acc, q) => acc + q.percentage, 0) / history.length)}%
                  </p>
                  <p className="text-sm font-semibold text-yellow-600">Average Score</p>
                </div>
                <div className="bg-yellow-200 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-green-700">
                    {Math.max(...history.map(q => q.percentage))}%
                  </p>
                  <p className="text-sm font-semibold text-yellow-600">Best Score</p>
                </div>
              </div>

              {/* History List */}
              <div className="flex flex-col gap-3">
                {history.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border border-gray-200 rounded-lg p-4"
                  >
                    <div>
                      <p className="text-sm text-gray-500">{item.date}</p>
                      <p className="text-gray-700 font-medium">
                        {item.score} / {item.total} correct
                      </p>
                    </div>
                    <span className={`text-2xl font-bold ${getScoreColor(item.percentage)}`}>
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default QuizHistory