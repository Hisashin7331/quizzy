import styled from 'styled-components'

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
    width: 100%;
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

export { Wrapper, Label, InputWrapper, IconWrapper, Icon, Input }
