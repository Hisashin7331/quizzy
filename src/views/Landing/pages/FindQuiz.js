/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { useQuery } from 'hooks/useQuery'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

import Tile from 'components/atoms/Tile'

import { getByQuery } from 'api/quizzes'

import { Tiles, LoadMoreButton } from './styles'

const FindQuiz = ({ shouldRerender }) => {
    const query = useQuery()
    const [quizzes, setQuizzes] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [isMore, setIsMore] = useState(true)
    const [searchedQuery, setSearchedQuery] = useState('')
    const [skip, setSkip] = useState(0)
    const limit = 16

    useEffect(() => {
        setSearchedQuery(query.get('query'))
        getByQuery(searchedQuery, skip, limit).then(({ data }) => {
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
    }, [searchedQuery])

    useEffect(() => {
        setSkip(0)
        setSearchedQuery(query.get('query'))
    }, [shouldRerender])

    const loadMore = () => {
        setIsFetching(true)
        getByQuery(searchedQuery, skip, limit).then(({ data }) => {
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

export default FindQuiz

FindQuiz.propTypes = {
    shouldRerender: PropTypes.bool.isRequired,
}
