import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, connect } from 'react-redux'
import { fetchLocal, logoutUser } from 'api/user'

import Menu from 'components/atoms/Menu'

import browse from 'assets/icons/browse.svg'
import create from 'assets/icons/create.svg'
import login from 'assets/icons/login.svg'

import {
    Wrapper,
    Bar,
    Navigation,
    NavigationButton,
    LoginButton,
    NavigationButtonIcon,
    NavigationButtonText,
    Logo,
    Hamburger,
} from './styles'

const Navbar = ({ isLoggedin }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchLocal(dispatch)
    }, [])
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
                    {!isLoggedin ? (
                        <NavigationButton exact to='/login'>
                            <NavigationButtonIcon src={login} />
                            <NavigationButtonText>
                                Login
                            </NavigationButtonText>
                        </NavigationButton>
                    ) : (
                        <LoginButton
                            onClick={() => logoutUser(dispatch)}
                        >
                            <NavigationButtonIcon src={login} />
                            <NavigationButtonText>
                                Logout
                            </NavigationButtonText>
                        </LoginButton>
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

const mapStateToProps = state => ({
    isLoggedin: state.user,
})

export default connect(mapStateToProps)(Navbar)

Navbar.propTypes = {
    isLoggedin: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ]),
}

Navbar.defaultProps = {
    isLoggedin: null,
}
