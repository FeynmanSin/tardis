import axios from 'axios';

const server = axios.create({
    baseURL: '/juhe'
})

server.interceptors.request.use(config => {
    console.log('>>>>config', config)
    return config
})

server.interceptors.response.use(response => {
    console.log('>>>>response', response)
    return response
})

export default server