import axios from 'axios';
import { getNewAccessToken } from './authorization';
import { CLIENT_ID } from './utils';
import TokenService from './token/index';



export const AxiosAuth = axios.create({
  baseURL: "https://api.anbima.com.br/",
  timeout: 1000,

})

export const instanceAxios = axios.create({
  baseURL: "https://api-sandbox.anbima.com.br/",
  timeout: 1000,

})


instanceAxios.interceptors.request.use(
  (config) => {
    config.headers = {
      'Content-Type': 'application/json',
      'client_id': String(CLIENT_ID),
      'access_token': TokenService.getLocalAccessToken()
    }

      return Promise.resolve(config);
  },
  error => {
    return Promise.reject(error)
  },
)  

instanceAxios.interceptors.response.use(
  response => {

    return response
  },
  async (error) => {

    if (
      error.request._hasError === true &&
      error.request._response.includes('connect')
    ) {
      window.alert(
        'Não foi possível conectar aos nossos servidores, sem conexão a internet',
      )
    }

    const requestConfig = error.config;

    if (error.response.status === 401 && !requestConfig._retry) {
      requestConfig._retry = true;
      // access_token expirou
      await getNewAccessToken().then((new_access_token:string) => {
          TokenService.updateLocalAccessToken(new_access_token);
      });


      return instanceAxios(requestConfig)
    }

    return Promise.reject(error)
  },
)