import { Link } from 'react-router-dom';
import { shop } from '../data';
import { FaChevronRight } from 'react-icons/fa';

export default function ShopProducts() {
  return (
    <div className='grid grid-cols-3 gap-3 lg:gap-9'>
      {shop.map((item) => {
        const { id, img, url, text } = item;
        return (
          <section key={id} className='flex flex-col h-96 relative'>
            <img
              src={img}
              alt={text}
              className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl w-28'
            />
            <div className='bg-light-100 w-full h-1/2'></div>
            <div className='w-full h-1/2 bg-light-300 rounded-lg flex flex-col gap-3 justify-end items-center pb-7 lg:pb-6'>
              <h4 className='text-xl tracking-[1.5px] font-bold lg:text-sm'>
                {text.toUpperCase()}
              </h4>
              <Link
                to={url}
                className='flex items-center gap-2 text-[18px] lg:text-[11px]'
              >
                <p className='tracking-[1.2px] font-bold text-[#00000080] hover:text-orange-200 transition-all'>
                  SHOP
                </p>
                <FaChevronRight className='text-orange-200' />
              </Link>
            </div>
          </section>
        );
      })}
    </div>
  );
}
