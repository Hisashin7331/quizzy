import styled from 'styled-components'

const Styled = styled.div`
    width: 97%;
    height: 97%;
    background: red;
    border-radius: 16px;
    position: relative;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.07);
`

const Description = styled.div`
    height: 35%;
    width: 100%;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    padding: 12px;
    background: #ffffff;
    border-radius: 0 0 14px 14px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.h1`
    font-size: 18px;
    margin: 0;
`

const Details = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Detail = styled.h2`
    font-size: 12px;
    margin: 0 0 4px 0;
`

export { Styled, Description, Title, Details, Detail }
