import styled from 'styled-components'
import footerBG1 from '../../../assets/homeBG4.png'
import phoneHomeBG4 from '../../../assets/phoneHomeBG4.png'
import footerBG2 from '../../../assets/homeBG5.png'

export const FooterStyled = styled.section`
  width: 100%;
  height: 63vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 45vh;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 120vh;
  }
`

export const FooterSectionTop = styled.div`
  background: url(${footerBG1});
  padding: 0 18rem;
  height: 100%;

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 2rem;
      color: #012f34;
    }

    .contact-btn {
      border: 1px solid #012f34;
      color: #012f34;
      font-weight: 700;

      &:hover {
        background-color: #012f34;
        color: white;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 7rem;
    height: 60%;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    background: url(${phoneHomeBG4});
    /* text-align: center; */
    padding: 0 1.5rem;
    height: 60%;

    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 1.3rem;
      width: 100%;
      text-align: center;
    }

    .contact-btn {
      display: block;
    }
  }
`
export const FooterSectionBottom = styled.div`
  background: url(${footerBG2});
  padding: 0 10rem;
  height: 100%;

  .bottom-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content-left {
      display: flex;
      gap: 10rem;

      .links {
        display: flex;
        flex-direction: column;
        row-gap: 1.3rem;
      }

      .address {
        font-size: 13px;
        color: #fff;
        opacity: 0.6;
        line-height: 1.5rem;
      }
    }

    .content-right {
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .socials {
        display: flex;
        align-self: flex-end;
        gap: 1.1rem;

        .icon {
          font-size: 1.3rem;
          transition: all 0.25s ease-in-out;

          &:hover {
            color: #f67e7e;
          }
        }
      }

      p.copyright {
        font-size: 13px;
        color: #fff;
        opacity: 0.6;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 3rem;

    .bottom-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 3rem;

      .content-left {
        width: 100%;
        justify-content: space-between;

        .links {
          row-gap: 2rem;
        }

        .address {
          text-align: right;
        }
      }

      .content-right {
        width: 100%;
        height: 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .socials {
          align-self: center;
        }
      }
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    padding: 0 3rem;

    .bottom-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: 2rem;

      .content-left {
        gap: 1.5rem 0;
        flex-direction: column;
        text-align: center;

        .links {
          row-gap: 2rem;

          .navlinks {
            display: flex;
            align-self: center;

            & li {
              font-size: 0.9rem;
            }
          }
        }

        .address {
          text-align: center;
        }
      }

      .content-right {
        width: 100%;
        height: 0;
        flex-direction: column;
        text-align: center;
        row-gap: 1rem;
        .socials {
          align-self: center;
        }
      }
    }
  }
`
