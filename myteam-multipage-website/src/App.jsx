import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactMe from './pages/ContactMe'
import { GlobalStyles } from './components/styles/GlobalStyles.styled'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactMe />} />
      </Routes>
    </>
  )
}
