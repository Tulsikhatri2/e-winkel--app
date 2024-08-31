import axios from "axios"

export const countries = async () => {
    const response = await axios.get("https://node-js-wse4.onrender.com/common/countries");
    return response.data.data
}

export const states = async () => {
    const response = await axios.get("https://node-js-wse4.onrender.com/common/states/101");
    return response.data.data
}

export const cities = async () => {
    const response = await axios.get("https://node-js-wse4.onrender.com/common/cities/4039")
    return response.data.data
}