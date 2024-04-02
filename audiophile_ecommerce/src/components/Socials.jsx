import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

const Socials = ({ fontSize }) => {
  return (
    <aside className={`flex text-light-100 gap-3 items-end ${fontSize}`}>
      <a
        href='https://www.facebook.com/audiophile'
        target='_blank'
        className='hover:text-orange-200 transition-all delay-100'
      >
        <FaFacebookSquare />
      </a>
      <a
        href='https://www.twitter.com/audiophile'
        target='_blank'
        className='hover:text-orange-200 transition-all delay-100'
      >
        <FaTwitter />
      </a>
      <a
        href='https://www.instagram.com/audiophile'
        target='_blank'
        className='hover:text-orange-200 transition-all delay-100'
      >
        <FaInstagram />
      </a>
    </aside>
  );
};
export default Socials;
