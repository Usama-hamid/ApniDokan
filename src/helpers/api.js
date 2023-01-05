import { AUTH_TOKEN, BASE_URL } from "../constants/TheConstants";

const api = axios.create({
    baseURL: `${BASE_URL}`,
    headers: { 'x-access-token': AUTH_TOKEN }
});

// Alter defaults after instance has been created


export default api


