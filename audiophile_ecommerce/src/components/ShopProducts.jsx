import { shop } from '../data'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function ShopProducts() {
  return (
    <div className='container lg:w-[1109.83px] md:w-[689px] sm:w-[300px]'>
      <section className='flex flex-col justify-center items-center gap-x-5 md:flex-row md:gap-5'>
        {shop.map((items) => {
          const { id, img, url } = items
          const text = url.slice(1).toUpperCase()

          return (
            <div
              key={id}
              className='w-full h-[160px] flex flex-col justify-center items-center bg-light-300 mt-14 gap-3 rounded-lg py-6 lg:h-[190px]'>
              <img
                src={img}
                alt={text}
                className='mb-2 w-[4.5rem] md:w-[5rem] lg:w-[6rem] -mt-16 md:-mt-18 lg:-mt-20 lg:mb-4'
              />
              <h4 className='text-[0.89rem] tracking-[1.07px] font-bold text-center mt-5'>
                {text}
              </h4>
              <Link
                to={url}
                className='flex justify-center items-center gap-1 text-[0.78rem] tracking-[1px] opacity-50 mix-blend-normal font-bold'>
                SHOP{' '}
                <MdChevronRight className='text-c_orange-200 text-[1.3rem]' />
              </Link>
            </div>
          )
        })}
      </section>
    </div>
  )
}
