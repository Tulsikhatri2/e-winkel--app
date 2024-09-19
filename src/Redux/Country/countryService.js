import axios from "axios"

export const countries = async () => {
    const response = await axios.get("https://node-js-wse4.onrender.com/common/countries");
    return response.data.data
}

export const states = async (coutryCode) => {
    const response = await axios.get(`https://node-js-wse4.onrender.com/common/states/${coutryCode}`);
    return response.data.data
}

export const cities = async (stateCode) => {
    const response = await axios.get(`https://node-js-wse4.onrender.com/common/cities/${stateCode}`)
    return response.data.data
}