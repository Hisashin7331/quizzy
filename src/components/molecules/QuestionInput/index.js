/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import correct from 'assets/symbolic/correct.svg'
import incorrect from 'assets/symbolic/incorrect.svg'

import {
    Content,
    Question,
    Answer,
    AnswersWrapper,
    Label,
    CheckboxLabel,
    QuestionWrapper,
    QuestionHeader,
    HiddenCheckbox,
    StyledCheckbox,
} from './styles'

const QuestionInput = ({ quizData, setQuizData, questionNumber }) => {
    const [questionData, setQuestionData] = useState({
        question: '',
        answers: [
            {
                answer: '',
                isCorrect: true,
            },
            {
                answer: '',
                isCorrect: false,
            },
            {
                answer: '',
                isCorrect: false,
            },
            {
                answer: '',
                isCorrect: false,
            },
        ],
    })

    useEffect(() => {
        const newArray = [...quizData]
        newArray[questionNumber] = questionData
        setQuizData(newArray)
    }, [questionData])

    const setQuestion = value => {
        setQuestionData({
            question: value,
            answers: questionData.answers,
        })
    }

    const setAnswer = (value, index) => {
        const newArray = { ...questionData }
        newArray.answers[index].answer = value
        setQuestionData(newArray)
    }

    const setIsCorrect = index => {
        const newArray = { ...questionData }
        newArray.answers[index].isCorrect = !newArray.answers[index]
            .isCorrect
        setQuestionData(newArray)
    }

    return (
        <Content>
            <QuestionWrapper>
                <QuestionHeader>
                    Question {questionNumber + 1}
                </QuestionHeader>
                <Question
                    value={questionData.question}
                    onChange={e => setQuestion(e.target.value)}
                />
            </QuestionWrapper>
            <AnswersWrapper>
                {questionData.answers.map((item, index) => (
                    <Label
                        key={index}
                        isCorrect={
                            questionData.answers[index].isCorrect
                        }
                    >
                        <Answer
                            value={questionData.answers[index].answer}
                            onChange={e =>
                                setAnswer(e.target.value, index)
                            }
                        />
                        <CheckboxLabel>
                            <HiddenCheckbox
                                type='checkbox'
                                checked={
                                    questionData.answers[index]
                                        .isCorrect
                                }
                                onChange={() => setIsCorrect(index)}
                            />
                            <StyledCheckbox
                                isCorrect={
                                    questionData.answers[index]
                                        .isCorrect
                                }
                            >
                                <img
                                    src={
                                        questionData.answers[index]
                                            .isCorrect
                                            ? correct
                                            : incorrect
                                    }
                                    alt='Correctness of the answer'
                                />
                            </StyledCheckbox>
                        </CheckboxLabel>
                    </Label>
                ))}
            </AnswersWrapper>
        </Content>
    )
}

export default QuestionInput

QuestionInput.propTypes = {
    quizData: PropTypes.array.isRequired,
    setQuizData: PropTypes.func.isRequired,
    questionNumber: PropTypes.number.isRequired,
}
