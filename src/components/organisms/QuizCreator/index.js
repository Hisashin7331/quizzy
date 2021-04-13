/* eslint-disable no-plusplus */
import React, { useState } from 'react'

import ThumbnailInput from 'components/molecules/ThumbnailInput'
import Details from 'components/molecules/Details'
import QuestionInput from 'components/molecules/QuestionInput'

import { Content } from 'components/styles/Content'
import { Section, MoreButton, Wrapper } from './styles'

const QuizCreator = () => {
    const [questionsNumber, setQuestionsNumber] = useState(3)
    const [quizName, setQuizName] = useState('Your quiz name...')
    const [quizData, setQuizData] = useState([])
    const [quizTags, setQuizTags] = useState('your, quiz, tags')

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
            <Section>
                <ThumbnailInput />
                <Details
                    quizName={quizName}
                    setQuizName={setQuizName}
                    quizTags={quizTags}
                    setQuizTags={setQuizTags}
                />
            </Section>
            <Wrapper>
                {renderSections().map(item => item)}
                <MoreButton
                    onClick={() =>
                        setQuestionsNumber(questionsNumber + 1)
                    }
                >
                    +
                </MoreButton>
            </Wrapper>
        </Content>
    )
}

export default QuizCreator
