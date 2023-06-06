import axios from "axios";

const config = {
    baseURL: process.env.URL_LINK,
    auth: {
        username: process.env.BASIC_AUTH_USER,
        password: process.env.BASIC_AUTH_PASS
    }
};

export async function validarLogin(user, senha) {
    try {
        const response = await axios.get(`/login?user=${user}&senha=${senha}`, config);
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