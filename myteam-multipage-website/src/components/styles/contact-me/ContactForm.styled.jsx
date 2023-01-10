import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  width: 100%;
  align-items: flex-start;
  height: inherit;

  input,
  textarea {
    background: transparent;
    padding: 1.1rem 0.8rem;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    opacity: 0.8;
    font-size: 12px;
    width: 100%;
    color: white;

    ::placeholder {
      color: white;
      opacity: 0.8;
      font-family: 'Livvic';
    }
  }

  input:focus,
  textarea:focus {
    outline: none;
    color: white;
  }

  button {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.6rem 2rem;
    border: none;
    outline: none;
    border-radius: 50px;
    margin-top: 1rem;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .input-error {
    border-bottom: 1px solid #f67e7e;
  }

  .error-message {
    font-size: 10px;
    color: #f67e7e;
    margin-top: 1rem;
  }
`
