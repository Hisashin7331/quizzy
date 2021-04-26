import styled from 'styled-components'

const Wrapper = styled.div`
    width: 1080px;
    display: flex;
    flex-direction: column;
`

const QuestionWrapper = styled.span`
    width: 100%;
    padding: 16px;
    font-size: 32px;
    font-family: 'Roboto';
    font-weight: 700;
    margin: 16px 0;
    box-sizing: border-box;
    background: white;
    min-height: 128px;
    display: flex;
    justify-content: space-between;
`

const AnswersWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 8px));
    grid-template-rows: auto;
    gap: 16px;
    box-sizing: border-box;
`

const Answer = styled.span`
    background: white;
    box-sizing: border-box;
    cursor: ${props => !props.isAnswerSelected && 'pointer'};
    padding: 24px;
    transition: 1s;
    border: 4px solid
        ${({ isSelected, isCorrect }) => {
            if (isCorrect && isSelected) {
                return 'green'
            }
            if (isCorrect) {
                return 'green'
            }
            if (!isCorrect && isSelected) {
                return 'red'
            }
            return 'transparent'
        }};
`

const NextQuestion = styled.button`
    align-self: flex-end;
    width: 192px;
    height: 48px;
    border: none;
    background: blueviolet;
    cursor: pointer;
    color: white;
    font-weight: 700;
    margin-top: 32px;
`

export {
    Wrapper,
    QuestionWrapper,
    AnswersWrapper,
    Answer,
    NextQuestion,
}
