import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchLocal } from 'api/user'

import Menu from 'components/atoms/Menu'

import browse from 'assets/icons/browse.svg'
import create from 'assets/icons/create.svg'

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

const Navbar = () => {
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

export default Navbar
