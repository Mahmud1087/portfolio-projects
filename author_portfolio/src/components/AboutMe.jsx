import img from '../assets/reviewImg2.jpg';
// import img from '../assets/frontCover.jpg'

const AboutMe = () => {
  return (
    <section id='aboutme'>
      <article className='container-md-others lg:w-[70vw] lg:m-auto lg:py-[5rem] flex gap-8 flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2'>
          <img src={img} alt='About me image' className='w-full h-full' />
        </div>
        <div className='lg:w-1/2 lg:text-start text-center flex flex-col justify-center gap-5 font-poppins text-sm text-slate-500 py-5'>
          <h1 className=' heading sm:text-5xl lg:text-[1.8rem]'>About Me</h1>
          <p className='sm:text-xl lg:text-base'>
            I am a Muslimah personal development enthusiast, a Muslimah personal
            transformation guide, and a non-fiction book writinig mentor.
          </p>

          <p className='sm:text-xl lg:text-base'>
            I help Muslim women tackle perfectionism so that they can show up
            authentically in the world, live their best lives, and make the
            impact that they envisioned. <br />I believe that when Muslim women
            fly through life on auto-pilot and live mindlessly, it does not bode
            well for them, their loved ones, their community, their deen, and
            the world at large.
          </p>
          <p className='sm:text-xl lg:text-base'>
            I had my high school certificate from St. Monica's college, Kabba. I
            proceeded to Ahmadu Bello University, Zaria Kaduna, Nigeria where I
            obtained a BSc. Mass Communication and an MSc. Agricultural
            Extension and Rural Development.
          </p>
        </div>
      </article>
    </section>
  );
};
export default AboutMe;
