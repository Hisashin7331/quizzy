import axios from 'axios'
import { config } from 'config'

export const getRecentQuizzes = async (skip = 0, limit = 4) => {
    const apiResult = await axios.get(
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
    const apiResult = await axios.get(
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

export const createQuiz = quiz => {
    axios
        .post(`${config.apiURL}/quizzes/createQuiz`, {
            author: 'jk',
            ...quiz,
        })
        .then(({ data }) => console.log(data))
}
