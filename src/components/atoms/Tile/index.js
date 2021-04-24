import React from 'react'
import PropTypes from 'prop-types'
import { config } from 'config'

import {
    Styled,
    Description,
    Title,
    Details,
    Detail,
    Image,
} from './styles'

const Tile = ({ thumbnail, name, author, views, id }) => {
    return (
        <Styled to={`/quiz/${id}`}>
            <Image
                src={
                    thumbnail &&
                    `${config.apiURL}/images?image=${thumbnail}`
                }
            />
            <Description>
                <Title>{name}</Title>
                <Details>
                    <Detail>Created by: {author}</Detail>
                    <Detail>{views} views</Detail>
                </Details>
            </Description>
        </Styled>
    )
}

export default Tile

Tile.propTypes = {
    thumbnail: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
}

Tile.defaultProps = {
    thumbnail: null,
}
