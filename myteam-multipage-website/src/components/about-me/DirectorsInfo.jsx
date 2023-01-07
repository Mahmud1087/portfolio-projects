import {
  Card,
  CardContainer,
  DirectorsInfoSection,
} from '../styles/about-me/DirectorsInfo.styled'
import { Title } from '../styles/homepage/Testimonial.Styled.'
import {
  FaLinkedin,
  FaPlus,
  FaPlusCircle,
  FaTimes,
  FaTwitter,
} from 'react-icons/fa'
import { details } from './directorsData'
import { useState } from 'react'

export default function DirectorsInfo() {
  const [isMoreDetails, setIsMoreDetails] = useState(false)
  return (
    <DirectorsInfoSection>
      <Title>Meet the directors</Title>
      <CardContainer>
        {details.map((item) => {
          const { id, image, name, title, desc } = item
          return (
            <Card key={id}>
              {!isMoreDetails && <img src={image} alt={`director ${id}`} />}
              <div
                className={`${
                  !isMoreDetails ? 'director-details' : 'more-details'
                }`}>
                <h4>{name}</h4>
                <p>{!isMoreDetails ? title : desc}</p>
                {isMoreDetails && (
                  <div className='icons'>
                    <a href='#twitter'>
                      <FaTwitter />
                    </a>
                    <a href='#linkedin'>
                      <FaLinkedin />
                    </a>
                  </div>
                )}
              </div>
              <button
                className={isMoreDetails && 'close'}
                onClick={() => setIsMoreDetails(!isMoreDetails)}>
                {isMoreDetails ? <FaTimes /> : <FaPlus />}
              </button>
            </Card>
          )
        })}
      </CardContainer>
    </DirectorsInfoSection>
  )
}
