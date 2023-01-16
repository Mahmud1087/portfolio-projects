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
  const [data, setData] = useState(details)
  function handleOpen(id) {
    const newItem = details.map((item) =>
      item.id === id ? { ...item, open: true } : item
    )
    setData(newItem)
  }
  function handleClose(id) {
    const newItem = details.map((item) =>
      item.id === id ? { ...item, open: false } : item
    )
    setData(newItem)
  }

  return (
    <DirectorsInfoSection>
      <Title>Meet the directors</Title>
      <CardContainer>
        {data.map((item) => {
          const { id, image, name, title, desc, open } = item
          return (
            <Card key={id}>
              {!open && <img src={image} alt={`director ${id}`} />}
              <div className={`${!open ? 'director-details' : 'more-details'}`}>
                <h4>{name}</h4>
                <p>{!open ? title : desc}</p>
                {open && (
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
              <button className='btn'>
                {open ? (
                  <FaTimes onClick={() => handleClose(id)} />
                ) : (
                  <FaPlus onClick={() => handleOpen(id)} />
                )}
              </button>
            </Card>
          )
        })}
      </CardContainer>
    </DirectorsInfoSection>
  )
}
