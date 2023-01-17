import { Link } from 'react-router-dom'
import {
  ContactHeroSection,
  Container,
} from '../styles/contact-me/ContactHero.styled'
import { Button, Logo, Navbar, NavLinks } from '../styles/homepage/Hero.Styled'
import logo from '../../assets/myteam 2.svg'
import ContactText from './ContactText'
import ContactForm from './ContactForm'
import Footer from '../homepage/Footer'
import { FaBars } from 'react-icons/fa'
export default function ContactHero() {
  return (
    <>
      {' '}
      <ContactHeroSection>
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
                <Link to='../about'>about</Link>
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
        <Container>
          <ContactText />
          <ContactForm />
        </Container>
      </ContactHeroSection>
      <Footer />
    </>
  )
}
