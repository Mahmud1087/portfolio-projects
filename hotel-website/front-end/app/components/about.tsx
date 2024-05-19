/* eslint-disable react/no-unescaped-entities */
import Button from './button';
import SectionTitle from './sectionTitle';

const About = () => {
  return (
    <div className='bg-gray-200 py-20'>
      <div className='w-[90%] mx-auto flex'>
        <section className='w-1/2'>
          <SectionTitle color='text-gray-900'>about us</SectionTitle>
          <p className='w-[80%] mb-10'>
            At Safe Haven Hotel, we believe that every traveler deserves a place
            of refuge, a sanctuary where they can escape the hustle and bustle
            of everyday life and find solace in serenity. Nestled in the heart
            of picturesque landscapes, our hotel is more than just a
            destination—it's an experience.
          </p>
          <div className='block'>
            <Button bgColor='bg-[#56a2ad]' color='text-gray-900' link='/about'>
              see more
            </Button>
          </div>
        </section>

        <section className='w-1/2 bg-black'></section>
      </div>
    </div>
  );
};
export default About;
