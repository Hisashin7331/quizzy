import styled, { css } from 'styled-components'

const Image = styled.div`
    height: 100%;
    aspect-ratio: 16 / 9;
    background: lightgrey url(${props => props.image});
    background-size: 100%;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover label {
        opacity: 0.6;
    }
    cursor: pointer;
    ${props =>
        props.rounded &&
        css`
            height: 128px;
            width: 128px;
            border-radius: 50%;
            margin-bottom: 32px;
            margin-top: -32px;
            h3 {
                font-size: 15px;
            }
        `}
`

const FileInput = styled.input.attrs({
    type: 'file',
    name: 'file',
    enctype: 'multipart/form-data',
})`
    display: none;
`

const FileLabel = styled.label`
    height: 64px;
    width: 64px;
    border-radius: 50%;
    opacity: 0;

    background: lightgrey;
    transition: 0.3s;

    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 50%;
    }
    cursor: pointer;
`

const Placeholder = styled.h3`
    font-size: 32px;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 50%;
    top: 50%;
    opacity: 0.2;
    transform: translate(-50%, -50%);
`

export { Image, FileInput, FileLabel, Placeholder }
