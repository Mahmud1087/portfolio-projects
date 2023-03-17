import { Link, useParams } from 'react-router-dom'

export default function Hero() {
  const { id } = useParams()
  return (
    <div className='h-full bgHeroImg'>
      <section className='flex flex-col justify-center items-center py-20 gap-y-6 w-2/3 mx-auto md:w-2/5 h-[80vh]'>
        <p className='uppercase tracking-[10px] text-center text-light-100 text-[0.7rem] mix-blend-normal opacity-50'>
          new product
        </p>
        <h1 className='uppercase text-center tracking-[1.3px] leading-[40px] text-[2rem] font-bold text-light-100'>
          xx99 mark ii headphones
        </h1>
        <p className='text-center text-sm leading-[25px] font-medium text-light-100 opacity-75 mix-blend-normal'>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link
          to={`/products/${id}`}
          className='uppercase tracking-[1px] leading-[18px] text-xs text-center mx-auto font-bold text-light-100 py-2 px-5 rounded bg-c_orange-200 hover:bg-c_orange-100'>
          see product
        </Link>
      </section>
    </div>
  )
}
