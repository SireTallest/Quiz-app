import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-yellow-600 text-yellow-50 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold tracking-wide">
          🧠 QuizApp
        </NavLink>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:underline hover:underline-offset-4'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:underline hover:underline-offset-4'
            }
          >
            History
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:underline hover:underline-offset-4'
            }
          >
            About
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar