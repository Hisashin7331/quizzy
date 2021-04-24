import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:8080' })

api.interceptors.request.use(req => {
    if (localStorage.getItem('user')) {
        const storage = JSON.parse(localStorage.getItem('user'))
        req.headers.auth = `Bearer ${storage.token}`
    }
    return req
})

export default api
