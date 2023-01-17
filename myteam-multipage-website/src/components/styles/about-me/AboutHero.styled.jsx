import styled from 'styled-components'
import aboutBG1 from '../../../assets/aboutBG1.png'
import tabAboutBG1 from '../../../assets/tabAboutBG1.png'
import phoneAboutBG1 from '../../../assets/phoneAboutBG1.png'

export const AboutHeroSection = styled.section`
  width: 100%;
  height: 80vh;
  background: url(${aboutBG1});
  background-position: center;
  background-size: cover;
  padding: 0 10rem;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    padding: 0 1.5rem;
    background: url(${phoneAboutBG1});
    background-repeat: no-repeat;
    height: 78vh;
  }
`

export const AboutText = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-top: 3rem;

  h1 {
    font-size: 4.2rem;
    font-weight: 700;
    line-height: 100%;
    color: white;
    width: 90%;
  }

  div {
    hr {
      width: 3rem;
      background-color: #f67e7e;
      border: none;
      height: 0.2rem;
    }

    p {
      padding-top: 2rem;
      color: white;
      font-size: 1.1rem;
      line-height: 1.3;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    row-gap: 2rem;
    text-align: center;

    h1 {
      font-size: 3.8rem;
    }

    div {
      hr {
        display: none;
      }

      p {
        padding-top: 0;
        line-height: 1.5;
        max-width: 75%;
        margin: auto;
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 376px) {
    flex-direction: column;
    row-gap: 2rem;
    text-align: center;

    h1 {
      font-size: 3rem;
      text-align: center;
    }

    div {
      hr {
        display: none;
      }

      p {
        padding-top: 0;
        line-height: 1.8;
        font-size: 1rem;
        text-align: center;
      }
    }
  }
`
