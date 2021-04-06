import React from 'react'

import { Styled, Description, Title, Details, Detail } from './styles'

const Tile = () => {
    return (
        <Styled>
            <Description>
                <Title>Javascript for beginners</Title>
                <Details>
                    <Detail>Created by: Wojtek</Detail>
                    <Detail>2137 views</Detail>
                </Details>
            </Description>
        </Styled>
    )
}

export default Tile
