import ContactDetails from './ContactDetails';
import ContactMe from './ContactMe';
import SiteMap from './SiteMap';

const Footer = () => {
  return (
    <div id='footer' className=' bg-gray-900'>
      <article className='container grid grid-cols-3 justify-between gap-10 w-full'>
        <ContactMe />
        <SiteMap />
        <ContactDetails />
      </article>
    </div>
  );
};
export default Footer;
