import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Number, Description } from './styles'

const Numbers = ({ number, description }) => {
    return (
        <Wrapper>
            <Number>{number}</Number>
            <Description>{description}</Description>
        </Wrapper>
    )
}

export default Numbers

Numbers.propTypes = {
    number: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
}
