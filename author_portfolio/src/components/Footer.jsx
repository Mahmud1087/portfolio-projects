import ContactMe from './ContactMe';
import SiteMap from './SiteMap';

const Footer = () => {
  return (
    <div id='#footer' className=' bg-gray-600'>
      <article className='container flex justify-between'>
        <ContactMe />
        <SiteMap />
      </article>
    </div>
  );
};
export default Footer;
