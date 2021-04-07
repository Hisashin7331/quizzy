import React from 'react'
import PropTypes from 'prop-types'

import { Styled, Description, Title, Details, Detail } from './styles'

const Tile = ({ name, author, views }) => {
    return (
        <Styled>
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
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
}
