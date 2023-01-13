import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  color: white;
  width: 100%;

  h1 {
    font-size: 3rem;
  }

  h4 {
    font-size: 1.5rem;
    color: #f67e7e;
  }

  .inquiry-container {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;

    .inquiries {
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
        width: 3rem;
      }

      p {
        font-size: 14px;
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 7rem;

    .inquiry-container {
      .inquiries {
        img {
          width: 5rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  }
`
