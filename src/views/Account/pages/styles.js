import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Heading = styled.h1`
    width: 99%;
    font-size: 32px;
    align-self: flex-start;
    margin-left: 1%;
`

const Form = styled.form`
    width: 90%;
    @media (min-width: 1279px) {
        margin-top: 64px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
`

const EmailInput = styled.input.attrs({
    type: 'email',
    placeholder: 'Your email...',
})`
    width: 90%;
    max-width: 256px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 16px;
    outline: none;
    border-radius: 32px;
    border: 1px solid #121212;
`

const Input = styled.input`
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    padding: 0 16px;
    outline: none;
    border-radius: 32px;
    border: 1px solid #121212;
    align-self: flex-start;
    margin: 16px 0;
`

const TextArea = styled.textarea.attrs({
    placeholder: 'Tell us about your problem',
})`
    width: 100%;
    max-width: 512px;
    min-height: 256px;
    border-radius: 32px;
    margin: 32px 0;
    padding: 16px;
    box-sizing: border-box;
    outline: none;
    resize: none;
    border: 1px solid #121212;
`

const Submit = styled.button.attrs({
    type: 'submit',
    value: 'Submit',
})`
    width: 90%;
    max-width: 256px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 16px;
    outline: none;
    border-radius: 32px;
    border: 1px solid #121212;
    background: #121212;
    color: white;
    font-weight: 700;
    cursor: pointer;
`

const Stats = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 23%);
    gap: 2%;
    grid-template-rows: 100%;
    justify-content: center;
    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 46%);
    }
`

const Tiles = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 100%;
    grid-gap: 24px;
    justify-content: center;
    @media (max-width: 720px) {
        grid-template-columns: 90%;
    }
`

export {
    Wrapper,
    Heading,
    Form,
    EmailInput,
    TextArea,
    Submit,
    Stats,
    Tiles,
    Input,
}
