import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { config } from 'config'
import PropTypes from 'prop-types'
import { logoutUser } from 'api/user'

import logout from 'assets/icons/logout.svg'

import {
    Wrapper,
    Avatar,
    Username,
    Logout,
    Login,
    UserData,
} from './styles'

const AccountTab = ({ username, avatar }) => {
    const dispatch = useDispatch()
    return (
        <Wrapper>
            {username && (
                <UserData>
                    <Avatar
                        src={`${config.apiURL}/images?image=${avatar}`}
                        alt={`${username}'s avatar`}
                    />
                    <Username>{username}</Username>
                </UserData>
            )}
            {username ? (
                <Logout onClick={() => logoutUser(dispatch)}>
                    <img src={logout} alt='logout icon' />
                </Logout>
            ) : (
                <Login>Login</Login>
            )}
        </Wrapper>
    )
}

const mapStateToProps = ({ user: { authData } }) =>
    authData && {
        username: authData.username,
        avatar: authData.avatar,
    }

export default connect(mapStateToProps)(AccountTab)

AccountTab.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
}

AccountTab.defaultProps = {
    username: '',
    avatar: '',
}
