import styled from 'styled-components'

const Content = styled.div`
    width: 100%;
    height: 256px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 32px;
    background: #232529;
    padding: 32px;
    box-sizing: border-box;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.5);
`

const QuestionWrapper = styled.div`
    border-radius: 16px;
    width: 100%;
    height: 28%;
    border: 4px solid #121212;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`

const QuestionHeader = styled.span`
    height: 100%;
    width: 18%;
    border-radius: 10px 0 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #121212;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    color: white;
`

const Question = styled.input.attrs({
    type: 'text',
})`
    font-weight: bold;
    border-radius: 0 12px 12px 0;
    width: 82%;
    height: 100%;
    outline: 0;
    box-sizing: border-box;
    border: none;
    padding: 8px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
`

const Answer = styled.input.attrs({
    type: 'text',
})`
    border-radius: 12px 0 0 12px;
    outline: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: none;
    padding: 8px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
`

const AnswersWrapper = styled.div`
    width: 100%;
    height: 60%;
    display: grid;
    grid-template-columns: repeat(2, 49%);
    grid-template-rows: repeat(2, 48%);
    justify-content: space-between;
    align-content: space-between;
    grid-gap: 1%;
`

const Label = styled.div`
    border-radius: 16px;
    width: 100%;
    height: 100%;
    border: 4px solid #003b00;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

const Checkbox = styled.input.attrs({
    type: 'checkbox',
})`
    outline: none;
`

const CheckboxLabel = styled.label`
    border-radius: 0 10px 10px 0;
    aspect-ratio: 1 / 1;
    height: 100%;
    background: #003b00;
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
`

export {
    Content,
    Question,
    Answer,
    AnswersWrapper,
    Label,
    CheckboxLabel,
    Checkbox,
    QuestionWrapper,
    QuestionHeader,
}
