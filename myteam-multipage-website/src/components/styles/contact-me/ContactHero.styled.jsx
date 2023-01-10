import styled from 'styled-components'
import contactBG from '../../../assets/contactBG.png'

export const ContactHeroSection = styled.section`
  width: 100%;
  height: 110vh;
  background: url(${contactBG});
  background-position: center;
  background-size: cover;
  padding: 0 10rem;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`
