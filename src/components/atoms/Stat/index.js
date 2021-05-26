import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Name, Value } from './styles'

const Stat = ({ name, value }) => {
    return (
        <Wrapper>
            <Value>{value}</Value>
            <Name>{name}</Name>
        </Wrapper>
    )
}

export default Stat

Stat.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
}
