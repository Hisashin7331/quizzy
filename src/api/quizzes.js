import { config } from 'config'
import { createToast } from 'functions/createToast'

import api from './api'

export const getRecentQuizzes = async (skip = 0, limit = 4) => {
    const apiResult = await api.get(
        `${config.apiURL}/quizzes/recentQuizzes`,
        {
            params: {
                skip,
                limit,
            },
        },
    )
    return apiResult.data
}

export const getPopularQuizzes = async (skip = 0, limit = 4) => {
    const apiResult = await api.get(
        `${config.apiURL}/quizzes/popularQuizzes`,
        {
            params: {
                skip,
                limit,
            },
        },
    )
    return apiResult.data
}

export const getForYou = async (skip = 0, limit = 16) => {
    const apiResult = await api.get(
        `${config.apiURL}/quizzes/forYou`,
        {
            params: {
                skip,
                limit,
            },
        },
    )
    return apiResult.data
}

export const createQuiz = (quiz, thumbnail, addToast) => {
    api.post(`${config.apiURL}/images/upload`, thumbnail).then(
        ({ data }) => {
            api.post(`${config.apiURL}/quizzes/createQuiz`, {
                thumbnail: data,
                ...quiz,
            }).then(response => {
                createToast(addToast, response)
            })
        },
    )
}

export const getQuiz = async id => {
    const { data } = await api.get(
        `${config.apiURL}/quizzes/getQuiz`,
        { params: { id } },
    )
    return data
}

export const incrementViews = id => {
    api.put(`${config.apiURL}/quizzes/incrementViews`, { id })
}

export const getByQuery = async (query, skip, limit) => {
    const result = await api.get(`${config.apiURL}/quizzes/search`, {
        params: {
            query,
            skip,
            limit,
        },
    })
    return result
}
