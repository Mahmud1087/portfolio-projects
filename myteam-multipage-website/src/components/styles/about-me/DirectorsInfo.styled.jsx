import styled from 'styled-components'
import aboutBG2 from '../../../assets/aboutBG2.png'
import tabAboutBG2 from '../../../assets/tabAboutBG2.png'

export const DirectorsInfoSection = styled.section`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${aboutBG2});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 10rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 118vh;
    padding: 0 6rem;
    background: url(${tabAboutBG2});
  }
`

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 2rem;
  margin-top: 4rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem 1rem;
  }
`

export const Card = styled.div`
  background: #012f34;
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.7rem;
  position: relative;
  padding: 2rem 3rem;
  text-align: center;

  img {
    width: 6rem;
  }

  .director-details {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    margin-bottom: 1.2rem;
  }
  h4 {
    font-size: 13px;
    color: #79c8c7;
  }

  p {
    font-size: 11px;
    font-style: italic;
    color: #ffffff;
    opacity: 0.8;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -1.3rem;
    background: none;
    border: none;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    font-size: 0.9rem;
    font-weight: 700;
    background-color: #f67e7e;
    color: #012f34;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: #79c8c7;
    }
  }

  button.close {
    background-color: #79c8c7;
  }

  .more-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1.5rem;

    p {
      line-height: 1.7;
      font-style: normal;
      opacity: 1;
    }

    .icons {
      display: flex;
      gap: 0.6rem;
      font-size: 1rem;
      color: white;
      transition: all 0.25s ease-in-out;

      a:hover {
        color: #f67e7e;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 16rem;

    button {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 1.2rem;
    }
  }
`
