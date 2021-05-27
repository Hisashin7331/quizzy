import React from 'react'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { logoutUser } from 'api/user'
import { useHistory } from 'react-router-dom'

import login from 'assets/icons/login.svg'
import logout from 'assets/icons/logout.svg'

import {
    Wrapper,
    Avatar,
    Username,
    AccountButton,
    Division,
    Button,
} from './styles'

const AccountTab = ({ username, avatar, mobile }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const redirect = () => history.push('/account')

    if (username)
        return (
            <Wrapper mobile={mobile}>
                <Division user>
                    <Avatar
                        src={avatar}
                        alt={`${username}'s avatar`}
                    />
                    <Username>{username}</Username>
                    <AccountButton>Account</AccountButton>
                </Division>
                <Division>
                    <Button onClick={redirect}>
                        <img src={login} alt='logout' />
                    </Button>
                    <Button onClick={() => logoutUser(dispatch)}>
                        <img src={logout} alt='logout' />
                    </Button>
                </Division>
            </Wrapper>
        )
    return null
}

const mapStateToProps = ({ user }) =>
    user && {
        username: user.username,
        avatar: user.avatar,
    }

export default connect(mapStateToProps)(AccountTab)

AccountTab.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    mobile: PropTypes.bool,
}

AccountTab.defaultProps = {
    username: '',
    avatar: '',
    mobile: false,
}
