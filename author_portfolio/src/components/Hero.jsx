import Navbar from './Navbar';
import heroBg from '../assets/heroBg.jpg';
import HeroContent from './HeroContent';

const Hero = ({ toggle, toggleOpen }) => {
  return (
    <section className=' bg-[#0000009a] h-screen relative w-screen'>
      <img
        src={heroBg}
        alt='Hero background'
        className='absolute left-0 top-0 w-full h-full mix-blend-overlay'
      />
      <Navbar toggle={toggle} toggleOpen={toggleOpen} />
      <HeroContent />
    </section>
  );
};
export default Hero;
