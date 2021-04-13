import styled from 'styled-components'

const Content = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: ${({ center }) =>
        center ? 'center' : 'flex-start'};
    justify-content: flex-start;
    position: relative;
    font-family: 'Roboto', sans-serif;
    @media (max-height: 1080px) {
        max-width: 1440px;
    }
    @media (min-height: 1081px) and (max-height: 1440px) {
        max-width: 1920px;
    }
    @media (min-height: 1441px) and (max-height: 2160px) {
        max-width: 2880px;
    }
`

export { Content }
