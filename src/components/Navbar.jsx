import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-yellow-600 text-yellow-50 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold tracking-wide">
          🧠 QuizApp
        </NavLink>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
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
            
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-yellow-600 px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:underline hover:underline-offset-4'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/history"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:underline hover:underline-offset-4'
            }
          >
            History
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:underline hover:underline-offset-4'
            }
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar