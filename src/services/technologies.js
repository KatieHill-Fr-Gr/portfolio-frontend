import axios from 'axios'

export const getTechnologies = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + '/technologies/')
    return response.data
  } catch (error) {
    console.error('Error fetching technologies:', error)
    throw error
  }
}