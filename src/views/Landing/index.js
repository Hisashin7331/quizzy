import React from 'react'

import Section from 'components/molecules/Section'

import { getRecentQuizzes, getPopularQuizzes } from 'api/quizzes'

import { Content } from './styles'

const Landing = () => {
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
