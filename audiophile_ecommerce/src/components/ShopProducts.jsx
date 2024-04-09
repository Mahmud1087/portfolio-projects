import { Link } from 'react-router-dom';
import { shop } from '../data';
import { FaChevronRight } from 'react-icons/fa';
import { useProductsContex } from '../context/products_context';

export default function ShopProducts() {
  const { closeSidebar } = useProductsContex();

  return (
    <div className='grid gap-3 gap-y-20 sm:gap-y-0 sm:grid-cols-3 lg:gap-9'>
      {shop.map((item) => {
        const { id, img, url, text } = item;
        return (
          <section key={id} className='flex flex-col h-44 sm:h-52'>
            <div className='relative w-full h-full bg-light-300 rounded-xl flex flex-col gap-3 justify-end items-center pb-7 lg:pb-6'>
              <h4 className='tracking-[1.5px] font-bold lg:text-sm'>
                {text.toUpperCase()}
              </h4>
              <Link
                to={url}
                onClick={closeSidebar}
                className='flex items-center gap-2 text-xs lg:text-[11px]'
              >
                <p className='tracking-[1.2px] font-bold text-[#00000080] hover:text-orange-200 transition-all'>
                  SHOP
                </p>
                <FaChevronRight className='text-orange-200' />
              </Link>
              <img
                src={img}
                alt={text}
                className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl w-[5.5rem] sm:w-28'
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}
