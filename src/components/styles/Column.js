import styled, { css } from 'styled-components'

const Column = styled.div`
    width: ${props => (props.wide ? 80 : 20)}%;
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
        props.errors &&
        css`
            position: absolute;
            transform: translateX(-110%);
            width: 200px;
            color: white;
        `}
    & > * {
        margin-bottom: 16px;
    }
    ${props =>
        props.wide &&
        css`
            align-items: flex-start;
            position: relative;
            @media (max-width: 1279px) {
                width: 100%;
                margin: 0;
                margin-bottom: 54px;
            }
            @media (max-height: 800px) {
                min-height: 100%;
            }
        `}
    ${props =>
        props.full &&
        css`
            width: 100%;
            position: relative;
            align-items: flex-start;
            top: 0;
            @media (max-width: 1279px) {
                display: block;
                margin: 0;
                margin-bottom: 54px;
            }
            @media (max-height: 800px) {
                min-height: 100%;
            }
        `}
`

export { Column }
