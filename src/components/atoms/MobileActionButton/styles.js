import styled from 'styled-components'

const Wrapper = styled.button`
    height: 100%;
    aspect-ratio: 1/1;
    margin: 0 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    text-decoration: none;
    color: black;
    img {
        height: 50%;
    }
    background: none;
    border: none;
`

const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 700;
`

export { Wrapper, Label }
