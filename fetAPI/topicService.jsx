import { get } from "../crud/requestMethod"

export const getListTopic = async () => {
    const result = await get("topics");
    return result;
}

export const getTopic = async (id) => {
    const result = await get(`topics/${id}`);
    return result;
}