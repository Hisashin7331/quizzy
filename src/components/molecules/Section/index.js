/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Heading from 'components/atoms/Heading'
import Tile from 'components/atoms/Tile'
import MoreTile from 'components/atoms/Tile/MoreTile'

import arrowForward from 'assets/navigation/arrow_forward.svg'
import arrowBack from 'assets/navigation/arrow_back.svg'

import { Content, Tiles, Wrapper, ControlButton } from './styles'

const Section = ({ header, apiCall, buttonPath }) => {
    const [quizzes, setQuizzes] = useState([])
    const [carouselPage, setCarouselPage] = useState(0)

    useEffect(() => {
        apiCall(0, 11).then(data => {
            if (data.length > 0) {
                setQuizzes(data)
            }
        })
    }, [])

    const nextSlide = () => {
        if (carouselPage < 2) {
            setCarouselPage(carouselPage + 1)
        }
    }

    const prevSlide = () => {
        if (carouselPage < 1) {
            setCarouselPage(0)
        } else {
            setCarouselPage(carouselPage - 1)
        }
    }

    return (
        <Content>
            <Heading header={header} />
            {carouselPage > 0 && (
                <ControlButton onClick={prevSlide} left>
                    <img src={arrowBack} alt='control_back' />
                </ControlButton>
            )}
            <Tiles>
                <Wrapper carouselPage={carouselPage}>
                    {quizzes.map(quiz => (
                        <Tile
                            key={quiz._id}
                            name={quiz.name}
                            author={quiz.author}
                            views={quiz.views}
                        />
                    ))}
                    <MoreTile to={buttonPath} />
                </Wrapper>
            </Tiles>
            {carouselPage < 2 && (
                <ControlButton onClick={nextSlide} right>
                    <img src={arrowForward} alt='control_forward' />
                </ControlButton>
            )}
        </Content>
    )
}

export default Section

Section.propTypes = {
    header: PropTypes.string.isRequired,
    apiCall: PropTypes.func.isRequired,
    buttonPath: PropTypes.string.isRequired,
}
