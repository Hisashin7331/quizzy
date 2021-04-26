import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchLocal } from 'api/user'

import browse from 'assets/icons/browse.svg'
import foryou from 'assets/icons/foryou.svg'
import create from 'assets/icons/create.svg'
import badge from 'assets/icons/badge.svg'
import recent from 'assets/icons/recent.svg'

import AccountTab from 'components/atoms/AccountTab'

import {
    Wrapper,
    Bar,
    Navigation,
    NavigationButton,
    NavigationButtonIcon,
    NavigationButtonText,
    Logo,
} from './styles'

const Navbar = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchLocal(dispatch)
    }, [])
    const navElements = [
        {
            name: 'Browse',
            to: '/',
            icon: browse,
        },
        {
            name: 'For You',
            to: '/foryou',
            icon: foryou,
        },
        {
            name: 'Recent',
            to: '/recent',
            icon: recent,
        },
        {
            name: 'Popular',
            to: '/popular',
            icon: badge,
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
                <Logo to='/'>Quizzy</Logo>
                <Navigation>
                    {navElements.map(item => {
                        return (
                            <NavigationButton
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
                    <AccountTab />
                </Navigation>
            </Wrapper>
        </Bar>
    )
}

export default Navbar
