import axios from 'axios'

const fetchData = axios.create({
    baseURL: 'https://tyocskttozwepxepaqdw.supabase.co/auth/v1/',
})


const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5b2Nza3R0b3p3ZXB4ZXBhcWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1MTc1MjAsImV4cCI6MjAxNzA5MzUyMH0.3Mn1JEh5YtcJrQduaBAm1hkqlnZ8poKb142uF-IAOig`


fetchData.interceptors.request.use((request) => {


    request.headers['authorization'] = `Bearer ${token}`

    return request
}, (error) => {
    return Promise.reject(error)
})

export default fetchData


