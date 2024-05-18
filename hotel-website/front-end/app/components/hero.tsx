import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative h-[calc(100vh+5rem)] w-full -z-[1]'>
      <div className='h-full w-full'>
        <Image
          src='/heroImg.png'
          alt='Hero Image'
          width={2000}
          height={2000}
          quality={100}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};
export default Hero;
