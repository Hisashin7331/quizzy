import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;
    background: white;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.15);
    box-sizing: border-box;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${props =>
        props.mobile &&
        css`
            background: none;
            margin-top: 64px;
            max-width: 256px;
            box-shadow: none;
            color: white;
        `}
`

const Avatar = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
`

const Username = styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    margin-top: 16px;
`

const AccountButton = styled(Link).attrs({
    to: 'account',
})`
    width: 100%;
    background: #17a2b8;
    text-decoration: none;
    height: 40px;
    border-radius: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 16px;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.2);
`

export { Avatar, Wrapper, Username, AccountButton }
