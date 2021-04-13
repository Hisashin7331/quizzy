import styled from 'styled-components'

const Content = styled.div`
    width: 65%;
    height: 100%;
    background: #232529;
    border-radius: 16px;
    padding: 16px 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const NameInput = styled.input.attrs({
    type: 'text',
})`
    width: 100%;
    height: 100px;
    border: none;
    background: none;
    font-size: 64px;
    outline: none;
    color: white;
    font-family: 'Roboto', sans-serif;
`

const TagsInput = styled.input.attrs({
    type: 'text',
})`
    outline: none;
    width: 100%;
    height: 48px;
    border: none;
    background: none;
    font-size: 32px;
    outline: none;
    color: white;
    font-family: 'Roboto', sans-serif;
`

export { Content, NameInput, TagsInput }
