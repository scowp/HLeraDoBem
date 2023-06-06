import axios from "axios";

export const config = {
    baseURL: process.env.URL_LINK,
    auth: {
        username: process.env.BASIC_AUTH_USER,
        password: process.env.BASIC_AUTH_PASS
    }
};

export async function listarUsuarios() {
    try {
        const response = await axios.get("/pessoa", config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function obterUsuario(id) {
    try {
        const response = await axios.get(`/pessoa/${id}`, config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function inserirUsuario(infos, dados, endereco){
    const data = {...infos, dados, endereco};
    try {
        const response = await axios.post("/pessoa", data, config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function atualizarUsuario(id, infos = {}, dados = {}, endereco = {}){
    const data = {...infos, dados, endereco};
    try {
        const response = await axios.put(`/pessoa/${id}`, data, config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function atualizarSenha(id, senha){
    const dados = {"senha": senha};
    const data = {dados};
    try {
        const response = await axios.put(`/pessoa/${id}`, data, config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function atualizarEmail(id, email){
    const dados = {"email": email};
    const data = {dados};
    try {
        const response = await axios.put(`/pessoa/${id}`, data, config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function atualizarTelefone(id, telefone){
    const data = {"numeroCelular": telefone};
    try {
        const response = await axios.put(`/pessoa/${id}`, data, config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function encontrarCampanhasInscritas(id){
    try {
        const response = await axios.get(`/campanha/user/${id}`, config);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}