import { get, post } from "../utils/requestMethod";

export const login = async (email, password) => {
    const result = await get(`users?email=${email}&password=${password}`)
    return result;
};

export const register = async (path, data) => {
    const result = await post(path, data);
    return result;
}

export const checkExist = async (key, value) => {
    const result = await get(`users?${key}=${value}`)
    return result;
}