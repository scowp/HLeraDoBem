import axios from "axios";
import { Buffer } from "buffer";

import {URL_LINK, BASIC_AUTH_USER, BASIC_AUTH_PASS} from '@env'

const config = {
    baseURL: process.env.URL_LINK,
    headers: {
        Authorization: `Basic ${Buffer.from(`${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASS}`).toString("base64")}`
    }
};


export async function validarLogin(user, senha) {
    try {
        const response = await axios.get(`/login?user=${user}&senha=${senha}`, config);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function validarUser(user) {
    try {
        const response = await axios.get(`/login/user?user=${user}`, config);
        const status = response.data.status;
        if (status == 200) {
            return response.data.message;
        } else {
            return response.data;
        }
    } catch (error) {
        return error.response.data;
    }
}