import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        background: #e9e9e9;
        height: 100%;
        width: 100%;

    }
    body > #root {
        min-width: 100%;
        min-height: 100%;
    }
    html {
        overflow-y: scroll;
    }
`
