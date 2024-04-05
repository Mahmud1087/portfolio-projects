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
  // console.log(data);

  return (
    <div className='container pt-[7rem] sm:pt-[10rem] lg:pt-[6rem]'>
      <button
        onClick={goBack}
        className='text-lg text-[#00000062] mb-8 font-bold tracking-[1px] sm:text-2xl lg:mb-16 lg:text-[15px]'
      >
        Go Back
      </button>

      <div className='mb-24 sm:mb-[11rem]'>
        <ProductDetails data={data} />
      </div>

      <section className='flex flex-col justify-between lg:flex-row'>
        <div className='flex flex-col gap-10 w-full lg:w-[55%]'>
          <h1 className='text-[2rem] font-bold sm:text-[2.5rem] lg:text-3xl'>
            FEATURES
          </h1>
          <article className='flex flex-col gap-8 text-[1.2rem] sm:text-[1.35rem] lg:text-[14.5px] text-[#00000077] font-semibold'>
            <p>{data.features.point1}</p>
            <p>{data.features.point2}</p>
          </article>
        </div>
        <div className='flex gap-10 mt-28 flex-col sm:flex-row lg:flex-col lg:mt-0 lg:w-[45%] lg:pl-[8rem]'>
          <h1 className='text-[2rem] font-bold text-start sm:text-[2.5rem] lg:text-3xl'>
            IN THE BOX
          </h1>
          <aside className='flex flex-col gap-1 sm:gap-2'>
            {data.box.map((prod, i) => {
              return (
                <div
                  key={i}
                  className='flex gap-6 text-[1.2rem] mt-1 sm:ml-24 sm:mt-4 sm:text-[1.35rem] lg:mt-0 lg:text-[14.5px] lg:ml-0'
                >
                  <h1 className='text-orange-200 font-bold'>{prod.size}</h1>
                  <p className='text-[#00000077] font-semibold'>{prod.item}</p>
                </div>
              );
            })}
          </aside>
        </div>
      </section>

      <article className='w-full h-fit flex flex-col gap-4 mt-[8.5rem] sm:h-[30rem] sm:flex-row lg:gap-8 lg:h-[37rem]'>
        <div className='w-full h-fit flex flex-col justify-between gap-4 sm:h-full sm:w-[40%] lg:gap-8 lg:w-[45%]'>
          <img
            src={data.images.image1}
            alt='images'
            className='h-[17rem] sm:h-full'
          />
          <img
            src={data.images.image2}
            alt='images'
            className='h-[17rem] sm:h-full'
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

      <section className='mt-[11rem] mb-[4.5rem]'>
        <h1 className='mb-12 text-center font-bold text-[2rem] tracking-[1px] sm:text-[2.5rem] lg:text-3xl'>
          YOU MAY ALSO LIKE
        </h1>
        <div className='grid gap-20 sm:grid-cols-3 sm:gap-4 lg:gap-9'>
          {data.mayAlsoLike.map((prod, i) => {
            return (
              <div
                key={i}
                className='flex flex-col justify-center items-center gap-12 sm:gap-8'
              >
                <aside className='flex justify-center items-center h-fit rounded-xl bg-light-300 w-full py-8 sm:py-0 sm:h-[22rem] lg:h-[18rem]'>
                  <img src={prod.img} alt='' className='w-[9rem] lg:w-[8rem]' />
                </aside>
                <h1 className='font-bold text-3xl mt-3 tracking-[1px] lg:text-xl'>
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
      <div className='pt-40 sm:pt-36 sm:pb-5'>
        <ShopProducts />
      </div>
    </div>
  );
}
