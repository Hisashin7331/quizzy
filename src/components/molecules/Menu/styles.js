import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledMenu = styled.div`
    height: 100vh;
    width: 100vw;
    background: #121212;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.5s;
    transform: ${props => !props.isActive && 'translateY(-100%)'};
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Link = styled(NavLink)`
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    color: #9f9f9f;
    font-family: 'Roboto', sans-serif;
    margin: 16px;
    &.active {
        color: white;
        font-weight: 700;
    }
`

export { StyledMenu, Link }
