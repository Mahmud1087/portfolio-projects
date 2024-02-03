import img from '../assets/reviewImg2.jpg';
// import img from '../assets/frontCover.jpg'

const AboutMe = () => {
  return (
    <section id='aboutme'>
      <article className='container flex gap-8'>
        <div className='w-1/2'>
          <img src={img} alt='About me image' className='w-full h-full' />
        </div>
        <div className='w-1/2 flex flex-col justify-center gap-5 font-poppins text-sm text-slate-500 py-5'>
          <h1 className=' heading'>About Me</h1>
          <p>
            I am a Muslimah personal development enthusiast, a Muslimah personal
            transformation guide, and a non-fiction book writinig mentor.
          </p>

          <p>
            I help Muslim women tackle perfectionism so that they can show up
            authentically in the world, live their best lives, and make the
            impact that they envisioned. <br />I believe that when Muslim women
            fly through life on auto-pilot and live mindlessly, it does not bode
            well for them, their loved ones, their community, their deen, and
            the world at large.
          </p>
          <p>
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
