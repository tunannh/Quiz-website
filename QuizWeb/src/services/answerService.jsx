import { getCookie } from "../../helper/cookie"
import { get } from "../utils/requestMethod";
export const getListAnswerByUserId = async () => {
    const userId = getCookie("id");
    const result = await get(`answers?userId=${userId}`)
    return result;
}