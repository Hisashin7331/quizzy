import styled from 'styled-components'

const Tiles = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 48%);
    grid-gap: 16px;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 720px) {
        grid-template-columns: 90%;
    }
`

const LoadMoreButton = styled.button`
    width: 100%;
    height: 64px;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    * {
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
    }
`

export { Tiles, LoadMoreButton }
