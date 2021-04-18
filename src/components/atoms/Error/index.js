import React from 'react'
import PropTypes from 'prop-types'

import { Styled } from './styles'

const Error = ({ message }) => {
    return <Styled>{message}</Styled>
}

export default Error

Error.propTypes = {
    message: PropTypes.string.isRequired,
}
