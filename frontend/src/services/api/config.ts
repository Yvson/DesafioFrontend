import axios from 'axios';
import { getNewAccessToken } from './authorization';
import { CLIENT_ID } from './utils';



const instanceAxios = axios.create({
    baseURL: "https://api-sandbox.anbima.com.br/",
    timeout: 2000,
  })

  instanceAxios.interceptors.request.use(
    (config) => {
      config.headers = {
        'Content-Type': 'application/json',
        'client_id': String(CLIENT_ID),
        'access_token': localStorage['ACCESS_TOKEN'],
      }
        
        return Promise.resolve(config);
    },
    error => {
      return Promise.reject(error)
    },
  )  
  
  instanceAxios.interceptors.response.use(
    response => {
  
      // Do something with response data
  
      return response
    },
    error => {
  
      // Do something with response error
  
      // You can even test for a response code
      // and try a new request before rejecting the promise
  
      if (
        error.request._hasError === true &&
        error.request._response.includes('connect')
      ) {
        window.alert(
          'Não foi possível conectar aos nossos servidores, sem conexão a internet',
        )
      }

      const requestConfig = error.config;

      if (error.response.status === 401) {
        // access_token expirou
        getNewAccessToken().then((new_access_token) => {
            localStorage['ACCESS_TOKEN'] = new_access_token;
        });
  
        return instanceAxios(requestConfig)
      }
  
      return Promise.reject(error)
    },
  )
  


export default instanceAxios;