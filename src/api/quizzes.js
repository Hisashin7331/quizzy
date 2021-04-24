import { config } from 'config'

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

export const createQuiz = (quiz, thumbnail) => {
    api.post(`${config.apiURL}/images/upload`, thumbnail).then(
        ({ data }) => {
            api.post(`${config.apiURL}/quizzes/createQuiz`, {
                author: 'jk',
                thumbnail: data,
                ...quiz,
            }).then(response => console.log(response))
        },
    )
}
