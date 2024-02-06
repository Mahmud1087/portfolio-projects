import logo from '../assets/logoo.png';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <img src={logo} alt='Umm Nurayn Logo' className='w-24' />
      <div className='flex gap-5 items-center text-white'>
        <FaPhone className=' text-slate-400' />
        <h1 className='font-poppins text-sm'>(+234) 813 087 1896</h1>
      </div>
      <div className='flex gap-5 items-center text-white'>
        <FaEnvelope className=' text-slate-400' />
        <h1 className='font-poppins text-sm'>ummnuraynwrites@gmail.com</h1>
      </div>
    </div>
  );
};
export default ContactDetails;
