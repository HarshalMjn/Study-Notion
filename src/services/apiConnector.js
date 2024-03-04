import axios from 'axios';


export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, hraders, parans) => {
    return axiosInstance( {
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers:hraders ? hraders: null,
        params: parans ? parans : null,

    });
}