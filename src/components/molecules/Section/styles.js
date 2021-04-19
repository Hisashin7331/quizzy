/* eslint-disable no-use-before-define */
import styled from 'styled-components'

const Content = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    background: white;
    margin-top: 16px;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.1);
`

const Tiles = styled.div`
    width: 90%;
    display: flex;
    height: 236px;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
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
    width: 5%;
    height: inherit;
    z-index: 999;
    border: none;
    &:focus {
        outline: none;
    }
    cursor: pointer;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 80%;
    }
`

const Slider = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    .span-empty {
        width: 5%;
        height: inherit;
        opacity: 0;
    }
`

export { Content, Tiles, Wrapper, ControlButton, Slider }
