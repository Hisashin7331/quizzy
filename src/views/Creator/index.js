/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { seo } from 'functions/seo'
import { Link } from 'react-router-dom'
import { quizValidation } from 'functions/quizValidation'
import { createQuiz } from 'api/quizzes'
import { useToasts } from 'react-toast-notifications'
import { connect } from 'react-redux'

import E404 from 'views/404'
import Details from 'components/molecules/Details'
import QuestionInput from 'components/molecules/QuestionInput'
import Error from 'components/atoms/Error'
import MobileActionButton from 'components/atoms/MobileActionButton'

import cancel from 'assets/navigation/cancel.svg'
import add from 'assets/navigation/add.svg'
import submit from 'assets/navigation/submit.svg'

import Content from 'components/styles/Content'
import { Column } from 'components/styles/Column'
import { Section, ActionButton, MobileButtonsWrapper } from './styles'

const Creator = ({ user }) => {
    const [questionsNumber, setQuestionsNumber] = useState(3)
    const [quizName, setQuizName] = useState('')
    const [quizData, setQuizData] = useState([])
    const [quizCategory, setQuizCategory] = useState('YouTube')
    const [thumbnail, setThumbnail] = useState()
    const [errors, setErrors] = useState([])
    const { addToast } = useToasts()

    useEffect(() => {
        seo({
            title: 'Create your quiz! |',
            description:
                'Create your own quiz and let other users take and evaluate it!',
        })
    }, [])

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
            setErrors,
        )
        if (errorsFound.length > 0) return
        const data = {
            name: quizName,
            data: quizData,
            category: quizCategory,
        }
        const file = new FormData()
        file.append('file', thumbnail)
        createQuiz(data, file, addToast)
    }
    if (!user) {
        return (
            <E404
                message='You must be logged in to create quizzes, redirecting to Login'
                error='ERR_PERMISSION_DENIED'
            />
        )
    }

    return (
        <Content>
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
                        quizCategory={quizCategory}
                        setQuizCategory={setQuizCategory}
                        thumbnail={thumbnail}
                    />
                </Section>
                {renderSections().map(item => item)}
            </Column>
            <Column>
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
                <ActionButton action='submit' onClick={submitQuiz}>
                    Submit
                </ActionButton>
            </Column>
            <MobileButtonsWrapper>
                <MobileActionButton
                    action='link'
                    to='/'
                    label='Cancel'
                    icon={cancel}
                />
                <MobileActionButton
                    action='action'
                    label='Question'
                    icon={add}
                />
                <MobileActionButton
                    action='action'
                    label='Submit'
                    icon={submit}
                />
            </MobileButtonsWrapper>
        </Content>
    )
}

const mapStateToProps = ({ user }) =>
    user && {
        user: user.username,
    }

export default connect(mapStateToProps)(Creator)

Creator.propTypes = {
    user: PropTypes.any,
}

Creator.defaultProps = {
    user: null,
}
