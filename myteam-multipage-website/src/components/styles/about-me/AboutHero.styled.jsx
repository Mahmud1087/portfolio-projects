import styled from 'styled-components'
import aboutBG1 from '../../../assets/aboutBG1.png'

export const AboutHeroSection = styled.section`
  width: 100%;
  height: 80vh;
  background: url(${aboutBG1});
  background-position: center;
  background-size: cover;
  padding: 0 10rem;
`

export const AboutText = styled.div`
  display: flex;
  /* align-items: center; */
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
      /* max-width: 50rem; */
      color: white;
      font-size: 1.1rem;
      line-height: 1.3;
    }
  }
`
