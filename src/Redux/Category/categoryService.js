import axios from "axios"

export const categoryCreate = async(categoryData) => {
    const {name,status,token} = categoryData
    const categoryInfo = {name:name,status:status}
    const response = await axios.post("https://node-js-wse4.onrender.com/category",categoryInfo,{
        "headers":{
            "Authorization" : "Bearer " + token
        }
    })
    // console.log(response, "response from service")
}

export const categoryDataDisplay = async(token) => {
    const response = await axios.get("https://node-js-wse4.onrender.com/category?pageNumber=1&pageSize=10",{
        "headers":{
            "Authorization" : "Bearer " + token
        }
    })
    // console.log(response.data.data,"category display response")
    return response.data.data
}

export const singleCategoryDisplay = async(categoryInfo) => {
    const {id, token} = categoryInfo
    const response = await axios.get(`https://node-js-wse4.onrender.com/category/${id}`,{
        "headers":{
            "Authorization" : "Bearer " + token
        }
    })
    console.log(response,"category data single")
    return response.data.details
}