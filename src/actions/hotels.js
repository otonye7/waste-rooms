import axios from 'axios';

export const createHotel = async (token, data) => {
    await axios.post(`http://localhost:8000/api/create-hotel`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const allHotels = async () => await axios.get(`http://localhost:8000/api/hotels`)