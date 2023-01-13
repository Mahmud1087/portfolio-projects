import styled from 'styled-components'
import contactBG from '../../../assets/contactBG.png'
import tabContactBG from '../../../assets/tabContactBG.png'

export const ContactHeroSection = styled.section`
  width: 100%;
  height: 110vh;
  background: url(${contactBG});
  background-position: center;
  background-size: cover;
  padding: 0 10rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 118vh;
    padding: 0 3rem;
    background: url(${tabContactBG});
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    row-gap: 2rem;
    text-align: center;
  }
`
