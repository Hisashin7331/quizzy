/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { categories } from 'constants/categories'

import ImageInput from 'components/molecules/ImageInput'

import { Content, NameInput, Top } from './styles'

const Details = ({
    quizName,
    setQuizName,
    quizCategory,
    setQuizCategory,
    setThumbnail,
    thumbnail,
}) => {
    return (
        <Content>
            <Top>
                <ImageInput
                    setImage={setThumbnail}
                    image={thumbnail}
                />
                <div>
                    <b>Category:</b>
                    <select
                        name='Category'
                        value={quizCategory}
                        onChange={e =>
                            setQuizCategory(e.target.value)
                        }
                    >
                        {categories.map(item => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <NameInput
                        value={quizName}
                        onChange={e => setQuizName(e.target.value)}
                    />
                </div>
            </Top>
        </Content>
    )
}

export default Details

Details.propTypes = {
    quizName: PropTypes.string.isRequired,
    setQuizName: PropTypes.func.isRequired,
    quizCategory: PropTypes.string.isRequired,
    setQuizCategory: PropTypes.func.isRequired,
    setThumbnail: PropTypes.func.isRequired,
    thumbnail: PropTypes.objectOf(PropTypes.func),
}

Details.defaultProps = {
    thumbnail: null,
}
