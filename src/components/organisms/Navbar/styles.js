import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const Bar = styled.nav`
    width: 100vw;
    height: 64px;
    z-index: 9999;
    background: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.3);
    padding: 12px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
`

const Navigation = styled.div`
    display: flex;
    color: white;
    align-items: center;
    gap: 16px;
    @media screen and (max-width: 1023px) {
        display: none;
    }
`

const NavigationButton = styled(NavLink)`
    height: 96px;
    padding: 12px;
    box-sizing: border-box;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #9f9f9f;
    &.active {
        color: white;
    }
`

const NavigationButtonIcon = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 12px;
`

const NavigationButtonText = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`

const Logo = styled(NavLink)`
    font-family: 'Dela Gothic One', sans-serif;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0;
    text-decoration: none;
    z-index: 9999999999999;
`

const Wrapper = styled.div`
    height: 100%;
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 1081px) and (max-width: 1440px) {
        width: 1080px;
    }
    @media screen and (max-width: 1080px) {
        width: 100%;
    }
`

const Hamburger = styled.button`
    width: 32px;
    height: 32px;
    background: none;
    @media (min-width: 1024px) {
        display: none;
    }
    display: flex;
    align-items: center;
    border: none;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    z-index: 9999999999999;
    & > span {
        background: white;
        border-radius: 64px;
        height: 4px;
        width: 32px;
        padding: 0;
        margin: 0;
        transition: 0.5s;
        transform-origin: 0 0;
    }

    ${props =>
        props.isActive &&
        css`
            & > span:nth-child(1) {
                transform: rotate(45deg) translate(1px, -2px);
            }

            & > span:nth-child(2) {
                transform: scaleX(0);
            }

            & > span:nth-child(3) {
                transform: rotate(-45deg) translate(-2px, 0);
            }
        `}
`

export {
    Bar,
    Navigation,
    NavigationButton,
    NavigationButtonIcon,
    NavigationButtonText,
    Logo,
    Wrapper,
    Hamburger,
}
