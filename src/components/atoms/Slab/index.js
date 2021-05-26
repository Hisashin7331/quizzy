import React from 'react'
import PropTypes from 'prop-types'
import { config } from 'config'
import { deleteQuiz } from 'api/quizzes'

import del from 'assets/symbolic/delete.svg'

import {
    Wrapper,
    Image,
    Info,
    DeleteButton,
    Title,
    Detail,
} from './styles'

const Slab = ({ id, thumbnail, name, views }) => {
    return (
        <Wrapper>
            <Image
                src={
                    thumbnail &&
                    `${config.apiURL}/images?image=${thumbnail}`
                }
            />
            <Info>
                <Title>{name}</Title>
                <Detail>views: {views}</Detail>
            </Info>
            <DeleteButton onClick={() => deleteQuiz(id)}>
                <img src={del} alt='Delete' />
            </DeleteButton>
        </Wrapper>
    )
}

export default Slab

Slab.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    views: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    id: PropTypes.string.isRequired,
}
