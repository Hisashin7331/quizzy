import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Content, NameInput, TagsInput } from './styles'

const Details = ({
    quizName,
    setQuizName,
    quizTags,
    setQuizTags,
}) => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <Content>
            <NameInput
                value={quizName}
                onChange={e => setQuizName(e.target.value)}
            />
            {isFocused && (
                <h1 style={{ color: 'white' }}>
                    Separate tags with comma
                </h1>
            )}
            <TagsInput
                value={quizTags}
                onChange={e => setQuizTags(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
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
