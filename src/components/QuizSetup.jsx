import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCategories } from '../hooks/useFetchQuestions'

function QuizSetup() {
  const { categories, loading, error } = useCategories()
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [difficulty, setDifficulty] = useState('medium')
  const [amount, setAmount] = useState(10)

  const filtered = categories.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  )

  function handleStart() {
    if (!selectedCategory) return alert('Please select a category.')
    navigate('/quiz', {
      state: { category: selectedCategory, difficulty, amount }
    })
  }

  if (loading) return <div className="text-center mt-20 text-xl">Loading categories...</div>
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Quiz App</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search topics..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Category Select */}
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Select a Category --</option>
          {filtered.length > 0 ? (
            filtered.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))
          ) : (
            <option disabled>No categories match your search</option>
          )}
        </select>

        {/* Difficulty */}
        <select
          value={difficulty}
          onChange={e => setDifficulty(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        {/* Number of Questions */}
        <select
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value={5}>5 Questions</option>
          <option value={10}>10 Questions</option>
          <option value={15}>15 Questions</option>
          <option value={20}>20 Questions</option>
        </select>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Start Quiz
        </button>
      </div>
    </div>
  )
}

export default QuizSetup