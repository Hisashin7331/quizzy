/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

import Heading from 'components/atoms/Heading'
import Tile from 'components/atoms/Tile'
import MoreTile from 'components/atoms/Tile/MoreTile'

import arrowForward from 'assets/navigation/arrow_forward.svg'
import arrowBack from 'assets/navigation/arrow_back.svg'

import {
    Content,
    Tiles,
    Wrapper,
    ControlButton,
    Slider,
} from './styles'

const Section = ({ header, apiCall, buttonPath }) => {
    const [isFetching, setIsFetching] = useState(true)
    const [quizzes, setQuizzes] = useState([])
    const [carouselPage, setCarouselPage] = useState(0)

    useEffect(() => {
        apiCall(0, 11).then(data => {
            if (data.length > 0) {
                setQuizzes(data)
                setIsFetching(false)
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
            <Slider>
                {isFetching ? (
                    <Loader
                        style={{ margin: '96px' }}
                        type='TailSpin'
                        color='#00BFFF'
                        height={32}
                        width={32}
                    />
                ) : (
                    <>
                        {carouselPage > 0 ? (
                            <ControlButton onClick={prevSlide}>
                                <img
                                    src={arrowBack}
                                    alt='control_back'
                                />
                            </ControlButton>
                        ) : (
                            <span className='span-empty' />
                        )}
                        <Tiles>
                            <Wrapper carouselPage={carouselPage}>
                                {quizzes.map(quiz => (
                                    <Tile
                                        key={quiz._id}
                                        id={quiz._id}
                                        name={quiz.name}
                                        author={quiz.author}
                                        views={quiz.views}
                                        thumbnail={quiz.thumbnail}
                                    />
                                ))}
                                <MoreTile to={buttonPath} />
                            </Wrapper>
                        </Tiles>
                        {carouselPage < 2 ? (
                            <ControlButton onClick={nextSlide}>
                                <img
                                    src={arrowForward}
                                    alt='control_forward'
                                />
                            </ControlButton>
                        ) : (
                            <span className='span-empty' />
                        )}
                    </>
                )}
            </Slider>
        </Content>
    )
}

export default Section

Section.propTypes = {
    header: PropTypes.string.isRequired,
    apiCall: PropTypes.func.isRequired,
    buttonPath: PropTypes.string.isRequired,
}
