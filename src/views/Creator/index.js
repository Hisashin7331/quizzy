import React, { useEffect } from 'react'
import { seo } from 'functions/seo'

import QuizCreator from 'components/organisms/QuizCreator'

import { Content } from './styles'

const Creator = () => {
    useEffect(() => {
        seo({
            title: 'Create your quiz! |',
            description:
                'Create your own quiz and let other users take and evaluate it!',
        })
    }, [])
    return (
        <Content>
            <QuizCreator />
        </Content>
    )
}

export default Creator
