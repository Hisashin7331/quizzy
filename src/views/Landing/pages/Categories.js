/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import PropTypes from 'prop-types'

import Tile from 'components/atoms/Tile'

import { getByCategory } from 'api/quizzes'

import { Tiles, LoadMoreButton } from './styles'

const Categories = ({ category }) => {
    const [quizzes, setQuizzes] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [isMore, setIsMore] = useState(true)
    const [shouldCallAPI, setshouldCallAPI] = useState(true)
    const [skip, setSkip] = useState(0)
    const limit = 16

    useEffect(() => {
        setSkip(0)
        getByCategory(category, skip, limit).then(({ data }) => {
            if (data.length > 0) {
                setIsFetching(false)
                setQuizzes(data)
                setSkip(skip + limit)
            } else {
                setIsFetching(false)
                setQuizzes('No quizzes found')
            }
            if (data.length < 16) {
                setIsMore(false)
            }
        })
    }, [shouldCallAPI])

    useEffect(() => {
        setSkip(0)
        setshouldCallAPI(!shouldCallAPI)
    }, [category])

    const loadMore = () => {
        setIsFetching(true)
        getByCategory(category, skip, limit).then(({ data }) => {
            setIsFetching(false)
            setSkip(skip + limit)
            if (data.length > 0) {
                setQuizzes([...quizzes, ...data])
            }
        })
    }

    return (
        <>
            <Tiles>
                {!Array.isArray(quizzes) ? (
                    <h1
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        {quizzes}
                    </h1>
                ) : (
                    quizzes.map(item => (
                        <Tile
                            thumbnail={item.thumbnail}
                            id={item._id}
                            key={item._id}
                            name={item.name}
                            author={item.author}
                            views={item.views}
                        />
                    ))
                )}
                <LoadMoreButton onClick={loadMore} type='button'>
                    {!isFetching && isMore && <h1>LOAD MORE</h1>}
                </LoadMoreButton>
            </Tiles>
            {isFetching && (
                <Loader
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    type='Circles'
                    height={80}
                    width={80}
                />
            )}
        </>
    )
}

export default Categories

Categories.propTypes = {
    category: PropTypes.string.isRequired,
}
