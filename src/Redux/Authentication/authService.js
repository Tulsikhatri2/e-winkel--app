import axiosInstance from "../axiosInterceptors";
import axios from "axios";

const userLogin = async (userData) => {
    const response = await axiosInstance.post("/user/login",userData)
    console.log(response,"login response")
    return response.data.data
}
 const userSignup = async (sigupInfo) => {
    const response = await axiosInstance.post("/user",sigupInfo)
    console.log(response,"signup response")
    return response.data.data
}

// const forgotPassword = async (userEmail) => {
//     const response = await axios.post("https://node-js-wse4.onrender.com/user/forgot-password",userEmail)
// }

 const emailVerification = async (verificationData) => {
    const {token , id} = verificationData
    const response = await axiosInstance.post(`/user/email/verification?token=${token}&userId=${id}`)
    return response.data.message
} 

 const userDataDisplay = async (token) =>{
    const response = await axios.get("https://node-js-wse4.onrender.com/user?pageNumber=1&pageSize=20",{
        "headers":{
            "Authorization" : "Bearer " + token
        }
    })
    return response.data.data
}

 const deleteUser = async (deleteInfo) => {
    const {id,token} = deleteInfo
    const response = await axios.delete(`https://node-js-wse4.onrender.com/user/${id}`,{
        "headers":{
            "Authorization" : "Bearer " + token
        }
    })
    console.log(response,"deleting response")
}

 const singleUserData = async (userData) => {
    const {id,token} = userData
    const response = await axios.get(`https://node-js-wse4.onrender.com/user/${id}`,{
        "headers":{
            "Authorization" : "Bearer " + token
        }
    })
    console.log(response,"single user response from service")
    return response.data.user
}


const authServices = {
    userLogin, userSignup, emailVerification, userDataDisplay, singleUserData,deleteUser
}

export default authServices