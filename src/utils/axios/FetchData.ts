import axios from 'axios'

const BASEURL_PROD = `https://ixnsvqbmaiyhblbsintm.supabase.co/rest/v1/`

const fetchData = axios.create({
    baseURL: BASEURL_PROD,
    headers: {
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
    }
})


fetchData.interceptors.request.use((request) => {
    request.headers['apikey'] = `${import.meta.env.VITE_API_KEY}`
    request.headers['authorization'] = `Bearer ${import.meta.env.VITE_API_KEY}`
    return request
}, (error) => {
    return Promise.reject(error)
})

export default fetchData


