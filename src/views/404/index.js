import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import Content from 'components/styles/Content'
import { Wrapper } from './styles'

const E404 = ({ message, error }) => {
    const history = useHistory()

    useEffect(() => {
        if (error === 'ERR_404_PAGE_NOT_FOUND') {
            setTimeout(() => {
                history.push('/')
            }, 2500)
        }
        if (error === 'ERR_PERMISSION_DENIED') {
            setTimeout(() => {
                history.push('/login')
            }, 2500)
        }
    }, [])

    return (
        <Content>
            <Wrapper>
                <h1>( ͠° ͟ʖ ͡°)</h1>
                <h2>{message}</h2>
                <h3>{error}</h3>
            </Wrapper>
        </Content>
    )
}

export default E404

E404.propTypes = {
    message: PropTypes.string,
    error: PropTypes.string,
}

E404.defaultProps = {
    message: 'Page not found, you will be redirected to main page',
    error: 'ERR_404_PAGE_NOT_FOUND',
}
