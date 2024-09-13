import axios from "axios";
import { Flip, toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL:"https://node-js-wse4.onrender.com",
})



axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
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
    (response) => {
        // toast.success(response.data.message)
        console.log(response.data.message,"from interceptors")
        return response},
    (error) => {
        // toast.error(error.message);  
        return Promise.reject(error)
    }
)

export default axiosInstance;