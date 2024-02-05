// import { Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import BuyMyBook from './components/BuyMyBook';
import Footer from './components/Footer';
import Header from './components/Header';
import LatestBook from './components/LatestBook';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import MoreReviews from './components/MoreReviews';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <AboutMe />
              <LatestBook />
              <Reviews />
              <BuyMyBook />
            </>
          }
        />
        <Route path='/more_reviews' element={<MoreReviews />} />
      </Routes>
      <Footer />
      {/* <Router></Router> */}
    </>
  );
}

export default App;
