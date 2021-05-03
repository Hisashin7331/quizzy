import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Content from 'components/styles/Content'
import { Wrapper } from './styles'

const E404 = () => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 2500)
    }, [])

    return (
        <Content>
            <Wrapper>
                <h1>( ͠° ͟ʖ ͡°)</h1>
                <h2>
                    Page not found, you will be redirected to main
                    page
                </h2>
                <h3>ERR_404_PAGE_NOT_FOUND</h3>
            </Wrapper>
        </Content>
    )
}

export default E404
