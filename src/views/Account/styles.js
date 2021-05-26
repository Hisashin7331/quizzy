import styled from 'styled-components'

const Button = styled.div`
    width: 196px;
    height: 64px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
    text-decoration: none;
    color: black;
    font-weight: 700;
    border-radius: 32px;

    &.active {
        box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.2);
        border-radius: 0;
        background: #121212;
        color: white;
    }
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MobileButtonsWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    @media (min-width: 1280px) {
        display: none;
    }
    display: flex;
    margin: 0;
    background: white;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.4);
    height: 54px;
    justify-content: center;
`

export { Button, Wrapper, MobileButtonsWrapper }
