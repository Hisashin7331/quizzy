/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { seo } from 'functions/seo'
import { useQuery } from 'hooks/useQuery'

import Tile from 'components/atoms/Tile'

import { getByQuery } from 'api/quizzes'

import { Tiles, LoadMoreButton } from './styles'

const FindQuiz = () => {
    const query = useQuery()
    const [quizzes, setQuizzes] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [skip, setSkip] = useState(0)
    const limit = 16

    useEffect(() => {
        getByQuery(skip, limit).then(data => {
            if (data.length > 0) {
                setIsFetching(false)
                setQuizzes(data)
                setSkip(skip + limit)
            }
        })
        seo({
            title: 'Search |',
            description:
                'Search for quizzes and find a quiz that YOU want to take',
        })
    }, [query])

    const loadMore = () => {
        setIsFetching(true)
        getByQuery(query.get('query'), skip, limit).then(data => {
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

export default FindQuiz
