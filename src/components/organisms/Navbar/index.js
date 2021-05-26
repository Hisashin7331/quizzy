/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, connect } from 'react-redux'
import { fetchLocal } from 'api/user'
import { useHistory } from 'react-router-dom'

import Menu from 'components/molecules/Menu'
import AccountTab from 'components/atoms/AccountTab'

import browse from 'assets/icons/browse.svg'
import create from 'assets/icons/create.svg'
import login from 'assets/icons/login.svg'

import {
    Wrapper,
    Bar,
    Navigation,
    NavigationButton,
    NavigationButtonIcon,
    NavigationButtonText,
    Logo,
    Hamburger,
} from './styles'

const Navbar = ({ isLoggedin }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        fetchLocal(dispatch)
    }, [])

    useEffect(() => {
        return history.listen(() => setIsMenuOpened(false))
    }, [history])

    const navElements = [
        {
            name: 'Browse',
            to: '/browse',
            icon: browse,
        },
        {
            name: 'New Quiz',
            to: '/create',
            icon: create,
        },
    ]
    return (
        <Bar>
            <Wrapper>
                <Logo to='/browse'>Quizzy</Logo>
                <Navigation>
                    {navElements.map(item => {
                        return (
                            <NavigationButton
                                exact
                                key={item.to}
                                to={item.to}
                            >
                                <NavigationButtonIcon
                                    src={item.icon}
                                />
                                <NavigationButtonText>
                                    {item.name}
                                </NavigationButtonText>
                            </NavigationButton>
                        )
                    })}
                    {!isLoggedin?.something ? (
                        <NavigationButton exact to='/login'>
                            <NavigationButtonIcon src={login} />
                            <NavigationButtonText>
                                Login
                            </NavigationButtonText>
                        </NavigationButton>
                    ) : (
                        <AccountTab />
                    )}
                </Navigation>
                <Hamburger
                    isActive={isMenuOpened}
                    onClick={() => setIsMenuOpened(!isMenuOpened)}
                >
                    <span />
                    <span />
                    <span />
                </Hamburger>
            </Wrapper>
            <Menu isActive={isMenuOpened} />
        </Bar>
    )
}

const mapStateToProps = ({ user }) => ({
    isLoggedin: user.authData,
})

export default connect(mapStateToProps)(Navbar)

Navbar.propTypes = {
    isLoggedin: PropTypes.any,
}

Navbar.defaultProps = {
    isLoggedin: null,
}
