import {
  Container,
  LeftContent,
  RightContent,
  ServiceStyled,
} from '../styles/homepage/Services.Styled'

import image1 from '../../assets/Group 11.svg'
import image2 from '../../assets/Group 12.svg'
import image3 from '../../assets/Group 13.svg'

export default function Services() {
  const data = [
    {
      id: 1,
      icon: image1,
      title: 'Experienced Individuals',
      text: 'Our network is made up of highly experienced professionals who are passionate about what they do.',
    },
    {
      id: 2,
      icon: image2,
      title: 'Easy to Implement',
      text: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
    },
    {
      id: 3,
      icon: image3,
      title: 'Enhanced Productivity',
      text: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
    },
  ]

  return (
    <ServiceStyled>
      <Container>
        <LeftContent>
          <hr />
          <h1>Build & manage distributed teams like no one else.</h1>
        </LeftContent>
        <RightContent>
          {data.map((item) => {
            const { id, title, text, icon } = item
            return (
              <div className='container' key={id}>
                <div>
                  <img src={icon} alt={`icon ${id}`} />
                </div>
                <div className='textContent'>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </div>
            )
          })}
        </RightContent>
      </Container>
    </ServiceStyled>
  )
}
