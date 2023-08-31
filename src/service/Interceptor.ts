import axios from 'axios'

const client = axios.create({ baseURL: 'http://localost:3000'})

export const request = ({ ...options }) => 
{
   client.defaults.headers.common.Authorization = `Bearer token`
   const onSuccess = (response: any) => response
   const onError = (error: any) => {
	return error
   }
   return client(options).then(onSuccess).catch(onError)
}