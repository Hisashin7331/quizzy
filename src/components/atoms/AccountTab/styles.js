import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.15);
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    ${props =>
        props.mobile &&
        css`
            width: 100%;
            background: none;
            margin-top: 64px;
            box-shadow: none;
            color: white;
            height: 64px;
        `}
`

const Avatar = styled.img`
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
`

const Username = styled.h1`
    font-family: 'Roboto';
    font-size: 20px;
    margin-left: 16px;
    color: white;
`

const AccountButton = styled(Link).attrs({
    to: '/account',
})`
    width: 100%;
    background: #17a2b8;
    text-decoration: none;
    height: 40px;
    border-radius: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 16px;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.2);
    display: none;
`

const Division = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`

const Button = styled.button`
    height: 40px;
    width: 40px;
    margin-left: 8px;
    background: none;
    border: none;
    cursor: pointer;
`

export { Avatar, Wrapper, Username, AccountButton, Division, Button }
