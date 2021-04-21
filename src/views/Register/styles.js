import styled, { css } from 'styled-components'

const FormStyled = styled.form`
    width: 1024px;
    height: 640px;
    background: white;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.3);
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`

const Side = styled.div`
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    ${props =>
        props.form &&
        css`
            padding: 48px 64px;
            display: flex;
            align-items: center;
            flex-direction: column;
        `}
    & > span {
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.9;
        z-index: 2;
        position: absolute;
    }
`

const Background = styled.img`
    width: 100%;
    object-fit: cover;
    height: 100%;
    position: absolute;
`

const Frame = styled.div`
    width: 90%;
    height: 90%;
    background: none;
    border: 2px solid white;
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 64px;
    text-align: center;
    color: white;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    transform: translate(-50%, -50%);
`

const Heading = styled.h1`
    font-size: 48px;
    margin: 16px 0 48px 0;
`

const Button = styled.button`
    width: 95%;
    margin: 0 2.5%;
    height: 48px;
    box-sizing: border-box;
    border-radius: 64px;
    border: none;
    background: ${props => (props.prev ? '#17a2b8' : '#007bff')};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    transition: 0.5s;
    box-shadow: 0 0 16px 1px rgb(0 0 0 / 10%);
    cursor: pointer;
    color: white;
    font-weight: 700;
    &:disabled {
        background: rgb(0, 0, 0, 0.1);
        cursor: default;
        color: white;
    }
    outline: 0;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Categories = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 64px;
`

const Category = styled.label`
    height: 32px;
    width: auto;
    margin: 4px;

    input:checked + span {
        background: #28a745;
    }

    cursor: pointer;
`

const Radio = styled.input.attrs({
    type: 'checkbox',
})`
    display: none;
    outline: none;
`

const Label = styled.span`
    border-radius: 64px;
    height: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    background: lightgrey;
    box-sizing: border-box;
    font-weight: 700;
`

export {
    Wrapper,
    FormStyled,
    Side,
    Background,
    Frame,
    Heading,
    Button,
    Categories,
    Category,
    Radio,
    Label,
}
