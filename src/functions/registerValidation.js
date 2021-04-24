export const registerValidation = data => {
    const { email, password, repeatPassword } = data
    const errors = []

    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i
    if (!email || !password || !repeatPassword) {
        errors.push('Fill the form!')
    }
    if (!emailRegExp.test(String(email))) {
        errors.push('Email must be a valid email address')
    }
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long')
    }
    if (password !== repeatPassword) {
        errors.push(`Passwords doesn't match`)
    }

    return errors
}

export const detailsValidation = data => {
    const { username } = data
    const errors = []

    if (!username) {
        errors.push('Fill up the username')
    }
    if (username.length < 6) {
        errors.push('Username must be at least 6 characters long')
    }
    if (username.length > 24) {
        errors.push('Username must be 24 characters or less')
    }
    return errors
}

export const preferencesValidation = data => {
    const { preferences } = data
    const errors = []
    if (preferences.length < 1) {
        errors.push('Choose at least one category')
    }
    return errors
}
