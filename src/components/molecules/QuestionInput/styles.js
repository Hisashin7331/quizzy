import styled from 'styled-components'

const Content = styled.div`
    width: 100%;
    height: 224px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    padding: 32px;
    box-sizing: border-box;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.1);
    margin-bottom: 16px;
    @media (max-width: 560px) {
        justify-content: flex-start;
        gap: 16px;
        height: auto;
    }
`

const QuestionWrapper = styled.div`
    width: 100%;
    height: 48px;
    margin: 0;
    border: 4px solid #121212;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`

const QuestionHeader = styled.span`
    height: 100%;
    width: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #121212;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: white;
    @media (max-width: 500px) {
        font-size: 12px;
        width: 30%;
    }
`

const Question = styled.input.attrs({
    type: 'text',
    maxLength: 128,
})`
    font-weight: bold;
    width: 82%;
    height: 100%;
    outline: 0;
    box-sizing: border-box;
    border: none;
    padding: 8px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 500px) {
        font-size: 12px;
    }
`

const Answer = styled.input.attrs({
    type: 'text',
    maxLength: 64,
})`
    outline: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: none;
    padding: 8px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 500px) {
        font-size: 12px;
    }
`

const AnswersWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 49%);
    grid-template-rows: repeat(2, 48px);
    justify-content: space-between;
    align-content: space-between;
    grid-gap: 8px;
    @media (max-width: 560px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: auto;
    }
`

const Label = styled.div`
    width: 100%;
    height: 100%;
    border: 4px solid
        ${({ isCorrect }) => (isCorrect ? '#28a745' : '#dc3545')};
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: all 150ms;
    @media (max-width: 560px) {
        height: 42px;
    }
`

const HiddenCheckbox = styled.input.attrs({
    type: 'checkbox',
})`
    display: none;
    outline: none;
`

const CheckboxLabel = styled.label`
    aspect-ratio: 1 / 1;
    height: 100%;
    background: #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    input + span {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    position: relative;
`

const StyledCheckbox = styled.span`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${({ isCorrect }) =>
        isCorrect ? '#28a745' : '#dc3545'};
    border-radius: 3px;
    transition: all 150ms;
    width: 100%;
    height: 100%;
    border-radius: 0;
    img {
        transition: 5s;
        height: 70%;
    }
`

export {
    Content,
    Question,
    Answer,
    AnswersWrapper,
    Label,
    CheckboxLabel,
    HiddenCheckbox,
    QuestionWrapper,
    QuestionHeader,
    StyledCheckbox,
}
