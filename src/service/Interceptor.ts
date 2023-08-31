import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ENV = process.env.REACT_APP_ENV;

const client = axios.create({ baseURL: BASE_URL})

export const request = ({ ...options }) => 
{
   client.defaults.headers.common.Authorization = `Bearer token`
   const onSuccess = (response: any) => response
   const onError = (error: any) => {
	return error
   }
   return client(options).then(onSuccess).catch(onError)
}