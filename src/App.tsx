import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes/AppRoutes'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)

    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </BrowserRouter>
  )
}

export default App