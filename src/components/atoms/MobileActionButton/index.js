import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Wrapper, Label } from './styles'

const MobileActionButton = ({ action, to, label, icon }) => {
    return (
        <Wrapper
            as={action === 'link' && Link}
            to={action === 'link' && to}
        >
            <img src={icon} alt={`${label} button`} />
            <Label>{label}</Label>
        </Wrapper>
    )
}

export default MobileActionButton

MobileActionButton.propTypes = {
    action: PropTypes.oneOf(['link', 'action']).isRequired,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    icon: PropTypes.string.isRequired,
}

MobileActionButton.defaultProps = {
    to: null,
    label: null,
}
