import axiosInstance from "../axiosInterceptors";


const userLogin = async (userData) => {
    const response = await axiosInstance.post("/user/login",userData)
    return response.data.data
}
 const userSignup = async (sigupInfo) => {
    const response = await axiosInstance.post("/user",sigupInfo)
    console.log(response.data.data)
    return response.data.data
}

const forgotPassword = async (userEmail) => {
    const response = await axiosInstance.post("/user/forgot-password",userEmail)
    console.log(response,"forgot password response")
}

 const emailVerification = async (verificationData) => {
    const {id , token} = verificationData
    const response = await axiosInstance.get("/user/email/verification?token=" + token + "&userId=" + id)
    console.log(response,"verification response")
    return response.data.message
} 

 const userDataDisplay = async () =>{
    const response = await axiosInstance.get("/user?pageNumber=1&pageSize=50")
    return response.data.data
}

 const deleteUser = async (id) => {
    const response = await axiosInstance.delete(`/user/${id}`)
    console.log(response,"deleting response")
}

 const singleUserData = async (id) => {
    const response = await axiosInstance.get(`/user/${id}`)
    return response.data.user
}


const authServices = {
    userLogin, userSignup, emailVerification, userDataDisplay, singleUserData,deleteUser, forgotPassword
}

export default authServices