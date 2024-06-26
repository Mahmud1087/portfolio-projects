import { NavLink } from 'react-router-dom';
import { links } from '../data';

const NavLinks = ({ Fsize, dir }) => {
  return (
    <ul className={`flex items-center gap-7 sm:gap-10 ${dir}`}>
      {links.map((list) => {
        const { id, text, url } = list;
        return (
          <NavLink
            key={id}
            to={url}
            className={`${({ isActive }) => {
              return isActive ? 'active' : '';
            }} hover:text-orange-200 transition-all delay-100 tracking-[2px] ${Fsize}`}
          >
            <li>{text.toUpperCase()}</li>
          </NavLink>
        );
      })}
    </ul>
  );
};
export default NavLinks;
