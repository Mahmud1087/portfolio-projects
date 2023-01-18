import { SideBarBackground, SideBarContainer } from './styles/SideBar.styled'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SideBar({ open, setOpen }) {
  return (
    <SideBarBackground>
      <SideBarContainer className={`${!open && 'menuClose'}`}>
        <button
          className='menuCloseBtn'
          onClick={() => setOpen((prevOpen) => !prevOpen)}>
          <FaTimes />
        </button>
        <Link to='/'>home</Link>
        <Link to='about'>about</Link>
        <Link to='contact' className='contactMe'>
          contact us
        </Link>
      </SideBarContainer>
    </SideBarBackground>
  )
}
