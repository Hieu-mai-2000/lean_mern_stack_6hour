import axios from 'axios'
import { apiUrl } from '../constant'

export const login = (data) => axios.post(`${apiUrl}/auth/login`, data)
export const register = (data) => axios.post(`${apiUrl}/auth/register`, data)
