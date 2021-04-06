import React from 'react'
import PropTypes from 'prop-types'

import { Text } from './styles'

const Heading = ({ header }) => {
    return <Text>{header}</Text>
}

export default Heading

Heading.propTypes = {
    header: PropTypes.string.isRequired,
}
