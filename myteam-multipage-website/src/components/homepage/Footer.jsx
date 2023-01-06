import {
  FooterSectionBottom,
  FooterSectionTop,
  FooterStyled,
} from '../styles/homepage/Footer.Styled'
import { Button, Logo, NavLinks } from '../styles/homepage/Hero.Styled'
import { Link } from 'react-router-dom'
import logo from '../../assets/myteam 2.svg'
import facebook from '../../assets/facebook.svg'
import pinterest from '../../assets/pinterest.svg'
import twitter from '../../assets/Twitter.svg'

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
                <img src={facebook} alt='facebook' />
              </a>
              <a href='#pinterest'>
                <img src={pinterest} alt='pinterest' />
              </a>
              <a href='#twitter'>
                <img src={twitter} alt='twitter' />
              </a>
            </div>
            <p className='copyright'>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </FooterSectionBottom>
    </FooterStyled>
  )
}
