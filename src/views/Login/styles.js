import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Form = styled.form`
    width: 512px;
    background: white;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.3);
    position: absolute;
    padding: 48px 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    @media (max-width: 820px) {
        width: 100vw;
        height: calc(100% - 64px);
    }
`

const Heading = styled.h1`
    font-size: 48px;
    margin: 16px 0 48px 0;
`

const ForgotButton = styled.button.attrs({
    type: 'button',
})`
    align-self: flex-end;
    margin: 0;
    border: none;
    background: none;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    font-weight: 700;
    opacity: 0.7;
    outline: 0;
`

const LoginButton = styled.button.attrs({
    type: 'submit',
})`
    width: 100%;
    border-radius: 64px;
    margin: 48px 0;
    height: 48px;
    border: none;
    background: rgb(0, 226, 224);
    background: linear-gradient(
        90deg,
        rgba(0, 226, 224, 1) 20%,
        rgba(120, 125, 255, 1) 50%,
        rgba(221, 0, 220, 1) 80%
    );
    color: white;
    font-weight: 700;
    font-size: 16px;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.3);
    cursor: pointer;
`

const RegisterText = styled.h6`
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 48px;
`

const RegisterButton = styled(Link).attrs({
    to: '/register',
})`
    font-weight: 700;
    font-size: 16px;
    color: #00e2e0;
    text-decoration: none;
`

export {
    Form,
    Heading,
    ForgotButton,
    LoginButton,
    RegisterButton,
    RegisterText,
}
