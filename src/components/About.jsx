function About() {
  return (
    <div className="min-h-screen bg-yellow-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border-4 border-yellow-600 rounded-2xl shadow-lg p-8">

          {/* Header */}
          <h1 className="text-3xl font-bold text-yellow-600 mb-2">About QuizApp</h1>
          <p className="text-gray-500 mb-6">A simple, fast, and fun quiz experience.</p>

          {/* What is it */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-yellow-600 mb-2">What is QuizApp?</h2>
            <p className="text-gray-600 leading-relaxed">
              QuizApp is a web-based quiz application that allows users to test their knowledge
              across a wide range of topics. Questions are fetched in real time from the
              Open Trivia Database, a free and community-driven trivia API.
            </p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-yellow-600 mb-2">Features</h2>
            <ul className="text-gray-600 space-y-2">
              <li>✅ 20+ quiz categories to choose from</li>
              <li>✅ Easy, Medium, and Hard difficulty levels</li>
              <li>✅ Instant correct/incorrect feedback</li>
              <li>✅ Final score summary with question review</li>
              <li>✅ Quiz history with average and best score tracking</li>
              <li>✅ Fully responsive on desktop and mobile</li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-yellow-600 mb-2">Built With</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {['React', 'Vite', 'Tailwind CSS', 'React Router', 'Open Trivia Database API', 'localStorage'].map(tech => (
                <div
                  key={tech}
                  className="bg-yellow-200 cursor-pointer hover:transition duration-1000 hover:shadow-md hover:scale-105 text-yellow-700 text-sm font-medium px-4 py-2 rounded-lg text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Developer */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-yellow-600 mb-2">Developer</h2>
            <p className="text-gray-600">
              Built by <span className="font-bold text-yellow-600">Oladepo Abdulbaki</span> as
              a capstone project for the ALX Frontend Development Program. You may reach out to me via <a href="mailto:abdoladepo@gmail.com" className="text-yellow-700 font-bold">abdoladepo@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/oladepo-abdulbaki/" className="text-yellow-700 font-bold">LinkedIn</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About