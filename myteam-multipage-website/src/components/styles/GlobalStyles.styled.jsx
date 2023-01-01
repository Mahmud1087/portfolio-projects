import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Livvic',sans-serif;
    width: 100%;
}

a {
    text-decoration: none;
    color: white;
    transition: all 0.25s ease-in-out;
}
`
