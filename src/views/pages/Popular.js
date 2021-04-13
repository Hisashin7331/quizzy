/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'

import Heading from 'components/atoms/Heading'
import Tile from 'components/atoms/Tile'

import { getPopularQuizzes } from 'api/quizzes'
import { Content } from 'components/styles/Content'

import { Tiles, LoadMoreButton } from './styles'

const Popular = () => {
    const [quizzes, setQuizzes] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [skip, setSkip] = useState(0)
    const limit = 16

    useEffect(() => {
        getPopularQuizzes(skip, limit).then(data => {
            if (data.length > 0) {
                setIsFetching(false)
                setQuizzes(data)
                setSkip(skip + limit)
            }
        })
    }, [])

    const loadMore = () => {
        setIsFetching(true)
        getPopularQuizzes(skip, limit).then(data => {
            setIsFetching(false)
            if (data.length > 0) {
                setQuizzes([...quizzes, ...data])
            }
        })
    }
    return (
        <Content>
            <Heading header='Popular' />
            <Tiles>
                {quizzes.map(item => (
                    <Tile
                        key={item._id}
                        name={item.name}
                        author={item.author}
                        views={item.views}
                    />
                ))}
            </Tiles>

            <LoadMoreButton onClick={loadMore} type='button'>
                {!isFetching ? (
                    <h1>LOAD MORE</h1>
                ) : (
                    <h1>LOADING...</h1>
                )}
            </LoadMoreButton>
        </Content>
    )
}

export default Popular
