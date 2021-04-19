import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Form = styled.form`
    width: 512px;
    background: white;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.3);
    position: absolute;
    padding: 48px 64px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`

const Heading = styled.h1`
    font-size: 48px;
    margin: 16px 0 48px 0;
`

const Wrapper = styled.div`
    width: 100%;
    height: 72px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid lightgrey;
    &:last-child {
        margin-bottom: 8px;
    }
`

const Label = styled.label`
    font-size: 14px;
    margin-left: 4px;
    font-weight: 500;
`

const InputWrapper = styled.span`
    width: 100%;
    height: calc(100% - 14px);
    display: flex;
`

const IconWrapper = styled.span`
    height: 100%;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Icon = styled.img`
    height: 40%;
    height: 40%;
    opacity: 0.4;
`

const Input = styled.input`
    width: calc(100% - 36px);
    height: 100%;
    background: none;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    &::placeholder {
        font-weight: 700;
    }
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
        rgba(120, 125, 255, 1) 43%,
        rgba(221, 0, 220, 1) 71%
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
    Wrapper,
    Label,
    InputWrapper,
    IconWrapper,
    Icon,
    Input,
    ForgotButton,
    LoginButton,
    RegisterButton,
    RegisterText,
}
