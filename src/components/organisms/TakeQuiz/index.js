/* eslint-disable no-underscore-dangle */
import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar'
import { Link } from 'react-router-dom'

import {
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
} from './styles'

const Context = createContext({
    index: 0,
    setIndex: () => {},
    quizData: [],
    correctAnswers: [],
    setCorrectAnswers: () => {},
})

const Display = ({ children }) => {
    const { index } = useContext(Context)
    return children[index]
}

const Summary = () => {
    const {
        correctAnswers,
        questions,
        setIndex,
        setCorrectAnswers,
    } = useContext(Context)
    const percentageScore = Math.round(
        (correctAnswers.length / questions.length) * 100,
    )
    return (
        <StyledSummary>
            <Heading>Summary</Heading>
            <CircleWrapper>
                <CircularProgressbarWithChildren
                    value={percentageScore}
                    strokeWidth={12}
                    styles={buildStyles({
                        pathColor: '#17a2b8',
                        pathTransition: 'ease',
                        pathTransitionDuration: 5,
                        strokeLinecap: 'butt',
                    })}
                >
                    <h1
                        style={{ margin: 0, fontSize: 32 }}
                    >{`${percentageScore}%`}</h1>
                    <h2
                        style={{
                            margin: 0,
                            fontSize: 16,
                            fontWeight: 500,
                        }}
                    >
                        {correctAnswers.length}/{questions.length}
                    </h2>
                </CircularProgressbarWithChildren>
            </CircleWrapper>
            <ButtonWrapper>
                <ActionButton as={Link} to='/'>
                    Back
                </ActionButton>
                <ActionButton
                    try
                    onClick={() => {
                        setIndex(0)
                        setCorrectAnswers([])
                    }}
                >
                    Try again
                </ActionButton>
            </ButtonWrapper>
        </StyledSummary>
    )
}

const Question = ({
    question,
    answers,
    questionNumber,
    numberOfQuestions,
}) => {
    const {
        index,
        setIndex,
        correctAnswers,
        setCorrectAnswers,
    } = useContext(Context)
    const [isAnswerSelected, setIsAnswerSelected] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    const handleAnswer = i => {
        setIsAnswerSelected(true)
        setSelectedAnswer(i)
        const checkCorrectness = () => {
            if (answers[i].isCorrect) {
                return true
            }
            return false
        }
        const isAnswerCorrect = checkCorrectness()
        if (isAnswerCorrect) {
            setCorrectAnswers([...correctAnswers, question])
        }
    }

    return (
        <Wrapper>
            <QuestionWrapper>
                <span>{question}</span>
                <span>{`${questionNumber}/${numberOfQuestions}`}</span>
            </QuestionWrapper>
            <AnswersWrapper>
                {answers.map((item, i) => (
                    <Answer
                        isAnswerSelected={isAnswerSelected}
                        isCorrect={isAnswerSelected && item.isCorrect}
                        isSelected={selectedAnswer === i}
                        key={item.answer}
                        onClick={() =>
                            !isAnswerSelected && handleAnswer(i)
                        }
                    >
                        {item.answer}
                    </Answer>
                ))}
            </AnswersWrapper>
            <NextQuestion
                disabled={!isAnswerSelected}
                onClick={() => setIndex(index + 1)}
            >
                Next question
            </NextQuestion>
        </Wrapper>
    )
}

const TakeQuiz = ({ questions }) => {
    const [index, setIndex] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState([])

    const renderChildrens = () => {
        const childrens = []
        questions.forEach((item, i) => {
            childrens.push(
                <Question
                    key={item._id}
                    question={item.question}
                    answers={item.answers}
                    questionNumber={i + 1}
                    numberOfQuestions={questions.length}
                />,
            )
        })
        childrens.push(<Summary />)
        return childrens
    }

    return (
        <Context.Provider
            value={{
                index,
                setIndex,
                questions,
                correctAnswers,
                setCorrectAnswers,
            }}
        >
            <Display>{renderChildrens().map(item => item)}</Display>
        </Context.Provider>
    )
}

export default TakeQuiz

TakeQuiz.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
    questionNumber: PropTypes.number.isRequired,
    numberOfQuestions: PropTypes.number.isRequired,
}
