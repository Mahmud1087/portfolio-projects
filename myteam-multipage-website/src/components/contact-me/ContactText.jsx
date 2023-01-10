import { TextContainer } from '../styles/contact-me/ContactText.styled'
import img1 from '../../assets/Group 11.svg'
import img2 from '../../assets/Group 12.svg'
import img3 from '../../assets/Group 13.svg'

export default function ContactText() {
  return (
    <TextContainer>
      <h1>Contact</h1>
      <h4>Ask us about</h4>
      <div className='inquiry-container'>
        <div className='inquiries'>
          <img src={img1} alt='image1' />
          <p>The quality of our talent network</p>
        </div>
        <div className='inquiries'>
          <img src={img2} alt='image2' />
          <p>Usage and implementation of our software</p>
        </div>
        <div className='inquiries'>
          <img src={img3} alt='image3' />
          <p>How we help drive innovation</p>
        </div>
      </div>
    </TextContainer>
  )
}
