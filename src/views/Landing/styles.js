import styled from 'styled-components'

const Content = styled.div`
    width: calc(90% - 128px);
    height: 95%;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 16px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(auto-fit, 384px);
`

export { Content }
