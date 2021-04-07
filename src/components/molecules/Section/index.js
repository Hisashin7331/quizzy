/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Heading from 'components/atoms/Heading'
import Tile from 'components/atoms/Tile'

import { Content, Tiles, Container } from './styles'

const Section = ({ header, apiCall }) => {
    const [skip, setSkip] = useState(0)
    const limit = 4
    const [recentQuizes, setRecentQuizes] = useState([])
    const [carouselPage, setCarouselPage] = useState(0)
    const [isMoreItems, setIsMoreItems] = useState(true)

    useEffect(() => {
        apiCall(skip, limit).then(data => {
            if (data.length > 0) {
                setSkip(skip + limit)
                setRecentQuizes([data])
            }
        })
    }, [])

    const nextSlide = () => {
        if (isMoreItems) {
            setCarouselPage(carouselPage + 1)
            if (carouselPage === recentQuizes.length - 1) {
                apiCall(skip, limit).then(data => {
                    if (data.length > 0) {
                        setSkip(skip + limit)
                        setRecentQuizes([...recentQuizes, data])
                    }
                    if (data.length < 4) {
                        setIsMoreItems(false)
                    }
                })
            }
        }
    }

    const prevSlide = () => {
        if (carouselPage > 0) {
            setIsMoreItems(true)
            setCarouselPage(carouselPage - 1)
        }
    }

    return (
        <Content>
            <Heading header={header} />
            {console.log(recentQuizes)}
            <Tiles>
                {recentQuizes.length > 0 &&
                    recentQuizes.map(item => (
                        <Container
                            key={item._id}
                            carouselPage={carouselPage}
                        >
                            {item.map(quiz => (
                                <Tile
                                    key={quiz._id}
                                    name={quiz.name}
                                    author={quiz.author}
                                    views={quiz.views}
                                />
                            ))}
                        </Container>
                    ))}
            </Tiles>
            <button type='button' onClick={prevSlide}>
                prevSlide
            </button>
            <button type='button' onClick={nextSlide}>
                nextSlide
            </button>
        </Content>
    )
}

export default Section

Section.propTypes = {
    header: PropTypes.string.isRequired,
    apiCall: PropTypes.func.isRequired,
}
