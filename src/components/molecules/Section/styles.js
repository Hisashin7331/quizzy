import styled from 'styled-components'

const Content = styled.section`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 16px;
    border-radius: 16px;
`

const Tiles = styled.span`
    width: 100%;
    height: calc(100% - 64px);
    display: grid;
    grid-template-columns: repeat(auto-fit, 25%);
    grid-template-rows: 100%;
`

export { Content, Tiles }
