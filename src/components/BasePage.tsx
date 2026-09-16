import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'



interface BasePageProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

function BasePage({
  darkMode,
  setDarkMode,
}: BasePageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <header>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default BasePage
