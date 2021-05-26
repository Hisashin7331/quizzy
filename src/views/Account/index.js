import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Dashboard from 'views/Account/pages/Dashboard'
import Settings from 'views/Account/pages/Settings'
import Support from 'views/Account/pages/Support'
import PrivateRoute from 'components/atoms/PrivateRoute'
import UserInfo from 'components/organisms/UserInfo'
import MobileActionButton from 'components/atoms/MobileActionButton'

import person from 'assets/symbolic/person-outline.svg'
import support from 'assets/symbolic/support.svg'
import settings from 'assets/symbolic/settings.svg'

import Content from 'components/styles/Content'
import { Column } from 'components/styles/Column'

import { Button, Wrapper, MobileButtonsWrapper } from './styles'

const Account = ({ match, avatar, username, email }) => {
    return (
        <Content>
            <Column>
                <Wrapper>
                    <UserInfo
                        avatarUrl={avatar}
                        username={username}
                        email={email}
                    />
                    <Button as={NavLink} exact to='/account'>
                        Dashboard
                    </Button>
                    <Button as={NavLink} exact to='/account/settings'>
                        Settings
                    </Button>
                    <Button as={NavLink} exact to='/account/support'>
                        Support
                    </Button>
                </Wrapper>
            </Column>
            <Column wide>
                <PrivateRoute
                    exact
                    path={`${match.path}`}
                    component={Dashboard}
                />
                <PrivateRoute
                    exact
                    path={`${match.path}/settings`}
                    component={Settings}
                />
                <PrivateRoute
                    exact
                    path={`${match.path}/support`}
                    component={Support}
                />
            </Column>
            <MobileButtonsWrapper>
                <MobileActionButton
                    action='link'
                    to='/account'
                    label='Dashboard'
                    icon={person}
                />
                <MobileActionButton
                    action='link'
                    to='/account/settings'
                    label='Settings'
                    icon={settings}
                />
                <MobileActionButton
                    action='link'
                    to='/account/support'
                    label='Support'
                    icon={support}
                />
            </MobileButtonsWrapper>
        </Content>
    )
}

const mapStateToProps = ({ user }) =>
    user && {
        avatar: user.avatar,
        username: user.username,
        email: user.email,
    }

export default connect(mapStateToProps)(Account)

Account.propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
}

Account.defaultProps = {
    avatar: '',
    username: '...',
    email: 'Loading...',
}
