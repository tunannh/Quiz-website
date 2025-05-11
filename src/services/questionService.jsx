import { get } from "../utils/requestMethod"

export const getAllQuestion = async () => {
    const result = await get("questions");
    return result;
}

export const getListQuestion = async (id) => {
    const result = await get(`questions?topicId=${id}`);
    return result;
}