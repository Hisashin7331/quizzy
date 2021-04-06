import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Bar = styled.nav`
    width: 300px;
    height: 95%;
    border-radius: 16px;
    background: #121212;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.3);
    position: relative;
    padding: 12px;
    box-sizing: border-box;
`

const User = styled.div`
    width: 100%;
    height: 72px;
    background: #232529;
    border-radius: 0 0 16px 16px;
    position: absolute;
    bottom: 0;
`

const Navigation = styled.div`
    margin-top: 24px;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(auto-fit, 48px);
    grid-gap: 8px;
    color: white;
`

const NavigationButton = styled(NavLink)`
    height: 100%;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    text-decoration: none;
    display: flex;
    align-items: center;
    border-radius: 12px;
    color: #9f9f9f;
    &.active {
        background: #232323;
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

const Logo = styled.h1`
    font-family: 'Dela Gothic One', sans-serif;
    font-size: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 0;
`

export {
    Bar,
    User,
    Navigation,
    NavigationButton,
    NavigationButtonIcon,
    NavigationButtonText,
    Logo,
}
