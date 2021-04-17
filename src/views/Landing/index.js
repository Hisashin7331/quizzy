import React, { useEffect } from 'react'
import { seo } from 'functions/seo'

import Section from 'components/molecules/Section'

import { getRecentQuizzes, getPopularQuizzes } from 'api/quizzes'

import { Content } from 'components/styles/Content'

const Landing = () => {
    useEffect(() => {
        seo({
            title: '',
            description:
                'Quizzy is your last quiz-taking website! Create your own quiz and see if it will be trending among users!',
        })
    })
    return (
        <Content>
            {/* <Section header='For you' /> */}
            <Section
                header='Most recent'
                apiCall={getRecentQuizzes}
                buttonPath='/recent'
            />
            <Section
                header='Most popular'
                apiCall={getPopularQuizzes}
                buttonPath='/popular'
            />
        </Content>
    )
}

export default Landing
