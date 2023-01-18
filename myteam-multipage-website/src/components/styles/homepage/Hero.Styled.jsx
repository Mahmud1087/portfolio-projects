import styled from 'styled-components'
import homeBG1 from '../../../assets/homeBG1.png'
import tabHomeBG1 from '../../../assets/tabHomeBG1.png'
import phoneHomeBG1 from '../../../assets/phoneHomeBG1.png'

export const HeroStyled = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${homeBG1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 10rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 3rem;
    background: url(${tabHomeBG1});
    height: 68vh;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    /* width: 100%; */
    padding: 0 1.5rem 10rem;
    background: url(${phoneHomeBG1});
    /* background-size: 100%; */
    height: 100%;
  }
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;

  .menuBtn {
    display: none;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    padding: 2.5rem 0;

    .menuBtn {
      display: block;
      background: transparent;
      border: none;
      font-size: 1.2rem;
      color: white;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }
`

export const Logo = styled.img`
  width: 8rem;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 4.5rem;
  }
`

export const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  li {
    font-size: 1rem;
    font-weight: 500;
  }

  li a:hover {
    color: #f67e7e;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid white;
  background: transparent;
  font-size: 1rem;
  border-radius: 18px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    border: none;
  }

  &:hover {
    color: #000;
    background: white;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`

export const HeroText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 4rem; */
  margin-top: 4rem;

  h1 {
    font-size: 5.5rem;
    font-weight: 700;
    line-height: 100%;
    color: white;
    max-width: 30rem;

    span {
      color: #f67e7e;
    }
  }

  div {
    hr {
      width: 3rem;
      background-color: #79cbc7;
      border: none;
      height: 0.2rem;
    }

    p {
      padding-top: 4rem;
      max-width: 26rem;
      color: white;
      font-size: 1.15rem;
      line-height: 1.3;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      font-size: 3.5rem;
      max-width: 20rem;
    }

    div {
      hr {
        display: none;
      }
      p {
        padding-top: 0;
        line-height: 1.5;
        font-size: 0.9rem;
        margin-top: 2rem;
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      font-size: 3rem;
      max-width: 18rem;
    }

    div {
      hr {
        display: none;
      }
      p {
        padding-top: 0;
        line-height: 1.8;
        font-size: 1rem;
        margin-top: 1rem;
        text-align: center;
      }
    }
  }
`
