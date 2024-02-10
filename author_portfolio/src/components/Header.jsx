import Hero from './Hero';
import Quote from './Quote';
import Sidebar from './Sidebar';

const Header = ({ toggle, toggleOpen }) => {
  return (
    <div>
      {toggle && <Sidebar toggle={toggle} toggleOpen={toggleOpen} />}
      <Hero toggle={toggle} toggleOpen={toggleOpen} />
      <Quote />
    </div>
  );
};
export default Header;
