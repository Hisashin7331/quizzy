import styled, { css } from 'styled-components'

const Section = styled.section`
    width: 100%;
    background: #121212;
    height: 256px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    flex-shrink: 0;
    background: white;
    box-sizing: border-box;
`

const Wrapper = styled.div`
    width: 1080px;
    box-sizing: border-box;
    padding: 0 32px;
    display: flex;
`

const Column = styled.div`
    width: ${props => (props.wide ? 80 : 20)}%;
    position: ${props => !props.wide && 'sticky'};
    margin: 0 8px;
    ${({ wide }) =>
        !wide &&
        css`
            align-self: flex-start;
            position: sticky;
            top: 72px;
        `}
    padding: 16px;
    box-sizing: border-box;
    flex-shrink: 0;
`

const ActionButton = styled.button.attrs({
    type: 'button',
})`
    width: 100%;
    height: 48px;

    box-sizing: border-box;
    border: none;
    font-size: 12px;
    color: white;
    display: flex;
    margin: 4px 0;
    align-items: center;
    justify-content: center;
    outline: 0;
    cursor: pointer;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.1);
    text-decoration: none;
    background: #${props => {
            switch (props.action) {
                case 'tutorial':
                    return '17a2b8'
                case 'cancel':
                    return 'dc3545'
                case 'more':
                    return '28a745'
                case 'submit':
                    return '007bff'
                default:
                    return '232529'
            }
        }};
`

export { Section, ActionButton, Wrapper, Column }
