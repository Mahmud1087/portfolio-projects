import { ShopProducts } from '../components/main';
import { AnimatePresence, motion } from 'framer-motion';
import { useProductsContex } from '../context/products_context';

export default function Sidebar() {
  const { isSideBarOpen } = useProductsContex();

  return (
    <AnimatePresence mode='wait'>
      {isSideBarOpen && (
        <motion.div
          key={'parent'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='absolute overflow-scroll w-screen h-screen bg-[#00000060] z-50'
        >
          <motion.section
            key='sidebarAnimate'
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            exit={{ y: '-100%', opacity: 0 }}
            className='relative top-20 h-fit w-full bg-light-100 rounded-b-xl pb-16 px-5 sm:px-8 sm:top-[7rem]'
          >
            <div className='pt-32 sm:pt-40 sm:pb-12'>
              <ShopProducts />
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
