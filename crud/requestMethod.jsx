const API_DOMAIN = "https://api-quiz-silq.onrender.com/";

export const get = async (path) => {
    const respond = await fetch(API_DOMAIN + path);
    const result = await respond.json();
    return result;
}

export const post = async (path, data) => {
    const respond = await fetch(API_DOMAIN + path, {
        method: "POST",
        Accept: "application/json",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const result = await respond.json(data);
    return result;
}
export const patch = async (path, data) => {
    const respond = await fetch(API_DOMAIN + path, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application.json"
        },
        body: JSON.stringify(data)
    });
    const result = await respond.json(data);
    return result;
}
export const del = async (path) => {
    const respond = await fetch(API_DOMAIN + path, {
        method: "DELETE",
    });
    const result = await respond.json();
    return result;
}