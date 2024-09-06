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
    (response) => response,
    (error) => {
        if(error){
            toast.error(error.message, {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
                });
            
        }
        return Promise.reject(error)
    }
)

export default axiosInstance;