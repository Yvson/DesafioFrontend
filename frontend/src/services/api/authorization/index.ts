import { AxiosAuth } from '../config'
import { CLIENT_ID, CLIENT_SECRET } from '../utils';



export const getNewAccessToken = async () => {
    const response = await AxiosAuth.request({
        url: '/oauth/access-token',
        method: 'post',
        auth: {
            username: String(CLIENT_ID), 
            password: String(CLIENT_SECRET),
        },
        data: {
            "grant_type": "client_credentials",
        },
        });
    return response.data.access_token;
}
