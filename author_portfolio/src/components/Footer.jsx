import ContactDetails from './ContactDetails';
import ContactMe from './ContactMe';
import SiteMap from './SiteMap';

const Footer = () => {
  return (
    <div id='footer' className='w-full bg-gray-900'>
      <article className='container-md-others lg:w-[70vw] lg:m-auto lg:py-[5rem] grid sm:grid-cols-2 lg:grid-cols-3 justify-between gap-10 sm:gap-24 lg:gap-10 w-full'>
        <ContactMe />
        <SiteMap />
        <ContactDetails />
      </article>
    </div>
  );
};
export default Footer;
