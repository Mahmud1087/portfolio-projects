import {
  FooterSectionBottom,
  FooterSectionTop,
  FooterStyled,
} from '../styles/homepage/Footer.Styled'
import { Button, Logo, NavLinks } from '../styles/homepage/Hero.Styled'
import { Link } from 'react-router-dom'
import logo from '../../assets/myteam 2.svg'
import { FaFacebookSquare, FaPinterest, FaTwitter } from 'react-icons/fa'
// import facebook from '../../assets/facebook.svg'
// import pinterest from '../../assets/pinterest.svg'
// import twitter from '../../assets/Twitter.svg'

export default function Footer() {
  return (
    <FooterStyled>
      <FooterSectionTop>
        <div className='container'>
          <h1>Ready to get started?</h1>
          <Button className='contact-btn'>contact us</Button>
        </div>
      </FooterSectionTop>
      <FooterSectionBottom>
        <div className='bottom-container'>
          <div className='content-left'>
            <div className='links'>
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

            <p className='address'>
              987 Hillcrest Lane <br />
              Irvine, CA <br />
              California 92714 <br />
              Call Us : 949-833-7432
            </p>
          </div>

          <div className='content-right'>
            <div className='socials'>
              <a href='#facebook'>
                <FaFacebookSquare className='icon' />
              </a>
              <a href='#pinterest'>
                <FaPinterest className='icon' />
              </a>
              <a href='#twitter'>
                <FaTwitter className='icon' />
              </a>
            </div>
            <p className='copyright'>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </FooterSectionBottom>
    </FooterStyled>
  )
}
