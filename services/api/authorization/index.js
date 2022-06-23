var axios = require('axios').default;




const axiosAuth = axios.create({
    baseURL: "https://api.anbima.com.br/",
    timeout: 1000,
})


const getNewAccessToken = async () => {
    const response = await axiosAuth.request({
        url: '/oauth/access-token',
        method: 'post',
        auth: {
            username: process.env.CLIENT_ID,
            password: process.env.CLIENT_SECRET,
        },
        data: {
            "grant_type": "client_credentials",
        },
        });
    return response.data.access_token;
}

module.exports = { getNewAccessToken };