/* eslint-disable no-use-before-define */
import styled, { css } from 'styled-components'

const Content = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    position: relative;
`

const Tiles = styled.span`
    width: 100%;
    height: auto;
    display: flex;
    overflow: hidden;
    position: relative;
`

const Wrapper = styled.div`
    height: inherit;
    min-width: 100%;
    transition: 1s;
    transform: ${props =>
        props.carouselPage &&
        `translateX(-${props.carouselPage * 100}%)`};
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    position: relative;
`

const ControlButton = styled.button`
    width: 48px;
    position: absolute;
    top: 50%;
    background: none;
    border: none;
    z-index: 999;
    &:focus {
        outline: none;
    }
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
    }
    ${props =>
        props.right &&
        css`
            right: -24px;
        `}
    ${props =>
        props.left &&
        css`
            left: -16px;
        `}
`

export { Content, Tiles, Wrapper, ControlButton }
