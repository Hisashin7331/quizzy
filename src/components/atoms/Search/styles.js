import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.form`
    width: 100%;
    height: 48px;
    display: flex;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.1);
    align-self: flex-start;
    position: sticky;
    top: 64px;
    z-index: 99999999;
`

const Input = styled.input.attrs({
    type: 'text',
    placeholder: 'Search for quizzes',
})`
    width: calc(100% - 96px);
    border: none;
    box-sizing: border-box;
    padding: 0 16px;
    outline: none;
    font-family: 'Roboto', sans-serif;
`

const Filter = styled.button`
    width: 48px;
    height: 48px;
    background: white;
    border: none;
    cursor: pointer;
`

const Submit = styled.button.attrs({ type: 'submit' })`
    width: 48px;
    height: 48px;
    background: white;
    border: none;
    cursor: pointer;
`

const Dropdown = styled.div`
    width: 100%;
    position: absolute;
    top: 48px;
    transform: ${props =>
        props.isOpened ? 'scaleY(1)' : 'scaleY(0)'};
    transform-origin: top center;
    transition: 0.5s;
    background: white;
    z-index: 33333;
    max-height: 360px;
    overflow-y: auto;
    ul {
        list-style-type: none;
    }
    li {
        margin: 6px 0;
        button {
            background: none;
            border: none;
            margin: 0;
            padding: 0;
        }
    }
`

const StyledNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    &.active {
        font-weight: 700;
    }
`

const HRWrapper = styled.div`
    width: 100%;
    position: relative;
    height: 16px;
    display: flex;
    align-items: center;
`

const HR = styled.hr`
    width: 100%;
`

const Heading = styled.h6`
    font-size: 12px;
    margin: 0;
    padding: 0;
    position: absolute;
    background: white;
    font-weight: 500;
    left: 16px;
`

export {
    Wrapper,
    Input,
    Filter,
    Submit,
    Dropdown,
    StyledNavLink,
    HRWrapper,
    HR,
    Heading,
}
