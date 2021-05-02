import { AUTH, LOGOUT, LOCAL } from 'constants/actionTypes'

export const userReducer = (state = { authData: {} }, action) => {
    switch (action.type) {
        case LOCAL:
            return action?.payload
        case AUTH:
            localStorage.setItem(
                'user',
                JSON.stringify({ ...action?.payload }),
            )

            return action?.payload
        case LOGOUT:
            localStorage.clear()
            return null
        default:
            return state
    }
}
