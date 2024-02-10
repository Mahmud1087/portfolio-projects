import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import BuyMyBook from './components/BuyMyBook';
import Footer from './components/Footer';
import Header from './components/Header';
import LatestBook from './components/LatestBook';
import Reviews from './components/Reviews';
import MoreReviews from './components/MoreReviews';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);

  const toggleOpen = () => setToggle(!toggle);

  return (
    <div className={`${toggle && 'fixed'}`}>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header toggle={toggle} toggleOpen={toggleOpen} />
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
    </div>
  );
}

export default App;
