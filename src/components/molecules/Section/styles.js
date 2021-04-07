/* eslint-disable no-use-before-define */
import styled from 'styled-components'

const Content = styled.section`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 16px;
    border-radius: 16px;
`

const Tiles = styled.span`
    width: 100%;
    height: calc(100% - 64px);
    display: flex;
    overflow: hidden;
`

const Container = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    transition: 1s;
    transform: ${props =>
        props.carouselPage &&
        `translateX(-${props.carouselPage * 100}%)`};
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

export { Content, Tiles, Container }
