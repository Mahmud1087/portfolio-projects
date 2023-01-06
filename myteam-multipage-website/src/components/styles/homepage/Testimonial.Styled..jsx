import styled from 'styled-components'
import homeBG3 from '../../../assets/homeBG3.png'
import testimonialBG from '../../../assets/“.png'

export const TestimonialStyled = styled.section`
  width: 100%;
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${homeBG3});
  background-position: center;
  background-size: cover;
  padding: 0 10rem;
`

export const Title = styled.h1`
  font-size: 2.8rem;
  max-width: 85%;
  margin: 0 auto;
  color: #ffffff;
  line-height: 100%;
  text-align: center;

  span {
    color: #79c8c7;
  }
`

export const TestimonialsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 5rem;

  .testimonials {
    background: url(${testimonialBG});
    background-repeat: no-repeat;
    background-position: top;
    display: grid;
    place-items: center;
    row-gap: 2rem;
    text-align: center;

    .texts {
      margin-top: 2.5rem;
      font-size: 14px;
      color: #ffffff;
    }

    .author-details {
      .author {
        color: #79c8c7;
        font-size: 14px;
        margin-bottom: 0.3rem;
      }

      .author-title {
        font-size: 12px;
        color: #fff;
        opacity: 0.8;
      }
    }

    img {
      width: 3rem;
    }
  }
`
