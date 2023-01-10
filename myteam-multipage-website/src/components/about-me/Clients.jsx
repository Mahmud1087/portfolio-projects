import {
  ClientsContainer,
  ClientsSection,
} from '../styles/about-me/Clients.styled'
import { Title } from '../styles/homepage/Testimonial.Styled.'
import logo1 from '../../assets/thevergeImg.svg'
import logo2 from '../../assets/jakartapostImg.svg'
import logo3 from '../../assets/theguardianImg.svg'
import logo4 from '../../assets/techtraderImg.svg'
import logo5 from '../../assets/gadgetsImg.png'

export default function Clients() {
  return (
    <ClientsSection>
      <Title>Some of our clients</Title>
      <ClientsContainer>
        <img src={logo1} alt='the verge logo' />
        <img src={logo2} alt='jakarta post logo' />
        <img src={logo3} alt='the guardian logo' />
        <img src={logo4} alt='tech trader logo' />
        <img src={logo5} alt='gadgets now logo' />
      </ClientsContainer>
    </ClientsSection>
  )
}
