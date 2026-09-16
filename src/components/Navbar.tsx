import { Link } from 'react-router-dom'

import { classes } from "../styles/classes"

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="border-b bg-black text-gray-100 dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-bold text-gray-100 dark:text-white"
        >
          ScrapJob
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={classes.navLink}
          >
            Home
          </Link>
          
          <Link
            to="/jobs"
            className={classes.navLink}
          >
            Job Vacancies
          </Link>

          

          <Link
            to="/about"
            className={classes.navLink}
          >
            About
          </Link>

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded border px-3 py-1 text-sm text-gray-300 dark:border-gray-600 dark:text-gray-300"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
