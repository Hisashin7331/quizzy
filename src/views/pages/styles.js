import styled from 'styled-components'

const Content = styled.div`
    width: calc(90% - 128px);
    height: 95%;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`

const Tiles = styled.div`
    width: 100%;
    height: calc(100% - 64px);
    border-radius: 16px;
    box-sizing: border-box;
    display: grid;
    padding: 8px;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(auto-fill, 25%);
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

export { Tiles, Content, LoadMoreButton }
