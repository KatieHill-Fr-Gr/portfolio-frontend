import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL

export const getUsers = () => {
    return axios.get(`${BASE_URL}/users/`)
}

export const getUserById = (userId) => {
  return axios.get(`${BASE_URL}/users/${userId}/`)
}
