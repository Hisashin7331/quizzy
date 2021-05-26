/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'
import api from 'api/api'
import { config } from 'config'

import Slab from 'components/atoms/Slab'
import Stat from 'components/atoms/Stat'

import { Wrapper, Heading, Stats, Tiles } from './styles'

const Dashboard = () => {
    const { addToast } = useToasts()

    const [quizzes, setQuizzes] = useState([])
    const [views, setViews] = useState(0)

    useEffect(() => {
        api.get(`${config.apiURL}/users/getViews`)
            .then(({ data }) => {
                setViews(data)
            })
            .catch(err => addToast(err))
        api.get(`${config.apiURL}/users/getUserQuizzes`)
            .then(({ data }) => setQuizzes(data))
            .catch(err => addToast(err))
    })

    return (
        <Wrapper>
            <Heading>Dashboard</Heading>
            <Stats>
                <Stat
                    value={quizzes ? quizzes.length : 0}
                    name='Quizzes'
                />
                <Stat value={views || 0} name='Views' />
            </Stats>
            <Heading>Your quizzes</Heading>
            <Tiles>
                {quizzes &&
                    quizzes.map(item => (
                        <Slab
                            thumbnail={item.thumbnail}
                            id={item._id}
                            key={item._id}
                            name={item.name}
                            views={item.views}
                        />
                    ))}
            </Tiles>
        </Wrapper>
    )
}

export default Dashboard
