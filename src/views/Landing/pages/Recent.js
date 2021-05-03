/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { seo } from 'functions/seo'
import Loader from 'react-loader-spinner'

import Tile from 'components/atoms/Tile'

import { getRecentQuizzes } from 'api/quizzes'

import { Tiles, LoadMoreButton } from './styles'

const Recent = () => {
    const [quizzes, setQuizzes] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [skip, setSkip] = useState(0)
    const [isMore, setIsMore] = useState(true)
    const limit = 16

    useEffect(() => {
        getRecentQuizzes(skip, limit).then(data => {
            if (data.length > 0) {
                setIsFetching(false)
                setQuizzes(data)
                setSkip(skip + limit)
            }
            if (data.length < 16) {
                setIsMore(false)
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

            <LoadMoreButton onClick={loadMore} type='button'>
                {!isFetching && isMore && <h1>LOAD MORE</h1>}
            </LoadMoreButton>
        </>
    )
}

export default Recent
