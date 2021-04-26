import styled from 'styled-components'

const Wrapper = styled.div`
    width: 32%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    margin-top: 16px;
    box-shadow: 0 0 16px 1px rgb(0, 0, 0, 0.2);
`

const Number = styled.h1`
    margin: 0;
    font-size: 32px;
    font-family: 'Roboto';
`

const Description = styled.h2`
    margin: 0;
    font-size: 12px;
    font-family: 'Roboto';
`

export { Wrapper, Number, Description }
