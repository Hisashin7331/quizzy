import React from 'react'
import PropTypes from 'prop-types'

import ThumbnailInput from 'components/molecules/ImageInput'

import { Content, NameInput, TagsInput, Top } from './styles'

const Details = ({
    quizName,
    setQuizName,
    quizTags,
    setQuizTags,
    setThumbnail,
    thumbnail,
}) => {
    return (
        <Content>
            <Top>
                <ThumbnailInput
                    setImage={setThumbnail}
                    image={thumbnail}
                />
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
    setThumbnail: PropTypes.func.isRequired,
    thumbnail: PropTypes.objectOf,
}

Details.defaultProps = {
    thumbnail: undefined,
}
