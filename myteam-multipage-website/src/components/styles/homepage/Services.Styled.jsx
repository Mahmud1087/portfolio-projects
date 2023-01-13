import styled from 'styled-components'
import homeBG2 from '../../../assets/homeBG2.png'
import tabHomeBG2 from '../../../assets/tabHomeBG2.png'

export const ServiceStyled = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: url(${homeBG2});
  background-position: center;
  background-size: cover;
  padding: 0 10rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 68vh;
    padding: 0 5rem;
    background: url(${tabHomeBG2});
    background-repeat: no-repeat;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 8rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    row-gap: 1rem;
  }
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

  @media screen and (min-width: 481px) and (max-width: 768px) {
    hr {
      height: 0.3rem;
    }

    h1 {
      font-size: 2rem;
      margin-top: 0.5rem;
      max-width: 30rem;
    }
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
        font-size: 0.87rem;
      }

      p {
        color: white;
        opacity: 0.8;
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    .container {
      img {
        width: 5rem;
      }

      .textContent {
        row-gap: 0.8rem;

        h4,
        p {
          font-size: 1.05rem;
          line-height: 1.5;
        }
      }
    }
  }
`
