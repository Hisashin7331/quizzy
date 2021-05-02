import React from 'react'
import { connect } from 'react-redux'
import { config } from 'config'
import PropTypes from 'prop-types'
// import { logoutUser } from 'api/user'

// import logout from 'assets/icons/logout.svg'

import { Wrapper, Avatar, Username, AccountButton } from './styles'

const AccountTab = ({ username, avatar, mobile }) => {
    if (username)
        return (
            <Wrapper mobile={mobile}>
                <Avatar
                    src={`${config.apiURL}/images?image=${avatar}`}
                    alt={`${username}'s avatar`}
                />
                <Username>{username}</Username>
                <AccountButton>Account</AccountButton>
            </Wrapper>
        )
    return null
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
    mobile: PropTypes.bool,
}

AccountTab.defaultProps = {
    username: '',
    avatar: '',
    mobile: false,
}
