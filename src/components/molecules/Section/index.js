import React from 'react'
import PropTypes from 'prop-types'

import Heading from 'components/atoms/Heading'
import Tile from 'components/atoms/Tile'

import { Content, Tiles } from './styles'

const Section = ({ header }) => {
    return (
        <Content>
            <Heading header={header} />
            <Tiles>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </Tiles>
        </Content>
    )
}

export default Section

Section.propTypes = {
    header: PropTypes.string.isRequired,
}
