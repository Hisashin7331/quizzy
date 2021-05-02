import styled, { css } from 'styled-components'

const Column = styled.div`
    width: ${props => (props.wide ? 75 : 25)}%;
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
            top: 0;
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
            position: relative;
            @media (max-width: 1279px) {
                width: 100%;
                margin: 0;
            }
        `}
`

export { Column }
