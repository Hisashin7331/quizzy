import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        background: #e9e9e9;
        overflow-y: scroll;
    }
    body > #root {
        width: 100%;
    }
`
