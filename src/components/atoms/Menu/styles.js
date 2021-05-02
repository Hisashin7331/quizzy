import styled from 'styled-components'

const StyledMenu = styled.div`
    height: 100vh;
    width: 100vw;
    background: #121212;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.5s;
    transform: ${props => !props.isActive && 'translateY(-100%)'};
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export { StyledMenu }
