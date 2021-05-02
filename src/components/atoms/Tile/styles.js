import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Styled = styled(Link)`
    text-decoration: none;
    width: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    color: black;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.1);
`

const Description = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    background: #ffffff;
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
    color: black;
`

const Text = styled.h1`
    font-size: 32px;
    color: black;
    font-family: 'Roboto', sans-serif;
    position: absolute;
    bottom: 8px;
`

const MoreButton = styled(Link)`
    flex-shrink: 0;
    width: 24%;
    margin: 0.5%;
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
    height: 100%;
`

const Image = styled.img`
    width: 100%;
    aspect-ratio: 16 / 9;
    background: red;
`

export {
    Styled,
    Description,
    Title,
    Details,
    Detail,
    Text,
    MoreButton,
    Image,
}
