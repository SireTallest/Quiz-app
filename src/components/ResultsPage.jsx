import { useLocation, useNavigate } from 'react-router-dom';

export default function ResultsPage() {
  const { state } = useLocation();
  const navigate  = useNavigate();

  if (!state) { navigate('/'); return null; }

  const { score, total, answers, categoryName } = state;
  const percentage = Math.round((score / total) * 100);

  const emoji =
    percentage === 100 ? '🏆' :
    percentage >= 70   ? '🎉' :
    percentage >= 40   ? '😐' : '😢';

  const message =
    percentage === 100 ? 'Perfect score! Incredible!' :
    percentage >= 70   ? 'Great job! Well done!'      :
    percentage >= 40   ? 'Not bad! Keep practising.'  : 'Better luck next time!';

  const scoreColor =
    percentage >= 70 ? 'text-green-600' :
    percentage >= 40 ? 'text-yellow-600' : 'text-red-500';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">🧩 QuizApp</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">

        {/* Score Card */}
        <div className="bg-white rounded-3xl shadow-lg p-10 text-center mb-8">
          <div className="text-7xl mb-4">{emoji}</div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{message}</h2>
          <p className="text-gray-500 mb-6">{categoryName}</p>
          <div className={`text-6xl font-extrabold mb-2 ${scoreColor}`}>
            {score}/{total}
          </div>
          <p className="text-gray-400 text-sm">{percentage}% correct</p>

          {/* Progress Ring visual */}
          <div className="mt-6 w-full bg-gray-100 rounded-full h-4 overflow-hidden">
            <div
              className={`h-4 rounded-full transition-all duration-700 ${
                percentage >= 70 ? 'bg-green-500' :
                percentage >= 40 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Answer Review */}
        <h3 className="text-lg font-bold text-gray-700 mb-4">📋 Answer Review</h3>
        <div className="space-y-4 mb-8">
          {answers.map((a, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-sm p-5 border-l-4 ${
                a.isCorrect ? 'border-green-500' : 'border-red-500'
              }`}
            >
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Q{index + 1}. {new DOMParser().parseFromString(a.question, 'text/html').body.textContent}
              </p>
              <p className={`text-xs font-medium ${a.isCorrect ? 'text-green-600' : 'text-red-500'}`}>
                Your answer: {new DOMParser().parseFromString(a.selected, 'text/html').body.textContent}
                {!a.isCorrect && (
                  <span className="text-green-600 ml-2">
                    ✅ Correct: {new DOMParser().parseFromString(a.correct, 'text/html').body.textContent}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('/quiz', { state: { ...state } })}
            className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-colors shadow-md active:scale-95"
          >
            🔄 Retry Same Quiz
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex-1 py-3 bg-white hover:bg-gray-50 text-indigo-600 font-bold rounded-2xl border-2 border-indigo-200 transition-colors shadow-md active:scale-95"
          >
            🏠 Choose New Topic
          </button>
        </div>

      </main>

      <footer className="text-center text-sm text-gray-400 py-8 border-t border-gray-200 mt-6">
        © 2025 QuizApp. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}
