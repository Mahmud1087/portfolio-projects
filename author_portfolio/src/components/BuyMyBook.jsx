import amazonLogo from '../assets/amazon.png';
import selarLogo from '../assets/selar.png';

const BuyMyBook = () => {
  return (
    <div className='bg-[#f3f3f3]'>
      <section className='w-[30vw] m-auto py-[5rem] grid place-items-center'>
        <h1 className='heading'>Buy My Book</h1>
        <p className=' text-slate-500 text-sm mt-3 font-poppins'>
          Get the book from any of these great retailers
        </p>
        <aside className='flex items-center justify-evenly w-full mt-10'>
          <a href='amazon_link'>
            <img src={amazonLogo} alt='Amazon Logo' className='w-[5rem]' />
          </a>
          <a href='https://www.amab.com.ng/products/dare-to-thrive'>amab</a>
          <a href='selar_link'>
            <img src={selarLogo} alt='Selar Logo' className='w-16' />
          </a>
        </aside>
      </section>
    </div>
  );
};
export default BuyMyBook;
