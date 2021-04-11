import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = styled.div`
    width: 95%;
    height: 95%;
    height: 95%;
    border-radius: 16px;
    background: red;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.07);
    position: relative;
    cursor: pointer;
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

const Text = styled.h1`
    font-size: 32px;
    color: black;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    bottom: 8px;
`

const MoreButton = styled(Link)`
    width: 95%;
    height: 95%;
    height: 95%;
    border-radius: 16px;
    background: none;
    border: none;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.07),
        inset 0 0 16px 1px rgb(0, 0, 0, 0.07);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 35%;
    }
    cursor: pointer;
    outline: none;
`

export {
    Styled,
    Description,
    Title,
    Details,
    Detail,
    Text,
    MoreButton,
}
