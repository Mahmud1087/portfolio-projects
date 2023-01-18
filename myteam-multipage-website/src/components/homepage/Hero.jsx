import { Link } from 'react-router-dom'
import {
  Button,
  HeroStyled,
  HeroText,
  Logo,
  Navbar,
  NavLinks,
} from '../styles/homepage/Hero.Styled'
import logo from '../../assets/myteam 2.svg'
import { FaBars } from 'react-icons/fa'
import SideBar from '../SideBar'

export default function Hero({ open, setOpen }) {
  return (
    <HeroStyled>
      {open && <SideBar open={open} setOpen={setOpen} />}
      <Navbar>
        <div style={{ display: 'flex', gap: '3.5rem' }}>
          <Link to='/'>
            <Logo src={logo} />
          </Link>
          <NavLinks>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='about'>about</Link>
            </li>
          </NavLinks>
        </div>
        <Link to='contact'>
          <Button>contact us</Button>
        </Link>
        <button
          className='menuBtn'
          onClick={() => setOpen((prevOpen) => !prevOpen)}>
          <FaBars />
        </button>
      </Navbar>

      <HeroText>
        <h1>
          Find the best <span>talent</span>
        </h1>
        <div>
          <hr />
          <p>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </HeroText>
    </HeroStyled>
  )
}
