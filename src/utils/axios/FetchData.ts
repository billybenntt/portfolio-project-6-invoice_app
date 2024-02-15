import axios from 'axios'

const BASEURL_TEST=`http://localhost:3100/rest/v1/`
const BASEURL_PROD=`https://tyocskttozwepxepaqdw.supabase.co/rest/v1/`

const fetchData = axios.create({
    baseURL: BASEURL_TEST,
})


fetchData.interceptors.request.use((request) => {

    request.headers['apikey'] = `${import.meta.env.VITE_API_KEY}`
    request.headers['authorization'] = `Bearer ${import.meta.env.VITE_API_KEY}`

    return request
}, (error) => {
    return Promise.reject(error)
})

export default fetchData


