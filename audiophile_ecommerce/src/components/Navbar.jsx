import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../data'
import logo from '../assets/logo.svg'
import cartImage from '../assets/cart.png'
import { useProductsContex } from '../context/products_context'

export default function Navbar() {
  const { isSideBarOpen, toggleSideBar } = useProductsContex()

  return (
    // <div className='bg-dark-100'>
    <div
      className={`${
        isSideBarOpen ? 'fixed top-0 z-[9999] left-0 right-0' : ''
      } bg-dark-100`}>
      <section className='container text-light-100 lg:w-[1109.83px] md:w-[689px] sm:w-[300px]'>
        <nav
          className='border-b-light-200 flex
       justify-between items-center md:py-6 sm:py-5 lg:py-8'>
          <div className='flex items-center'>
            <FaBars
              className='text-lg sm:text-[1rem] sm:mr-20 md:text-sm md:mr-8 lg:hidden'
              onClick={toggleSideBar}
            />
            <img
              src={logo}
              alt='audiophile logo'
              className='sm:w-[6.5rem] lg:w-[9.5rem] cursor-pointer'
            />
          </div>

          <ul className='hidden lg:flex lg:gap-12 lg:items-center'>
            {links.map((link) => {
              const { id, text, url } = link
              return (
                <li key={id}>
                  <Link
                    to={url}
                    className='tracking-[2px] uppercase text-[13px] hover:text-c_orange-100 transition-all'>
                    {text}
                  </Link>
                </li>
              )
            })}
          </ul>

          <img
            src={cartImage}
            alt='cart image'
            className='sm:w-[1.1rem] lg:w-[1.8rem] cursor-pointer'
          />
        </nav>
      </section>
    </div>
  )
}
