import styled from 'styled-components'

const Thumbnail = styled.div`
    height: 100%;
    aspect-ratio: 16 / 9;
    background: lightgrey;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover label {
        opacity: 0.6;
    }
    cursor: pointer;
`

const Preview = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: auto;
    object-fit: contain;
    object-position: center;
    z-index: 1;
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

export { Thumbnail, FileInput, FileLabel, Preview, Placeholder }
