import styled from 'styled-components'

const Wrapper = styled.div`
    width: 480px;
    height: 240px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;

    @media (max-width: 479px) {
        width: 100%;
        padding: 0 16px;
    }

    @media (max-height: 239px) {
        height: 100%;
    }
`

export { Wrapper }
