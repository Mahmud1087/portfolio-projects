import styled from 'styled-components'
import aboutBG3 from '../../../assets/aboutBG3.png'
import tabAboutBG3 from '../../../assets/tabAboutBG3.png'
import phoneAboutBG3 from '../../../assets/phoneAboutBG3.png'

export const ClientsSection = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${aboutBG3});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 10rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 30vh;
    background: url(${tabAboutBG3});
    background-repeat: no-repeat;
    padding: 0 3rem;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 80vh;
    background: url(${phoneAboutBG3});
    background-repeat: no-repeat;
    padding: 0 1.5rem;
  }
`

export const ClientsContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: 6rem;
  }

  @media screen and (min-height: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;
    margin-top: 4rem;

    img {
      width: 7rem;
    }
  }
`
