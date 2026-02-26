import { Routes, Route } from 'react-router-dom'
import QuizSetup from './components/QuizSetup'
import QuizPage from './components/QuizPage'
import Results from './components/Results'
import QuizHistory from './components/QuizHistory'
import About from './components/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuizSetup />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/results" element={<Results />} />
      <Route path="/history" element={<QuizHistory />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App