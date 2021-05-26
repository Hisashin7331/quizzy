/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { StyledMenu, Link } from './styles'
import AccountTab from '../../atoms/AccountTab'

const Menu = ({ isActive, user }) => {
    return (
        <StyledMenu isActive={isActive}>
            {user ? (
                <AccountTab mobile />
            ) : (
                <Link style={{ marginTop: '72px' }} to='/login'>
                    Login
                </Link>
            )}
            <Link to='/browse'>Browse</Link>
            <Link to='/create'>New Quiz</Link>
            {user && <Link to='/account'>Account</Link>}
        </StyledMenu>
    )
}

const mapStateToProps = ({ user }) =>
    user && {
        user: user.username,
    }

export default connect(mapStateToProps)(Menu)

Menu.propTypes = {
    isActive: PropTypes.bool,
    user: PropTypes.any,
}

Menu.defaultProps = {
    isActive: false,
    user: null,
}
