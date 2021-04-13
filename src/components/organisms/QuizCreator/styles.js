import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 4%;
    grid-template-columns: repeat(2, 49%);
    justify-content: center;
    align-content: flex-start;
`

const Section = styled.section`
    width: 100%;
    background: #121212;
    border-radius: 32px;
    padding: 16px;
    height: 300px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;
    flex-shrink: 0;
`

const MoreButton = styled.button.attrs({
    type: 'button',
})`
    width: 100%;
    height: 256px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 32px;
    background: #232529;
    padding: 32px;
    box-sizing: border-box;
    border: none;
    font-size: 256px;
    color: rgb(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    cursor: pointer;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.5);
`

export { Wrapper, Section, MoreButton }
