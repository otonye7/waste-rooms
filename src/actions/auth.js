import axios from 'axios';

export const register = async (user) => {
    return (
        await axios.post(`http://localhost:8000/api/register`, user)
    )
}

export const login = async (user) => {
    return (
        await axios.post(`http://localhost:8000/api/login`, user)
    )
}