import styled from 'styled-components'

const Content = styled.div`
    width: 1440px;
    box-sizing: border-box;
    margin-top: 64px;
    padding: 8px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: ${({ center }) =>
        center ? 'center' : 'flex-start'};
    justify-content: flex-start;
    font-family: 'Roboto', sans-serif;
`

export { Content }
