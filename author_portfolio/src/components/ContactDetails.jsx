import logo from '../assets/logoo.png';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <img src={logo} alt='Umm Nurayn Logo' className='w-24 sm:w-32 lg:w-24' />
      <div className='flex gap-5 items-center text-white'>
        <FaPhone className=' text-slate-400 sm:text-2xl lg:text-base' />
        <h1 className='font-poppins text-sm sm:text-2xl lg:text-sm'>
          (+234) 813 087 1896
        </h1>
      </div>
      <div className='flex gap-5 items-center text-white sm:w-[calc(100vw-3rem)] overflow-hidden lg:w-full'>
        <FaEnvelope className=' text-slate-400 sm:text-2xl lg:text-base' />
        <h1 className='font-poppins text-sm sm:text-2xl lg:text-sm'>
          ummnooraynwrites@gmail.com
        </h1>
      </div>
    </div>
  );
};
export default ContactDetails;
