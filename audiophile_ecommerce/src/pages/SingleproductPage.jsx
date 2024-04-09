import { useNavigate, useParams } from 'react-router-dom';
import { useProductsContex } from '../context/products_context';
import {
  ProductDetails,
  SeeProductButton,
  ShopProducts,
} from '../components/main';

export default function SingleproductPage() {
  const { products } = useProductsContex();
  const { productId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const data = products.find((prod) => prod.shortName === productId);

  return (
    <div className='container pt-20 sm:pt-[10rem] lg:pt-[6rem]'>
      <button
        onClick={goBack}
        className='text-xs text-[#00000062] mb-6 font-bold tracking-[1px] sm:text-2xl sm:mb-8 lg:mb-16 lg:text-[15px]'
      >
        Go Back
      </button>

      <div className='mb-24 sm:mb-[11rem]'>
        <ProductDetails data={data} />
      </div>

      <section className='flex flex-col justify-between lg:flex-row'>
        <div className='flex flex-col gap-6 w-full sm:gap-10 lg:w-[55%]'>
          <h1 className='text-[1.3rem] font-bold sm:text-[2.5rem] lg:text-3xl'>
            FEATURES
          </h1>
          <article className='flex flex-col gap-6 text-[13px] pr-5 sm:gap-8 sm:pr-0 sm:text-[1.35rem] lg:text-[14.5px] text-[#00000077] font-semibold'>
            <p>{data.features.point1}</p>
            <p>{data.features.point2}</p>
          </article>
        </div>
        <div className='flex gap-6 mt-20 flex-col sm:flex-row sm:mt-28 sm:gap-10 lg:flex-col lg:mt-0 lg:w-[45%] lg:pl-[8rem]'>
          <h1 className='text-[1.3rem] font-bold text-start sm:text-[2.5rem] lg:text-3xl'>
            IN THE BOX
          </h1>
          <aside className='flex flex-col gap-1 sm:gap-2'>
            {data.box.map((prod, i) => {
              return (
                <div
                  key={i}
                  className='flex gap-6 text-[13px] mt-1 sm:ml-24 sm:mt-4 sm:text-[1.35rem] lg:mt-0 lg:text-[14.5px] lg:ml-0'
                >
                  <h1 className='text-orange-200 font-bold'>{prod.size}</h1>
                  <p className='text-[#00000077] font-semibold'>{prod.item}</p>
                </div>
              );
            })}
          </aside>
        </div>
      </section>

      <article className='w-full h-fit flex flex-col gap-4 mt-24 sm:mt-[8.5rem] sm:h-[30rem] sm:flex-row lg:gap-8 lg:h-[37rem]'>
        <div className='w-full h-fit flex flex-col justify-between gap-4 sm:h-full sm:w-[40%] lg:gap-8 lg:w-[45%]'>
          <img
            src={data.images.image1}
            alt='images'
            className='h-[12rem] sm:h-full'
          />
          <img
            src={data.images.image2}
            alt='images'
            className='h-[12rem] sm:h-full'
          />
        </div>
        <div className='w-full h-full rounded-md sm:w-[60%] lg:w-[55%]'>
          <img
            src={data.images.image3}
            alt='images'
            className='w-full object-cover rounded-lg h-[25rem] sm:h-full'
          />
        </div>
      </article>

      <section className='mt-28 sm:mt-[11rem] mb-[4.5rem]'>
        <h1 className='mb-8 text-center font-bold text-[1.3rem] tracking-[1px] sm:mb-12 sm:text-[2.5rem] lg:text-3xl'>
          YOU MAY ALSO LIKE
        </h1>
        <div className='grid gap-16 sm:grid-cols-3 sm:gap-4 lg:gap-9'>
          {data.mayAlsoLike.map((prod, i) => {
            return (
              <div
                key={i}
                className='flex flex-col justify-center items-center gap-4 sm:gap-8'
              >
                <aside className='flex justify-center items-center h-34 rounded-xl bg-light-300 w-full py-6 sm:py-0 sm:h-[22rem] lg:h-[18rem]'>
                  <img src={prod.img} alt='' className='w-[5rem] lg:w-[8rem]' />
                </aside>
                <h1 className='font-bold text-xl mt-3 tracking-[1px] sm:text-3xl lg:text-xl'>
                  {prod.name}
                </h1>
                <SeeProductButton
                  to={prod.shortName}
                  classes='bg-orange-200 text-light-100 font-bold hover:bg-orange-100'
                />
              </div>
            );
          })}
        </div>
      </section>
      <div className='pt-32 sm:pt-36 sm:pb-5'>
        <ShopProducts />
      </div>
    </div>
  );
}
