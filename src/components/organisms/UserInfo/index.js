import React from 'react'
import PropTypes from 'prop-types'
import { config } from 'config'

import { Styled, Avatar, Username, Email } from './styles'

const UserInfo = ({ avatarUrl, username, email }) => {
    return (
        <Styled>
            <Avatar
                src={`${config.apiURL}/images?image=${avatarUrl}`}
                alt={`${username}'s avatar`}
            />{' '}
            <Username>Hello, {username}</Username>
            <Email>{email}</Email>
        </Styled>
    )
}

export default UserInfo

UserInfo.propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}
