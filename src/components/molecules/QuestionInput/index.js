/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
    Content,
    Question,
    Answer,
    AnswersWrapper,
    Label,
    CheckboxLabel,
    QuestionWrapper,
    QuestionHeader,
    Checkbox,
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
                    <Label key={index}>
                        <Answer
                            value={questionData.answers[index].answer}
                            onChange={e =>
                                setAnswer(e.target.value, index)
                            }
                        />
                        <CheckboxLabel
                            onClick={() => setIsCorrect(index)}
                            isChecked={
                                questionData.answers[index].isCorrect
                            }
                        >
                            <Checkbox
                                type='checkbox'
                                checked={
                                    questionData.answers[index]
                                        .isCorrect
                                }
                            />
                            <span />
                        </CheckboxLabel>
                    </Label>
                ))}
            </AnswersWrapper>
        </Content>
    )
}

export default QuestionInput

QuestionInput.propTypes = {
    quizData: PropTypes.arrayOf.isRequired,
    setQuizData: PropTypes.func.isRequired,
    questionNumber: PropTypes.number.isRequired,
}
