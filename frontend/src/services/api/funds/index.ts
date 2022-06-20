import instanceAxios from '../config';



export const getAllFunds = async () => {
    const response = await instanceAxios.get("feed/fundos/v1/fundos-estruturados");
    return response.data
};

export const getFundById = async (id:string) => {
    const response = await instanceAxios.get(`feed/fundos/v1/fundos-estruturados/${id}`);
    return response.data
};


export const getHistoricalDataFundById = async (id:string) => {
    const response = await instanceAxios.get(`feed/fundos/v1/fundos-estruturados/${id}/serie-historica`);
    return response.data
};