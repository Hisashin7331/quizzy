/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'

import Tile from 'components/atoms/Tile'
import { seo } from 'functions/seo'

import { getForYou } from 'api/quizzes'

import { Tiles, LoadMoreButton } from './styles'

const ForYou = () => {
    const [quizzes, setQuizzes] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [skip, setSkip] = useState(0)
    const limit = 16

    useEffect(() => {
        getForYou(skip, limit).then(data => {
            if (data.length > 0) {
                setIsFetching(false)
                setQuizzes(data)
                setSkip(skip + limit)
            }
        })
        seo({
            title: 'ForYou quizzes |',
            description:
                'Browse the most viewed quizzes on Quizzy. Create your own and see if you can be the best!',
        })
    }, [])

    const loadMore = () => {
        setIsFetching(true)
        getForYou(skip, limit).then(data => {
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

export default ForYou
