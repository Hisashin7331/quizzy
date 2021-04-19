import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { quizValidation } from 'functions/quizValidation'
import { createQuiz } from 'api/quizzes'

import Details from 'components/molecules/Details'
import QuestionInput from 'components/molecules/QuestionInput'
import Error from 'components/atoms/Error'

import { Content } from 'components/styles/Content'
import { Section, ActionButton, Wrapper, Column } from './styles'

const QuizCreator = () => {
    const [questionsNumber, setQuestionsNumber] = useState(3)
    const [quizName, setQuizName] = useState('')
    const [quizData, setQuizData] = useState([])
    const [quizTags, setQuizTags] = useState('')
    const [thumbnail, setThumbnail] = useState()
    const [errors, setErrors] = useState([])

    const renderSections = () => {
        const sections = []
        for (let i = 0; i < questionsNumber; i += 1) {
            sections.push(
                <QuestionInput
                    key={i}
                    quizData={quizData}
                    setQuizData={setQuizData}
                    questionNumber={i}
                />,
            )
        }
        return sections
    }

    const submitQuiz = () => {
        const errorsFound = quizValidation(
            quizName,
            quizData,
            quizTags,
            setErrors,
        )
        if (errorsFound.length > 0) return
        const data = { name: quizName, data: quizData }
        const file = new FormData()
        file.append('file', thumbnail)
        createQuiz(data, file)
    }

    return (
        <Content justifyCenter>
            <Wrapper>
                <Column errors>
                    {errors.map(item => (
                        <Error key={item} message={item} />
                    ))}
                </Column>
                <Column wide>
                    <Section>
                        <Details
                            setThumbnail={setThumbnail}
                            quizName={quizName}
                            setQuizName={setQuizName}
                            quizTags={quizTags}
                            setQuizTags={setQuizTags}
                        />
                    </Section>
                    {renderSections().map(item => item)}
                </Column>
                <Column>
                    <ActionButton action='tutorial'>
                        Run tutorial
                    </ActionButton>
                    <ActionButton action='cancel' as={Link} to='/'>
                        Cancel
                    </ActionButton>
                    <ActionButton
                        action='more'
                        onClick={() =>
                            setQuestionsNumber(questionsNumber + 1)
                        }
                    >
                        New Question
                    </ActionButton>
                    <ActionButton
                        action='submit'
                        onClick={submitQuiz}
                    >
                        Submit
                    </ActionButton>
                </Column>
            </Wrapper>
        </Content>
    )
}

export default QuizCreator
