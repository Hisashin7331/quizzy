import styled, { css } from 'styled-components'

const Wrapper = styled.div`
    width: 1080px;

    box-sizing: border-box;
    display: flex;
    position: relative;
    @media (max-width: 1079px) {
        width: 640px;
        align-items: center;
        flex-direction: column;
    }
    @media (max-width: 700) {
        width: 100%;
    }
    @media (min-width: 1279px) {
        * {
            margin: 0;
        }
    }
    @media (max-height: 900px) {
        height: 100%;
    }
`

const Column = styled.div`
    width: ${props => (props.wide ? 70 : 30)}%;
    position: ${props => !props.wide && 'sticky'};
    margin: 0 8px;
    ${props =>
        !props.wide &&
        css`
            align-self: flex-start;
            position: sticky;
            top: 72px;
            @media (max-width: 1279px) {
                display: none;
            }
        `}
    box-sizing: border-box;
    flex-shrink: 0;
    ${props =>
        props.wide &&
        css`
            position: relative;
            @media (max-width: 1279px) {
                width: 100%;
                margin: 0;
            }
            @media (max-height: 1279px) {
                height: 100%;
            }
        `}
`

const Mobile = styled.div`
    @media (min-width: 1279px) {
        display: none;
    }
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
    min-height: 256px;
    background: white;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    @media (max-height: 1279px) {
        box-shadow: none;
    }
    position: relative;
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
    @media (max-width: 900px) {
        width: 100%;
        margin: 0;
        box-shadow: none;
        position: absolute;
        bottom: 0;
        height: 48px;
    }
`

const QuizName = styled.h1`
    font-size: 32px;
    margin: 0;
`

const QuizAuthor = styled.h3`
    font-size: 16px;
    font-weight: 500;
    position: absolute;
    left: 16px;
    bottom: 16px;
`

const Category = styled.div`
    height: 24px;
    width: auto;
    padding: 8px;
    border-radius: 64px;
    align-self: flex-end;
    @media (max-width: 900px) {
        position: absolute;
        right: 16px;
        bottom: 16px;
    }
`

export {
    Mobile,
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
