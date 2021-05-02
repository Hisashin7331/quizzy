import styled from 'styled-components'

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.1);
`

const NameInput = styled.textarea.attrs({
    maxLength: '42',
    placeholder: 'Your quiz name...',
})`
    resize: none;
    width: 100%;
    height: auto;
    background: none;
    border: none;
    margin: 0 8px;
    padding: 16px;
    box-sizing: border-box;
    font-size: 24px;
    outline: none;
    color: black;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
    @media (max-width: 400px) {
        font-size: 16px;
    }
`

const TagsInput = styled.input.attrs({
    type: 'text',
    placeholder: 'Tags separated with comma',
})`
    outline: none;
    width: 100%;
    height: 40px;
    border: none;
    background: none;
    font-size: 20px;
    outline: none;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    padding: 16px;
    color: black;
    background: #e9e9e9;
`

const Top = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    b,
    select {
        height: 32px;
        cursor: pointer;
        border: none;
        @media (max-width: 400px) {
            font-size: 12px;
        }
        outline: 0;
    }
    b {
        margin-left: 24px;
    }
    @media (max-width: 796px) {
        flex-direction: column;

        b {
            margin-left: 0;
        }
    }
    & > * {
        margin: 8px;
    }
`

export { Top, Content, NameInput, TagsInput }
