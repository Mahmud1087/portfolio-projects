// import { Router } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import BuyMyBook from './components/BuyMyBook';
import Footer from './components/Footer';
import Header from './components/Header';
import LatestBook from './components/LatestBook';
import Reviews from './components/Reviews';

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <LatestBook />
      <Reviews />
      <BuyMyBook />
      <Footer />
      {/* <Router></Router> */}
    </>
  );
}

export default App;
