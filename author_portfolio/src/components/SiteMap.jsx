import { menuLinks } from '../data';

const SiteMap = () => {
  return (
    <div className='w-full'>
      <aside>
        <h1 className='font-chelsea text-2xl text-white'>Sitemap</h1>
        <p className='text-slate-300 font-poppins'>
          Navigate through this page
        </p>
      </aside>
      <div className='flex flex-col gap-1 mt-8 text-gray-300 font-poppins'>
        {menuLinks.map((menu) => {
          const { id, link, text } = menu;
          return (
            <a key={id} href={link} className='w-fit'>
              - {text}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default SiteMap;
