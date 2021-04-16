import React from 'react'
import PropTypes from 'prop-types'

import ThumbnailInput from 'components/molecules/ThumbnailInput'

import { Content, NameInput, TagsInput, Top } from './styles'

const Details = ({
    quizName,
    setQuizName,
    quizTags,
    setQuizTags,
}) => {
    return (
        <Content>
            <Top>
                <ThumbnailInput />
                <NameInput
                    value={quizName}
                    onChange={e => setQuizName(e.target.value)}
                />
            </Top>
            <TagsInput
                value={quizTags}
                onChange={e => setQuizTags(e.target.value)}
            />
        </Content>
    )
}

export default Details

Details.propTypes = {
    quizName: PropTypes.string.isRequired,
    setQuizName: PropTypes.func.isRequired,
    quizTags: PropTypes.string.isRequired,
    setQuizTags: PropTypes.func.isRequired,
}
