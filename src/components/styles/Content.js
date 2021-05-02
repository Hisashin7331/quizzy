import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Styled = styled.div`
    width: 1080px;
    min-height: 100%;
    box-sizing: border-box;
    margin-top: 72px;
    display: flex;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 1279px) {
        width: 100vw;
    }
`

const Wrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    ${props =>
        props.center &&
        css`
            align-items: center;
            justify-content: center;
        `}
`

const Content = ({ children, center }) => {
    return (
        <Styled>
            <Wrapper center={center}>{children}</Wrapper>
        </Styled>
    )
}

export default Content

Content.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    center: PropTypes.bool,
}

Content.defaultProps = {
    center: false,
}
