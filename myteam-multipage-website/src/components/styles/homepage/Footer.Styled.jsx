import styled from 'styled-components'
import footerBG1 from '../../../assets/homeBG4.png'
import footerBG2 from '../../../assets/homeBG5.png'

export const FooterStyled = styled.section`
  width: 100%;
  height: 63vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: center;
  background-size: cover;
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
`
