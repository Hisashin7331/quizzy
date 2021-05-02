import styled from 'styled-components'

const Section = styled.section`
    width: 100%;
    background: #121212;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    flex-shrink: 0;
    background: white;
    box-sizing: border-box;
`

const ActionButton = styled.button.attrs({
    type: 'button',
})`
    width: 100%;
    height: 64px;

    box-sizing: border-box;
    border: none;
    font-size: 16px;
    color: white;
    display: flex;
    margin-bottom: 4px;
    align-items: center;
    justify-content: center;
    outline: 0;
    cursor: pointer;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.1);
    text-decoration: none;
    background: #${props => {
            switch (props.action) {
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

const MobileButtonsWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    @media (min-width: 1280px) {
        display: none;
    }
    display: flex;
    margin: 0;
    background: white;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.4);
    height: 64px;
    justify-content: center;
`

export { Section, ActionButton, MobileButtonsWrapper }
