import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://node-js-wse4.onrender.com",
})



axiosInstance.interceptors.request.use(
    (config) => {
        const token = 'YOUR_ACCESS_TOKEN'; 

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error){
            alert("error")
        }
        return Promise.reject(error)
    }
)

export default axiosInstance;