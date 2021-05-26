import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    background: white;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.2);
`

const Image = styled.img`
    height: 100%;
    aspect-ratio: 16/9;
    background: red;
`

const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 16px;
    gap: 8px;
    @media (max-width: 1080px) {
        padding: 8px 16px;
    }
`

const DeleteButton = styled.button`
    height: 100%;
    aspect-ratio: 1/1;
    border: none;
    background: none;
    transition: 0.2s;
    @media (max-width: 720px) {
        display: none;
    }
    cursor: pointer;

    &:hover {
        background: lightgrey;
    }

    img {
        height: 60%;
    }
`

const Title = styled.h1`
    font-size: 18px;
    margin: 0;
    @media (max-width: 1080px) {
        font-size: 12px;
        align-self: flex-start;
    }
`

const Detail = styled.h2`
    font-size: 12px;
    min-width: 48px;
    text-align: right;
    @media (max-width: 1080px) {
        font-size: 9px;
        align-self: flex-end;
    }
`

export { Wrapper, Image, Info, DeleteButton, Title, Detail }
