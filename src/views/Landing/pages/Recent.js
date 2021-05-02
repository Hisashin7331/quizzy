/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { seo } from 'functions/seo'

import Tile from 'components/atoms/Tile'

import { getRecentQuizzes } from 'api/quizzes'

import { Tiles, LoadMoreButton } from './styles'

const Recent = () => {
    const [quizzes, setQuizzes] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [skip, setSkip] = useState(0)
    const limit = 16

    useEffect(() => {
        getRecentQuizzes(skip, limit).then(data => {
            if (data.length > 0) {
                setIsFetching(false)
                setQuizzes(data)
                setSkip(skip + limit)
            }
        })
        seo({
            title: 'Recent quizzes |',
            description:
                'Browse quizzes that are created recently by users. Take a part in our fun and create your own quiz!',
        })
    }, [])

    const loadMore = () => {
        setIsFetching(true)
        getRecentQuizzes(skip, limit).then(data => {
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
                {quizzes.map(item => (
                    <Tile
                        thumbnail={item.thumbnail}
                        id={item._id}
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
        </>
    )
}

export default Recent
