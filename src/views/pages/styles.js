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
    height: 48px;
    position: fixed;
    background: rgb(36, 160, 237);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 32px 32px 0 0;
    border: none;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.2);
    box-shadow: inset 0 0 16px 1px rgb(0, 0, 0, 0.2);
    outline: none;
    cursor: pointer;
    * {
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
    }
`

export { Tiles, LoadMoreButton }
