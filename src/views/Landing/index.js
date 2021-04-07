import React from 'react'

import Section from 'components/molecules/Section'

import { getRecentQuizzes, getPopularQuizzes } from 'api/quizes'

import { Content } from './styles'

const Landing = () => {
    return (
        <Content>
            {/* <Section header='For you' /> */}
            <Section
                header='Most recent'
                apiCall={getRecentQuizzes}
            />
            <Section
                header='Most popular'
                apiCall={getPopularQuizzes}
            />
        </Content>
    )
}

export default Landing
