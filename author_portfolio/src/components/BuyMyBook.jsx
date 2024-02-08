import amazonLogo from '../assets/amazon.png';
import selarLogo from '../assets/selar.png';
import amabLogo from '../assets/amab.jpeg';

const BuyMyBook = () => {
  return (
    <div className='bg-[#f3f3f3]'>
      <section className='container-md-others lg:w-[30vw] lg:m-auto lg:py-[5rem] grid place-items-center'>
        <h1 className='heading'>Buy My Book</h1>
        <p className=' text-slate-500 text-sm mt-3 font-poppins'>
          Get the book from any of these great retailers
        </p>
        <aside className='flex items-center justify-evenly w-full mt-10'>
          <a href='amazon_link'>
            <img src={amazonLogo} alt='Amazon Logo' className='w-[5rem]' />
          </a>
          <a href='https://www.amab.com.ng/product/dare-to-thrive/?v=3c2f23bb6b73'>
            <img src={amabLogo} alt='AMAB publishing logo' className='w-24' />
          </a>
          <a href='selar_link'>
            <img src={selarLogo} alt='Selar Logo' className='w-16' />
          </a>
        </aside>
      </section>
    </div>
  );
};
export default BuyMyBook;
