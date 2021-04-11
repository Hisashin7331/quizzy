import React from 'react'
import PropTypes from 'prop-types'

import arrowMore from 'assets/navigation/arrow_more.svg'

import { MoreButton, Text } from './styles'

const MoreTile = ({ to }) => {
    return (
        <MoreButton to={to}>
            <img src={arrowMore} alt='get more arrow' />
            <Text>Get more!</Text>
        </MoreButton>
    )
}

export default MoreTile

MoreTile.propTypes = {
    to: PropTypes.string.isRequired,
}
