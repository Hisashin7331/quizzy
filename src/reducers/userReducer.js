import { AUTH, LOGOUT, LOCAL } from 'constants/actionTypes'

export const userReducer = (state = { authData: {} }, action) => {
    switch (action.type) {
        case LOCAL:
            return { ...state, authData: action?.payload }
        case AUTH:
            localStorage.setItem(
                'user',
                JSON.stringify({ ...action?.payload }),
            )

            return { ...state, authData: action?.payload }
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: {} }
        default:
            return state
    }
}
