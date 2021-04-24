import { config } from 'config'
import { AUTH } from 'constants/actionTypes'
import { createToast } from 'functions/createToast'
import api from './api'

export const signIn = (
    formData,
    history,
    addToast,
) => async dispatch => {
    const { data } = await api.post(
        `${config.apiURL}/users/login`,
        formData,
    )
    if (data.error || data.warning) {
        createToast(addToast, data)
        return
    }
    createToast(addToast, data)
    dispatch({ type: AUTH, payload: data })
    history.push('/')
}

export const signUp = (formData, avatar, addToast) => {
    api.post(`${config.apiURL}/images/upload`, avatar).then(
        ({ data }) => {
            api.post(`${config.apiURL}/users/register`, {
                avatar: data,
                ...formData,
            })
                .then(({ data: res }) => createToast(addToast, res))
                .catch(err => {
                    addToast(err, {
                        appearance: 'error',
                        autoDismiss: true,
                        placement: 'bottom-center',
                    })
                })
        },
    )
}

export const fetchLocal = dispatch => {
    const local = JSON.parse(localStorage.getItem('user'))
    if (local) {
        dispatch({
            type: 'FETCH_LOCAL',
            payload: local,
        })
    }
}

export const logoutUser = dispatch => {
    dispatch({
        type: 'USER_LOGOUT',
    })
}
