import styled from 'styled-components'
import homeBG2 from '../../../assets/homeBG2.png'

export const ServiceStyled = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: url(${homeBG2});
  background-position: center;
  background-size: cover;
  padding: 0 10rem;
`

export const Container = styled.div`
  display: flex;
  gap: 8rem;
`

export const LeftContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  hr {
    width: 3rem;
    background-color: #f67e7e;
    border: none;
    height: 0.2rem;
  }

  h1 {
    margin-top: 1.5rem;
    font-size: 3rem;
    font-weight: 700;
    color: white;
    line-height: 100%;
  }
`

export const RightContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.8rem;
  margin-top: 3.7rem;
  .container {
    display: flex;
    gap: 1.5rem;

    img {
      width: 3.5rem;
    }

    .textContent {
      display: flex;
      flex-direction: column;
      row-gap: 0.6rem;

      h4 {
        color: #f67e7e;
        font-size: 14px;
      }

      p {
        color: white;
        font-size: 13px;
      }
    }
  }
`
