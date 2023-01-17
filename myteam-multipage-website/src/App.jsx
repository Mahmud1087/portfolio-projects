import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactMe from './pages/ContactMe'
import { GlobalStyles } from './components/styles/GlobalStyles.styled'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

export default function App() {
  const [isSideBarOPen, seIsSideBarOpen] = useState(false)

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          path='/'
          element={<HomePage open={isSideBarOPen} setOpen={seIsSideBarOpen} />}
        />
        <Route
          path='about'
          element={<AboutPage open={isSideBarOPen} setOpen={seIsSideBarOpen} />}
        />
        <Route
          path='contact'
          element={<ContactMe open={isSideBarOPen} setOpen={seIsSideBarOpen} />}
        />
      </Routes>
    </>
  )
}
