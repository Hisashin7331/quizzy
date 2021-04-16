/* eslint-disable no-plusplus */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Details from 'components/molecules/Details'
import QuestionInput from 'components/molecules/QuestionInput'

import { Content } from 'components/styles/Content'
import { Section, ActionButton, Wrapper, Column } from './styles'

const QuizCreator = () => {
    const [questionsNumber, setQuestionsNumber] = useState(3)
    const [quizName, setQuizName] = useState('')
    const [quizData, setQuizData] = useState([])
    const [quizTags, setQuizTags] = useState('')

    const renderSections = () => {
        const sections = []
        for (let i = 0; i < questionsNumber; i++) {
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

    return (
        <Content center>
            <Wrapper>
                <Column wide>
                    <Section>
                        <Details
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
                    <ActionButton action='submit'>
                        Submit
                    </ActionButton>
                </Column>
            </Wrapper>
        </Content>
    )
}

export default QuizCreator
