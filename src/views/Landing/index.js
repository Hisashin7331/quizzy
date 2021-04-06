import React from 'react'

import Section from 'components/molecules/Section'

import { Content } from './styles'

const Landing = () => {
    return (
        <Content>
            <Section header='For you' />
            <Section header='Most recent' />
            <Section header='Most popular' />
        </Content>
    )
}

export default Landing
