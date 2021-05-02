import React from 'react'
import PropTypes from 'prop-types'

import { StyledMenu } from './styles'
import AccountTab from '../AccountTab'

const Menu = ({ isActive }) => {
    return (
        <StyledMenu isActive={isActive}>
            <AccountTab mobile />
        </StyledMenu>
    )
}

export default Menu

Menu.propTypes = {
    isActive: PropTypes.bool,
}

Menu.defaultProps = {
    isActive: false,
}
