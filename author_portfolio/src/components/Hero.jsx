import Navbar from './Navbar';
import heroBg from '../assets/heroBg.jpg';

const Hero = () => {
  return (
    <section className=' bg-[#0000009a] h-screen relative'>
      <img
        src={heroBg}
        alt='Hero background'
        className='absolute left-0 top-0 w-full h-full mix-blend-overlay'
      />
      <Navbar />
    </section>
  );
};
export default Hero;
