import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    background: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.2);
    background: #121212;
    color: white;
    position: relative;
    height: 96px;
    padding: 16px;
    box-sizing: border-box;
`

const Name = styled.h4`
    margin: 0;
`

const Value = styled.h1`
    font-size: 32px;
    margin: 0;
`

export { Wrapper, Name, Value }
