import styled from 'styled-components'

const Wrapper = styled.div`
    width: 1080px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1079px) {
        width: 100%;
        height: 100%;
    }
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
    @media (max-width: 640px) {
        height: calc(50% - 48px);
        margin: 0;
    }
`

const AnswersWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 8px));
    grid-template-rows: auto;
    gap: 16px;
    box-sizing: border-box;
    @media (max-width: 640px) {
        height: 50%;
        gap: 0;
        grid-template-columns: repeat(2, 50%);
    }
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
            return 'lightgrey'
        }};
    @media (max-width: 1079px) {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        border: 8px solid
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
                return 'lightgrey'
            }};
    }
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
    @media (max-width: 1079px) {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`

const StyledSummary = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
    top: 480px;
    background: white;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.1);
    @media (max-width: 900px) {
        width: 100vw;
        height: 100%;
        position: static;
        left: 0;
        transform: none;
    }
    @media (max-height: 1024px) {
        top: 64px;
        transform: none;
        left: auto;
    }
`

const Heading = styled.h1`
    font-size: 48px;
    width: 100%;
    height: 128px;
    background: #17a2b8;
    margin: 0;
    color: white;
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CircleWrapper = styled.div`
    width: 160px;
    margin: 0 16px;
`

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;
`

const ActionButton = styled.button`
    width: 160px;
    height: 48px;
    margin: 8px;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 700;
    background: ${props => (props.try ? '#17a2b8' : '#dc3545')};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
`

export {
    Wrapper,
    QuestionWrapper,
    AnswersWrapper,
    Answer,
    NextQuestion,
    StyledSummary,
    Heading,
    CircleWrapper,
    ButtonWrapper,
    ActionButton,
}
