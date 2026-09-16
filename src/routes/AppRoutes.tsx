import { Route, Routes } from 'react-router-dom'

import BasePage from '../components/BasePage'
import Home from '../pages/Home'
import JobVacancies from '../pages/JobVacancies'
import JobDetail from '../pages/JobDetail'
import About from '../pages/About'


interface AppRoutesProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

function AppRoutes({
  darkMode,
  setDarkMode,
}: AppRoutesProps) {
  return (
    <Routes>
      <Route
        element={
          <BasePage
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobVacancies />} />
        <Route path="/jobs/:jobId" element={<JobDetail />} />
        <Route path="/about" element={<About />} />

      </Route>
    </Routes>
  )
}

export default AppRoutes