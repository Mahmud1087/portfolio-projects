import logo from '../assets/logoo.png';

function Navbar() {
  return (
    <nav>
      <div className='w-[70vw] m-auto py-6 flex justify-end'>
        <img src={logo} alt='Logo' className='w-12' />
      </div>
    </nav>
  );
}
export default Navbar;
