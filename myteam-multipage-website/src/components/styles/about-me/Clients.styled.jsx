import styled from 'styled-components'
import aboutBG3 from '../../../assets/aboutBG3.png'

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
`

export const ClientsContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: 6rem;
  }
`
