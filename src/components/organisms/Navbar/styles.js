import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Bar = styled.nav`
    width: 100vw;
    height: 64px;
    z-index: 9999999999;
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
`

const Wrapper = styled.div`
    height: 100%;
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export {
    Bar,
    Navigation,
    NavigationButton,
    NavigationButtonIcon,
    NavigationButtonText,
    Logo,
    Wrapper,
}
