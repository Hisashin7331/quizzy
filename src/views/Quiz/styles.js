import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    width: 1080px;
    box-sizing: border-box;
    display: flex;
    position: relative;
`

const Column = styled.div`
    width: ${props => (props.wide ? 70 : 30)}%;
    position: ${props => !props.wide && 'sticky'};
    margin: 0 8px;
    ${({ wide }) =>
        !wide &&
        css`
            align-self: flex-start;
            position: sticky;
            top: 72px;
        `}

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    ${props =>
        props.errors &&
        css`
            position: absolute;
            top: 0;
            transform: translateX(-110%);
        `}
`

const Image = styled.img.attrs({ alt: 'Quiz image' })`
    width: 100%;
    aspect-ratio: 16 / 9;
`

const NumbersWrapper = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Info = styled.div`
    width: 100%;
    height: 256px;
    background: white;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    justify-content: space-between;
`

const TakeButton = styled.button`
    width: 196px;
    height: 48px;
    border: none;
    margin: 8px 0;
    background: slateblue;
    color: white;
    align-self: flex-end;
    font-size: 20px;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.2);
    text-decoration: none;
    cursor: pointer;
`

const QuizName = styled.h1`
    font-size: 32px;
    margin: 0;
`

const QuizAuthor = styled.h3`
    font-size: 16px;
    font-weight: 500;
`

const Category = styled.div`
    height: 24px;
    width: auto;
    padding: 8px;
    border-radius: 64px;
    align-self: flex-end;
`

export {
    Wrapper,
    Column,
    Image,
    NumbersWrapper,
    Info,
    TakeButton,
    QuizName,
    QuizAuthor,
    Category,
}
