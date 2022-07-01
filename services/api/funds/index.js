var axios = require('axios').default;
var { getNewAccessToken } = require('../authorization');
var TokenService = require('../token/index');


const instanceAxios = axios.create({
    baseURL: "https://api-sandbox.anbima.com.br/",
    timeout: 1000,
})
  
instanceAxios.interceptors.request.use(
    (config) => {
        config.headers = {
        'Content-Type': 'application/json',
        'client_id': process.env.CLIENT_ID,
        'access_token': TokenService.getLocalAccessToken()
        }

    return Promise.resolve(config);
},
    error => {
        return Promise.reject(error)
    },
);
    
instanceAxios.interceptors.response.use(
    response => {

        return response
    },
    async (error) => {


        const requestConfig = error.config;

        if (error.response.status === 401 && !requestConfig?._retry) {
            requestConfig._retry = true;
            // access_token expirou
            await getNewAccessToken().then((new_access_token) => {
                TokenService.updateLocalAccessToken(new_access_token);
            });


            return instanceAxios(requestConfig)
        }

        return Promise.reject(error)
    },
)

const getAllFunds = async () => {
    const response = await instanceAxios.get("feed/fundos/v1/fundos-estruturados");
    return response.data
};

const getFundById = async (id) => {
    const response = await instanceAxios.get(`feed/fundos/v1/fundos-estruturados/${id}`);
    return response.data
};


const getHistoricalDataFundById = async (id) => {
    const response = await instanceAxios.get(`feed/fundos/v1/fundos-estruturados/${id}/serie-historica`);
    return response.data
};


module.exports = { getAllFunds, getFundById, getHistoricalDataFundById };