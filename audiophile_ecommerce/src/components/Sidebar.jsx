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
          className='fixed w-screen h-screen bg-[#00000060] z-50'
        >
          <motion.section
            key='sidebarAnimate'
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            exit={{ y: '-100%', opacity: 0 }}
            className='relative top-[7rem] h-fit w-full bg-light-100 rounded-b-xl pb-24 px-8'
          >
            <ShopProducts />
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
