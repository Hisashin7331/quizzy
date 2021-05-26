import styled from 'styled-components'

const Styled = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Avatar = styled.img`
    width: 80%;
    border-radius: 50%;
    aspect-ratio: 1/1;
    margin-bottom: 16px;
`

const Username = styled.h1`
    font-size: 20px;
    margin-bottom: 0;
`

const Email = styled.h3`
    font-size: 12px;
    color: #9f9f9f;
`

export { Styled, Avatar, Username, Email }
