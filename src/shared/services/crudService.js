import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080"
});

export async function listar(controller) {
    const response = await api.get(controller);
    return response.data;
}

export async function cadastrar(controller, objeto) {
    const response = await api.post(controller, objeto);
    return response.data;
}