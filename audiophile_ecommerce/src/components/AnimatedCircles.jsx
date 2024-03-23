import { motion } from 'framer-motion';

const AnimatedCircles = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        repeat: Infinity,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className='absolute -top-8 -left-32 -z-[5]'>
      <motion.section
        variants={container}
        initial='hidden'
        animate='show'
        // transition={{
        //   repeat: Infinity,
        //   // repeatType: 'loop',
        //   duration: 1,
        //   delayChildren: 3,
        // }}
        className='w-[54rem] h-[54rem] rounded-full border border-[#ffffff3d] flex items-center justify-center'
      >
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            // repeatType: 'loop',
            duration: 1,
            delayChildren: 3,
          }}
          className='w-[31rem] h-[31rem] rounded-full border border-[#ffffff3d] flex items-center justify-center'
        >
          <motion.section
            variants={container}
            initial='hidden'
            animate='show'
            // transition={{
            //   repeat: Infinity,
            //   // repeatType: 'loop',
            //   duration: 1,
            //   // delayChildren: 3,
            // }}
            className='w-[26rem] h-[26rem] rounded-full border border-[#ffffff3d]'
          ></motion.section>
        </motion.section>
      </motion.section>
    </div>
  );
};
export default AnimatedCircles;
