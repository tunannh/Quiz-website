import { getCookie } from "../helper/cookie";
import { get, post } from "../crud/requestMethod";

export const getListAnswerByUserId = async () => {
    const userId = getCookie("id");
    const result = await get(`answers?userId=${userId}`)
    return result;
}
export const getListAnswer = async () => {
    const result = await get(`answers`)
    return result;
}
export const getListAnswerById = async (id) => {
    const result = await get(`answers/${id}`)
    return result;
}
export const addAnswer = async (option) => {
    const result = await post(`answers`, option)
    return result;
}