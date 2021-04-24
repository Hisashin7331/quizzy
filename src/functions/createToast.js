export const createToast = (addToast, data) => {
    if (data.error) {
        addToast(data.error, { appearance: 'error' })
    }
    if (data.warning) {
        addToast(data.warning, { appearance: 'warning' })
    }
    if (data.message) {
        addToast(data.message, { appearance: 'success' })
    }
}
