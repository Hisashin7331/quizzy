import styled from 'styled-components'

const Tiles = styled.div`
    width: 100%;
    height: calc(100% - 64px);
    border-radius: 16px;
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
`

const LoadMoreButton = styled.button`
    width: 256px;
    height: 64px;
    position: absolute;
    bottom: 0;
    border-radius: 32px;
    border: none;
    background: none;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    * {
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
    }
`

export { Tiles, LoadMoreButton }
