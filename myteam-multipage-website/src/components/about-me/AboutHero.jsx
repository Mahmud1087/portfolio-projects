import { Link } from 'react-router-dom'
import {
  AboutHeroSection,
  AboutText,
} from '../styles/about-me/AboutHero.styled'
import { Button, Logo, Navbar, NavLinks } from '../styles/homepage/Hero.Styled'
import logo from '../../assets/myteam 2.svg'
import { FaBars } from 'react-icons/fa'

export default function AboutHero() {
  return (
    <AboutHeroSection>
      <Navbar>
        <div style={{ display: 'flex', gap: '3.5rem' }}>
          <Link to='/about'>
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
        <button className='menuBtn'>
          <FaBars />
        </button>
      </Navbar>
      <AboutText>
        <h1>About</h1>
        <div>
          <hr />
          <p>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </AboutText>
    </AboutHeroSection>
  )
}
