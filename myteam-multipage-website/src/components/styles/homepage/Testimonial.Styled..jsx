import styled from 'styled-components'
import homeBG3 from '../../../assets/homeBG3.png'
import tabHomeBG3 from '../../../assets/tabHomeBG3.png'
import phoneHomeBG3 from '../../../assets/phoneHomeBG3.png'
import testimonialBG from '../../../assets/“.png'

export const TestimonialStyled = styled.section`
  width: 100%;
  height: 117vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${homeBG3});
  background-position: center;
  background-size: cover;
  padding: 0 10rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 7rem;
    background: url(${tabHomeBG3});
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 210vh;
    padding: 0 1.5rem;
    background: url(${phoneHomeBG3});
  }
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

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 2rem;
    line-height: 1.2;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 1.7rem;
    line-height: 1.2;
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

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    row-gap: 3.3rem;
    margin-top: 3.3rem;

    .testimonials {
      row-gap: 1.3rem;
      .texts {
        font-size: 0.95rem;
      }

      .author-details {
        .author {
          font-size: 1rem;
        }
        .author-title {
          font-size: 0.85rem;
        }
      }

      img {
        width: 4rem;
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    row-gap: 2.3rem;
    margin-top: 2.3rem;

    .testimonials {
      margin-top: 2rem;
      background-size: 40px;
      row-gap: 1.6rem;
      .texts {
        margin-top: 1.5rem;
        font-size: 1rem;
        line-height: 1.5;
      }

      .author-details {
        .author {
          font-size: 1.1rem;
        }
        .author-title {
          font-size: 0.8rem;
        }
      }
    }
  }
`
