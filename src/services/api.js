import axios from "axios";

export const key = "72eb14f7916f2c9d80031f01067fe9f3c843223a";

const api  = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization':`Bearer ${key}`
    }
    
})

export default api;