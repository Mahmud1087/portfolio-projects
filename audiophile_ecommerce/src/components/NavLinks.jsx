import { NavLink } from 'react-router-dom';
import { links } from '../data';

const NavLinks = () => {
  return (
    <ul className='flex items-center gap-10'>
      {links.map((list) => {
        const { id, text, url } = list;
        return (
          <NavLink
            key={id}
            to={url}
            className={`${({ isActive }) => {
              return isActive ? 'active' : '';
            }} text-[12px] hover:text-orange-200 transition-all delay-100 tracking-[2px]`}
          >
            <li>{text.toUpperCase()}</li>
          </NavLink>
        );
      })}
    </ul>
  );
};
export default NavLinks;
