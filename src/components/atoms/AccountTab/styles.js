import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    height: 64px;
    background: #232529;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const UserData = styled.div`
    min-width: 180px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 8px;
`

const Avatar = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 50%;
`

const Username = styled.h1`
    font-family: 'Roboto';
    font-size: 16px;
    margin: 8px;
`

const Logout = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

const Login = styled(Link).attrs({ to: '/login' })`
    width: 128px;
    height: 100%;
    color: white;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
`

export { Avatar, Wrapper, Username, Logout, Login, UserData }
