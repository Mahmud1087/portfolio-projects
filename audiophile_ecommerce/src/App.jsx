import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Error, Navbar } from './components/main'
import {
  EarphonesPage,
  HeadphonesPage,
  Homepage,
  ProductsPage,
  SingleproductPage,
  SpeakersPage,
} from './pages/main'

export default function App() {
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='headphones' element={<HeadphonesPage />} />
        <Route path='speakers' element={<SpeakersPage />} />
        <Route path='earphones' element={<EarphonesPage />} />
        <Route path='products' element={<ProductsPage />} />
        <Route path='products/:id' element={<SingleproductPage />} />
        <Route path='error' element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}
