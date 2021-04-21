import styled from 'styled-components'

const Content = styled.div`
    width: ${({ justifyCenter }) =>
        justifyCenter ? 'auto' : '1440px'};
    box-sizing: border-box;
    margin-top: 64px;
    padding: 8px;
    height: 100%;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: ${({ justifyCenter }) =>
        justifyCenter ? 'center' : 'flex-start'};
    justify-content: ${({ alignCenter }) =>
        alignCenter ? 'center' : 'flex-start'};
    font-family: 'Roboto', sans-serif;
`

export { Content }
