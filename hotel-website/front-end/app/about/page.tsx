/* eslint-disable react/no-unescaped-entities */
import { LucideArrowLeftCircle, LucideArrowRightCircle } from 'lucide-react';
import SectionTitle from '../components/sectionTitle';

const About = () => {
  return (
    <div className='relative my-32 text-center'>
      <button title='back-button' className='pl-20 flex font-medium gap-3'>
        <LucideArrowLeftCircle className='text-xs' />
        Back
      </button>
      <SectionTitle color='text-gray-900'>about us</SectionTitle>
      <section className='w-[90%] mx-auto flex mt-16'>
        <div className='w-1/2 text-start'>
          <p className='w-[80%] text-lg'>
            At Safe Haven Hotel, we believe that every traveler deserves a place
            of refuge, a sanctuary where they can escape the hustle and bustle
            of everyday life and find solace in serenity. Nestled in the heart
            of picturesque landscapes, our hotel is more than just a
            destination—it's an experience.
            <br />
            <br />
            Whether you're embarking on a romantic getaway, a family vacation,
            or a solo retreat, Safe Haven Hotel invites you to experience the
            ultimate in relaxation and rejuvenation. Let us be your refuge in
            the journey of life—your safe haven awaits.
          </p>
        </div>

        <div className='w-1/2 rounded-xl border-2 border-dashed border-gray-900 flex flex-col gap-10 py-8 px-10'>
          <section className='flex flex-col gap-3 text-start'>
            <h1 className='flex gap-3 items-center text-xl font-medium capitalize'>
              <LucideArrowRightCircle className='text-[#56a2ad]' />
              our story
            </h1>
            <p className='ml-9'>
              Founded with a vision to provide a haven of tranquility for weary
              travelers, Safe Haven Hotel has been welcoming guests with warmth
              and hospitality since 2014. What began as a dream to create a
              retreat away from the chaos of urban life has evolved into a
              cherished destination where guests can unwind, rejuvenate, and
              create lasting memories.
            </p>
          </section>

          <section className='flex flex-col gap-3 text-start'>
            <h1 className='flex gap-3 items-center text-xl font-medium capitalize'>
              <LucideArrowRightCircle className='text-[#56a2ad]' />
              our commitment
            </h1>
            <p className='ml-9'>
              At Safe Haven Hotel, we are committed to exceeding the
              expectations of every guest who walks through our doors. From our
              attentive staff to our thoughtfully curated amenities, every
              aspect of our hotel is designed with your comfort and satisfaction
              in mind.
            </p>
          </section>

          <section className='flex flex-col gap-3 text-start'>
            <h1 className='flex gap-3 items-center text-xl font-medium capitalize'>
              <LucideArrowRightCircle className='text-[#56a2ad]' />
              our values
            </h1>
            <p className='ml-9'>
              <span className='italic font-semibold'>Hospitality:</span> Our
              team is dedicated to providing personalized service and ensuring
              that your stay with us is nothing short of exceptional.
              <br />
              <br />
              <span className='italic font-semibold'>Quality:</span>
              We strive for excellence in everything we do, from the comfort of
              our accommodations to the delicious flavors of our culinary
              offerings.
              <br />
              <br />
              <span className='italic font-semibold'>Sustainability:</span> We
              are committed to preserving the natural beauty of our surroundings
              and minimizing our environmental footprint through responsible
              practices.
            </p>
          </section>

          <section className='flex flex-col gap-3 text-start'>
            <h1 className='flex gap-3 items-center text-xl font-medium capitalize'>
              <LucideArrowRightCircle className='text-[#56a2ad]' />
              our facilities
            </h1>
            <p className='ml-9'>
              From elegantly appointed guest rooms to world-class dining options
              and recreational amenities, Safe Haven Hotel offers a range of
              facilities designed to cater to the needs and preferences of every
              guest. Whether you're seeking relaxation by the poolside,
              adventure in the great outdoors, or a culinary journey through
              exquisite flavors, you'll find it all within our walls.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};
export default About;
